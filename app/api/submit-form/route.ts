import { NextRequest, NextResponse } from 'next/server';

/**
 * Form submission endpoint for the contact page.
 *
 * Fans a lead out to Telegram (instant notification to Igor's phone)
 * and Google Sheets (searchable log of every submission) in parallel.
 * Either integration is optional -- if its env vars are missing, that
 * leg is skipped silently and the other still runs. If BOTH are missing
 * the lead is only written to the Vercel function log, which rotates
 * after ~1h, so configuring at least one is essential before launch.
 *
 * Downstream failures never fail the form -- the user always sees
 * success as long as the request body was well-formed. The alternative
 * (returning 500 when Telegram is briefly down) loses leads for no gain.
 *
 * Env vars (all optional):
 *   TELEGRAM_BOT_TOKEN   -- from @BotFather
 *   TELEGRAM_CHAT_ID     -- recipient; use @userinfobot to find your own
 *   GOOGLE_SHEETS_URL    -- Apps Script Web App URL (see repo setup notes)
 */

interface Lead {
  name: string;
  contact: string;
  contactMethod?: string;
  serviceType?: string;
  budgetRange?: string;
  properties?: string;
  preferredTime?: string;
}

// Human-readable labels mirror the dropdowns on the contact form so that
// Telegram/Sheet entries read the same as what the lead actually clicked.
const SERVICE_LABELS: Record<string, string> = {
  invest: 'Інвестувати в проєкт',
  consultation: 'Консультація з приводу власних інвестицій',
  tax: 'Зменшення податкового навантаження',
  management: 'Управління нерухомістю',
};

const CONTACT_METHOD_LABELS: Record<string, string> = {
  telegram: 'Telegram',
  whatsapp: 'WhatsApp',
  viber: 'Viber',
  phone: 'Дзвінок',
};

const TIME_LABELS: Record<string, string> = {
  morning: 'Ранок (9–12)',
  afternoon: 'День (12–18)',
  evening: 'Вечір (18–21)',
};

const label = (map: Record<string, string>, key?: string) =>
  key ? map[key] ?? key : '—';

export async function POST(request: NextRequest) {
  let data: Lead;
  try {
    data = (await request.json()) as Lead;
  } catch {
    return NextResponse.json({ error: 'Bad JSON' }, { status: 400 });
  }

  if (!data.name || !data.contact) {
    return NextResponse.json(
      { error: 'Missing required fields' },
      { status: 400 }
    );
  }

  // Always log -- the backstop when every integration is unconfigured
  // or broken. Rotates in ~1h on Vercel; do not rely on it alone.
  console.log('[lead]', JSON.stringify(data));

  // Fan out. allSettled so a Telegram outage doesn't skip the Sheet write.
  const results = await Promise.allSettled([
    sendToTelegram(data),
    sendToSheets(data),
  ]);

  results.forEach((r, i) => {
    const name = ['telegram', 'sheets'][i];
    if (r.status === 'rejected') {
      console.error(`[lead] ${name} failed:`, r.reason);
    } else if (r.value === 'skipped') {
      console.log(`[lead] ${name} skipped (no env vars)`);
    } else {
      console.log(`[lead] ${name} ok`);
    }
  });

  return NextResponse.json({ success: true }, { status: 200 });
}

async function sendToTelegram(data: Lead): Promise<'ok' | 'skipped'> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return 'skipped';

  const lines = [
    '📬 <b>Нова заявка з sis.pl.ua</b>',
    '',
    `👤 <b>Ім'я:</b> ${escapeHtml(data.name)}`,
    `📞 <b>Контакт:</b> ${escapeHtml(data.contact)} (${label(CONTACT_METHOD_LABELS, data.contactMethod)})`,
    `💼 <b>Послуга:</b> ${label(SERVICE_LABELS, data.serviceType)}`,
  ];
  if (data.budgetRange) lines.push(`💰 <b>Бюджет:</b> ${escapeHtml(data.budgetRange)}`);
  if (data.properties) lines.push(`🏠 <b>Нерухомості:</b> ${escapeHtml(data.properties)}`);
  if (data.preferredTime) lines.push(`⏰ <b>Час:</b> ${label(TIME_LABELS, data.preferredTime)}`);

  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text: lines.join('\n'),
      parse_mode: 'HTML',
    }),
  });

  if (!res.ok) {
    throw new Error(`Telegram ${res.status}: ${await res.text()}`);
  }
  return 'ok';
}

async function sendToSheets(data: Lead): Promise<'ok' | 'skipped'> {
  const url = process.env.GOOGLE_SHEETS_URL;
  if (!url) return 'skipped';

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      timestamp: new Date().toISOString(),
      name: data.name,
      contact: data.contact,
      contactMethod: label(CONTACT_METHOD_LABELS, data.contactMethod),
      serviceType: label(SERVICE_LABELS, data.serviceType),
      budgetRange: data.budgetRange ?? '',
      properties: data.properties ?? '',
      preferredTime: label(TIME_LABELS, data.preferredTime),
    }),
    redirect: 'follow',
  });

  if (!res.ok) {
    throw new Error(`Sheets ${res.status}: ${await res.text()}`);
  }
  return 'ok';
}

/** Minimal HTML escape so names with <>& do not break Telegram parse_mode. */
function escapeHtml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Validate data
    if (!data.name || !data.contact) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // TODO: Implement your submission logic:
    // 1. Send to email service (SendPulse, Mailgun, etc.)
    // 2. Save to database
    // 3. Send to Telegram bot
    // 4. Add to Google Sheets via Zapier
    // 5. Any combination of the above

    console.log('Form submission received:', data);

    // Example: Send to email
    // await sendEmail(data);

    // Example: Send to Telegram
    // await sendToTelegram(data);

    return NextResponse.json(
      { success: true, message: 'Form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Helper: Send email via SendPulse
// async function sendEmail(data: any) {
//   const response = await fetch('https://api.sendpulse.com/emails/send', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${process.env.SENDPULSE_API_KEY}`
//     },
//     body: JSON.stringify({
//       email: data.contact,
//       template_id: process.env.SENDPULSE_TEMPLATE_ID,
//       variables: {
//         name: data.name,
//         serviceType: data.serviceType,
//       }
//     })
//   });
//   return response.json();
// }

// Helper: Send to Telegram bot
// async function sendToTelegram(data: any) {
//   const message = `
// 📬 New Lead!
// Name: ${data.name}
// Service: ${data.serviceType}
// Budget: ${data.budgetRange}
// Contact: ${data.contact}
// Method: ${data.contactMethod}
// Time: ${data.preferredTime}
//   `;

//   const response = await fetch(
//     `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
//     {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         chat_id: process.env.TELEGRAM_CHAT_ID,
//         text: message,
//       }),
//     }
//   );
//   return response.json();
// }

/**
 * The live Polish project -- the one that is actually open for investment.
 *
 * Unlike the Warsaw portfolio (completed, shown as proof), this section
 * carries the CTA.
 *
 * IMPORTANT: fields set to null render as "уточнюється" rather than a
 * number. Do not put estimates here. A wrong rent or resale figure on an
 * investment page is a real problem, not a typo. Fill them in only with
 * figures you can stand behind.
 */

/** Use for any figure that is not yet confirmed. */
export const TBD = null;

export interface Scenario {
  id: string;
  name: string;
  tagline: string;
  headline: { label: string; value: string | null };
  rows: { label: string; value: string | null }[];
}

export const currentProject = {
  status: 'Відкрито для інвестицій',
  name: 'Будинок у Zakręt під Варшавою',
  location: '05-077 Zakręt, гміна Wiązowna · ~15 км від центру Варшави',
  intro:
    'Дуплекс у стані deweloperski — конструкція готова, всередині чорнове оздоблення. Ви заходите на етапі, де основне будівництво вже позаду, а вартість ще не включає ремонт. На відміну від квартири, це окремий будинок із власною ділянкою.',
  unitsTotal: 8,
  unitsSold: 3,
  price: '970 000 zł',
  priceUsd: '≈ $260,000',
  facts: [
    { label: 'Площа будинку', value: '97 м²' },
    { label: 'Власна ділянка', value: '180 м²' },
    { label: 'Тип', value: 'Дуплекс (bliźniak)' },
    { label: 'Стан', value: 'Deweloperski (чорнове оздоблення)' },
  ],
  images: [] as string[],
};

export const scenarios: Scenario[] = [
  {
    id: 'rent',
    name: 'Здавати в оренду',
    tagline: 'Щомісячний дохід і актив, який лишається у вашій власності',
    headline: { label: 'Очікувана дохідність', value: TBD },
    rows: [
      { label: 'Вартість ремонту', value: TBD },
      { label: 'Термін ремонту', value: TBD },
      { label: 'Очікувана оренда', value: TBD },
      { label: 'Загальні вкладення', value: TBD },
    ],
  },
  {
    id: 'flip',
    name: 'Ремонт і перепродаж',
    tagline: 'Разовий прибуток після завершення робіт',
    headline: { label: 'Очікуваний прибуток', value: TBD },
    rows: [
      { label: 'Вартість ремонту', value: TBD },
      { label: 'Термін ремонту', value: TBD },
      { label: 'Очікувана ціна продажу', value: TBD },
      { label: 'Загальні вкладення', value: TBD },
    ],
  },
];

/**
 * Regional market context. These describe the Warsaw market, NOT this
 * property -- Zakręt is a commuter location outside the city and the
 * yield figures are for Warsaw apartments. The disclaimer under the
 * block says so explicitly; do not remove it.
 */
export const marketStats = [
  {
    value: '5,3–6,8%',
    label: 'Валова дохідність оренди у Варшаві',
    note: 'залежно від типу житла та району',
  },
  {
    value: '3,75%',
    label: 'Ставка НБП',
    note: 'знижена з 5,75% з травня 2025 — дешевша іпотека',
  },
  {
    value: '2–5%',
    label: 'Прогноз зростання цін на 2026',
    note: 'НБП очікує динаміку на рівні інфляції',
  },
];

export const marketSources = [
  {
    label: 'Global Property Guide — дохідність оренди в Польщі',
    href: 'https://www.globalpropertyguide.com/europe/poland/rental-yields',
  },
  {
    label: 'Global Property Guide — динаміка цін',
    href: 'https://www.globalpropertyguide.com/europe/poland/price-history',
  },
];

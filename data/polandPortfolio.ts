/**
 * Completed Warsaw projects. Presented as track record, not as an open
 * offer -- everything here is sold.
 *
 * Будинок №1 is deliberately absent: the case study section directly
 * above already covers it in full. This section shows the apartment
 * entry point and the second building.
 *
 * Both cards share one shape so they render identically.
 */

export interface PolandCard {
  id: number;
  name: string;
  status: string;
  location: string;
  rows: { label: string; value: string }[];
  roi: string;
  /** Optional photos. When present the card shows a carousel. */
  images?: string[];
}

/** Totals across the whole Warsaw track record, including Будинок №1. */
export const polandSummary = [
  { label: 'Будинків збудовано', value: '2' },
  { label: 'Квартир продано', value: '8' },
  { label: 'Інвестовано', value: '$860,000' },
  { label: 'Отримано', value: '$1,140,000' },
];

export const polandCards: PolandCard[] = [
  {
    id: 1,
    name: 'Одна квартира',
    status: 'Збудовано',
    location: 'Варшава',
    roi: '32%',
    rows: [
      { label: 'Площа', value: '53,31 м²' },
      { label: 'Початкові інвестиції', value: '$102,500' },
      { label: 'Термін будівництва', value: '6 місяців' },
      { label: 'Ремонт (опційно)', value: '+$38,000' },
      { label: 'Термін з ремонтом', value: '10 місяців' },
    ],
  },
  {
    id: 2,
    name: 'Будинок №2',
    status: 'Збудовано',
    location: 'Варшава',
    roi: '33%',
    rows: [
      { label: 'Площа', value: '344 м²' },
      { label: 'Кількість квартир', value: '4 квартири: 63 м², 63 м², 94 м², 94 м²' },
      { label: 'Початкові інвестиції', value: '$450,000' },
      { label: 'Термін будівництва', value: '7 місяців' },
      { label: 'Вартість продажу', value: '$600,000' },
    ],
  },
];

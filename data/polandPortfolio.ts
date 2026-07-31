/**
 * Completed Warsaw projects. Presented as track record, not as an open
 * offer -- both buildings are sold.
 *
 * Будинок №1 is deliberately not a card here: the case study section
 * directly above already covers it in full. This section shows the
 * second building plus the apartment-level entry point.
 */

export interface PolandBuilding {
  id: number;
  name: string;
  status: string;
  location: string;
  rows: { label: string; value: string }[];
  roi: string;
  /** Optional photos. When present the card shows a carousel. */
  images?: string[];
}

export interface PolandUnit {
  name: string;
  subtitle: string;
  entry: string;
  entryLabel: string;
  roi: string;
  rows: { label: string; value: string }[];
  images?: string[];
}

/** Totals across the whole Warsaw track record, including Будинок №1. */
export const polandSummary = [
  { label: 'Будинків збудовано', value: '2' },
  { label: 'Квартир продано', value: '8' },
  { label: 'Інвестовано', value: '$860,000' },
  { label: 'Отримано', value: '$1,140,000' },
];

/** The accessible entry point -- a quarter of a whole building. */
export const polandUnit: PolandUnit = {
  name: 'Одна квартира',
  subtitle: 'Найдоступніший вхід у польський проект',
  entry: '$102,500',
  entryLabel: 'Початкові інвестиції',
  roi: '32%',
  rows: [
    { label: 'Площа', value: '53,31 м²' },
    { label: 'До введення в експлуатацію', value: '6 місяців' },
    { label: 'Ремонт (опційно)', value: '+$38,000' },
    { label: 'До готовності з ремонтом', value: '10 місяців' },
  ],
};

export const polandBuildings: PolandBuilding[] = [
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

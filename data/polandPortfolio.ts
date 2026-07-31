/**
 * Completed Warsaw projects. Presented as track record, not as an open
 * offer -- both buildings are sold. Edit the values here; the section
 * on the homepage renders whatever is in this file.
 */

export interface PolandBuilding {
  id: number;
  name: string;
  status: string;
  location: string;
  area: string;
  units: string;
  investment: string;
  saleTotal: string;
  timeline: string;
  roi: string;
  /** Optional photos. When present the card shows a carousel. */
  images?: string[];
}

export interface EntryTier {
  id: number;
  name: string;
  subtitle: string;
  entry: string;
  entryLabel: string;
  roi: string;
  timeline: string;
  rows: { label: string; value: string }[];
  /** Visually emphasised as the accessible way in. */
  featured?: boolean;
}

export const polandBuildings: PolandBuilding[] = [
  {
    id: 1,
    name: 'Будинок №1',
    status: 'Збудовано',
    location: 'Варшава',
    area: '284 м²',
    units: '4 квартири: 53 м², 53 м², 80 м², 80 м²',
    investment: '$410,000',
    saleTotal: '$540,000',
    timeline: '6 місяців',
    roi: '32%',
  },
  {
    id: 2,
    name: 'Будинок №2',
    status: 'Збудовано',
    location: 'Варшава',
    area: '344 м²',
    units: '4 квартири: 63 м², 63 м², 94 м², 94 м²',
    investment: '$450,000',
    saleTotal: '$600,000',
    timeline: '7 місяців',
    roi: '33%',
  },
];

/** Totals shown above the building cards. */
export const polandSummary = [
  { label: 'Будинків збудовано', value: '2' },
  { label: 'Квартир продано', value: '8' },
  { label: 'Інвестовано', value: '$860,000' },
  { label: 'Отримано', value: '$1,140,000' },
];

export const polandEntryTiers: EntryTier[] = [
  {
    id: 1,
    name: 'Одна квартира',
    subtitle: 'Найдоступніший вхід у польський проект',
    entry: '$102,500',
    entryLabel: 'Початкові інвестиції',
    roi: '32%',
    timeline: '6–10 місяців',
    rows: [
      { label: 'Площа', value: '53,31 м²' },
      { label: 'До введення в експлуатацію', value: '6 місяців' },
      { label: 'Ремонт (опційно)', value: '+$38,000' },
      { label: 'До готовності з ремонтом', value: '10 місяців' },
    ],
    featured: true,
  },
  {
    id: 2,
    name: 'Ціла будівля',
    subtitle: 'Повний контроль над проектом і найвища дохідність',
    entry: 'від $410,000',
    entryLabel: 'Початкові інвестиції',
    roi: '32–33%',
    timeline: '6–7 місяців',
    rows: [
      { label: 'Площа', value: '284–344 м²' },
      { label: 'Квартир у будинку', value: '4' },
      { label: 'Вартість продажу', value: '$540,000–600,000' },
      { label: 'Юридичний супровід', value: 'Mitrax' },
    ],
  },
];

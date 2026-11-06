/**
 * The full track record -- Ukraine and Poland in one list.
 *
 * Array order is display order. Poland comes first, and within it the
 * two houses run in build order with the unit example last -- ROI alone
 * would sort them wrongly, since Будинок №2 returned more than №1.
 * Ukraine follows, by return.
 *
 * The card shows `invested`, `result` (if any) and `term`; everything in
 * `details` and `description` sits behind "Детальніше".
 */

export type Country = 'ua' | 'pl';

export interface Project {
  id: string;
  name: string;
  country: Country;
  city: string;
  address?: string;
  status: string;
  roi: string;
  invested: string;
  /** Sale value or outcome; omitted when the asset was kept (rent). */
  result?: string;
  term: string;
  details: { label: string; value: string }[];
  description?: string;
  images?: string[];
  /** CSS object-position for the card photo, when centre crop is wrong. */
  imageObjectPosition?: string;
  /** Link to a full case study page. */
  caseHref?: string;
}

export const countryLabels: Record<Country, string> = {
  ua: 'Україна',
  pl: 'Польща',
};

/** Both Warsaw houses are one project, so they carry the same note. */
const WARSAW_PROJECT_NOTE =
  'Частина першого проєкту SIS у Польщі: два будинки на власні кошти засновника та його польського партнера.';

export const projects: Project[] = [
  {
    id: 'pl-house-1',
    name: 'Будинок №1',
    country: 'pl',
    city: 'Варшава',
    status: 'Завершено',
    roi: '32%',
    invested: '$410,000',
    result: '$540,000',
    term: '6 місяців',
    details: [
      { label: 'Площа', value: '284 м²' },
      { label: 'Кількість квартир', value: '4 квартири: 53 м², 53 м², 80 м², 80 м²' },
    ],
    description: WARSAW_PROJECT_NOTE,
    images: ['/images/house-1/house-1-1.jpg'],
    caseHref: '/cases/budynok-1',
  },
  {
    id: 'pl-house-2',
    name: 'Будинок №2',
    country: 'pl',
    city: 'Варшава',
    status: 'Завершено',
    roi: '33%',
    invested: '$450,000',
    result: '$600,000',
    term: '7 місяців',
    details: [
      { label: 'Площа', value: '344 м²' },
      { label: 'Кількість квартир', value: '4 квартири: 63 м², 63 м², 94 м², 94 м²' },
    ],
    description: WARSAW_PROJECT_NOTE,
    images: ['/images/house-2/house-2-1.jpg'],
    // Shot has a lot of lawn below the house -- bias the crop toward the top.
    imageObjectPosition: 'center 25%',
  },
  {
    id: 'pl-unit-1',
    name: 'Квартира у Будинку №1',
    country: 'pl',
    city: 'Варшава',
    status: 'Завершено',
    roi: '32%',
    invested: '$102,500',
    term: '6 місяців',
    details: [
      { label: 'Площа', value: '53,31 м²' },
      { label: 'Ремонт (опційно)', value: '+$38,000' },
      { label: 'Термін з ремонтом', value: '10 місяців' },
    ],
    description:
      'Приклад входу в проєкт на рівні однієї квартири — чверть вартості будинку замість повного фінансування.',
    images: [
      '/images/unit-1/unit-1-1.jpg',
      '/images/unit-1/unit-1-2.jpg',
      '/images/unit-1/unit-1-3.jpg',
      '/images/unit-1/unit-1-4.jpg',
      '/images/unit-1/unit-1-5.jpg',
    ],
  },
  {
    id: 'ua-akadem-1',
    name: 'Квартира на Академмістечку',
    country: 'ua',
    city: 'Київ',
    address: 'вул. Осіння, 33',
    status: 'Завершено',
    roi: '25%',
    invested: '$60,000',
    term: '1 місяць',
    details: [
      { label: 'Площа', value: '55 м²' },
      { label: 'Одиниці', value: '1 квартира' },
    ],
    description:
      'Клієнт придбав дворівневу квартиру за нашою рекомендацією через терміновий продаж з незначними документальними проблемами, які ми вирішили.',
    images: [
      '/images/akadem-1/akadem-1-1.jpg',
      '/images/akadem-1/akadem-1-2.jpg',
      '/images/akadem-1/akadem-1-3.jpg',
      '/images/akadem-1/akadem-1-4.jpg',
    ],
  },
  {
    id: 'ua-akadem-2',
    name: 'Квартири на Академмістечку',
    country: 'ua',
    city: 'Київ',
    address: 'вул. Осіння, 33',
    status: 'Завершено',
    roi: '20%',
    invested: '$60,000',
    term: '5 місяців',
    details: [
      { label: 'Площа', value: '56 м²' },
      { label: 'Одиниці', value: '2 квартири' },
    ],
    description:
      'Клієнт придбав дворівневу квартиру. Ми розробили проєкт розділення на 2 об’єкти та виконали перепланування з дизайнерським ремонтом.',
    images: [
      '/images/akadem-2/akadem-2-1.jpg',
      '/images/akadem-2/akadem-2-2.jpg',
      '/images/akadem-2/akadem-2-3.jpg',
      '/images/akadem-2/akadem-2-4.jpg',
      '/images/akadem-2/akadem-2-5.jpg',
      '/images/akadem-2/akadem-2-6.jpg',
    ],
  },
  {
    id: 'ua-stalinka',
    name: 'Сталінка в центрі',
    country: 'ua',
    city: 'Київ',
    address: 'вул. Тарасівська, 2/21',
    status: 'Завершено',
    roi: '10,5%',
    invested: '$100,000',
    term: '6 місяців',
    details: [
      { label: 'Площа', value: '50 м²' },
      { label: 'Одиниці', value: '1 квартира' },
    ],
    description:
      'Клієнт у 2020 році придбав цей об’єкт площею 50 м². Він приносив лише $300 від здачі в оренду. Ми розробили дизайн-проєкт з переплануванням та заміною всіх комунікацій.',
    images: [
      '/images/stalinka/stalinka-1.jpg',
      '/images/stalinka/stalinka-2.jpg',
      '/images/stalinka/stalinka-3.jpg',
      '/images/stalinka/stalinka-4.jpg',
      '/images/stalinka/stalinka-5.jpg',
      '/images/stalinka/stalinka-6.jpg',
    ],
  },
  {
    id: 'ua-river-stone',
    name: 'ЖК «River Stone»',
    country: 'ua',
    city: 'Київ',
    address: 'Дніпровська набережна, 14',
    status: 'Завершено',
    roi: '8% та 12%',
    invested: '$130,000',
    term: '6 місяців',
    details: [
      { label: 'Площа', value: '95 м²' },
      { label: 'Одиниці', value: '2 квартири' },
    ],
    description:
      'Розділення однієї великої квартири. Загальна площа була 95 м², після перепланування отримали 2 автономних об’єкти: євродвушку 50 м² та студію 31 м² з дизайнерським ремонтом.',
    images: [
      '/images/river-stone/river-stone-1.jpg',
      '/images/river-stone/river-stone-2.jpg',
      '/images/river-stone/river-stone-3.jpg',
      '/images/river-stone/river-stone-4.jpg',
    ],
  },
  {
    id: 'ua-varshavskyi',
    name: 'ЖК «Варшавський»',
    country: 'ua',
    city: 'Київ',
    address: 'вул. Всеволода Змієнка, 34/21',
    status: 'Завершено',
    roi: '6,5%',
    invested: '$56,000',
    term: '4 місяці',
    details: [
      { label: 'Площа', value: '40 м²' },
      { label: 'Одиниці', value: '1 квартира' },
    ],
    description:
      'Придбали квартиру 40 м² у забудовника за програмою «єОселя», зробили дизайнерський ремонт, здали в оренду. Орендна плата покриває щомісячний платіж власнику.',
    images: [
      '/images/varshavskyi/varshavskyi-1.jpg',
      '/images/varshavskyi/varshavskyi-2.jpg',
      '/images/varshavskyi/varshavskyi-3.jpg',
      '/images/varshavskyi/varshavskyi-4.jpg',
      '/images/varshavskyi/varshavskyi-5.jpg',
    ],
  },
];

/**
 * The full track record -- Ukraine and Poland in one list.
 *
 * Kept together deliberately: the offer is "invest abroad or at home",
 * and a single portfolio shows that directly instead of leaving the
 * visitor to infer it from two separate sections.
 *
 * Sorted by return, highest first. `roiSort` exists because some
 * projects report two figures ("8% та 12%") and cannot be parsed.
 */

export type Country = 'ua' | 'pl';

export interface Project {
  id: string;
  name: string;
  country: Country;
  location: string;
  status: string;
  roi: string;
  roiSort: number;
  rows: { label: string; value: string }[];
  description?: string;
  images?: string[];
}

export const countryLabels: Record<Country, string> = {
  ua: 'Україна',
  pl: 'Польща',
};

export const projects: Project[] = [
  {
    id: 'pl-house-2',
    name: 'Будинок №2',
    country: 'pl',
    location: 'Варшава',
    status: 'Завершено',
    roi: '33%',
    roiSort: 33,
    rows: [
      { label: 'Площа', value: '344 м²' },
      { label: 'Кількість квартир', value: '4 квартири: 63 м², 63 м², 94 м², 94 м²' },
      { label: 'Початкові інвестиції', value: '$450,000' },
      { label: 'Термін будівництва', value: '7 місяців' },
      { label: 'Вартість продажу', value: '$600,000' },
    ],
  },
  {
    id: 'pl-unit-1',
    name: 'Одна квартира',
    country: 'pl',
    location: 'Варшава',
    status: 'Завершено',
    roi: '32%',
    roiSort: 32,
    rows: [
      { label: 'Площа', value: '53,31 м²' },
      { label: 'Початкові інвестиції', value: '$102,500' },
      { label: 'Термін будівництва', value: '6 місяців' },
      { label: 'Ремонт (опційно)', value: '+$38,000' },
      { label: 'Термін з ремонтом', value: '10 місяців' },
    ],
  },
  {
    id: 'ua-akadem-1',
    name: 'Квартира на Академмістечку',
    country: 'ua',
    location: 'Київ, вул. Осіння, 33',
    status: 'Завершено',
    roi: '25%',
    roiSort: 25,
    rows: [
      { label: 'Площа', value: '55 м²' },
      { label: 'Одиниці', value: '1 квартира' },
      { label: 'Інвестиції', value: '$60,000' },
      { label: 'Термін', value: '1 місяць' },
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
    location: 'Київ, вул. Осіння, 33',
    status: 'Завершено',
    roi: '20%',
    roiSort: 20,
    rows: [
      { label: 'Площа', value: '56 м²' },
      { label: 'Одиниці', value: '2 квартири' },
      { label: 'Інвестиції', value: '$60,000' },
      { label: 'Термін', value: '5 місяців' },
    ],
    description:
      'Клієнт придбав дворівневу квартиру. Ми розробили проект розділення на 2 об\'єкти та виконали переплануванння з дизайнерським ремонтом.',
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
    name: 'Сталинка в центрі',
    country: 'ua',
    location: 'Київ, вул. Тарасовська, 2/21',
    status: 'Завершено',
    roi: '10.5%',
    roiSort: 10.5,
    rows: [
      { label: 'Площа', value: '50 м²' },
      { label: 'Одиниці', value: '1 квартира' },
      { label: 'Інвестиції', value: '$100,000' },
      { label: 'Термін', value: '6 місяців' },
    ],
    description:
      'Клієнт у 2020 році придбав цей об\'єкт площею 50м². Він приносив всього 300$ від здачі в оренду. Ми розробили дизайн-проект з переплануванням та заміною всіх комунікацій.',
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
    name: 'ЖК "River Stone"',
    country: 'ua',
    location: 'Київ, вул. Днепровська Набережна, 14',
    status: 'Завершено',
    roi: '8% та 12%',
    roiSort: 12,
    rows: [
      { label: 'Площа', value: '95 м²' },
      { label: 'Одиниці', value: '2 квартири' },
      { label: 'Інвестиції', value: '$130,000' },
      { label: 'Термін', value: '6 місяців' },
    ],
    description:
      'Розділення однієї великої квартири. Загальна площа була 95м², після переплануванння отримали 2 автономних об\'єкти: євродвушка 50м² та студія 31м² з дизайнерським ремонтом.',
    images: [
      '/images/river-stone/river-stone-1.jpg',
      '/images/river-stone/river-stone-2.jpg',
      '/images/river-stone/river-stone-3.jpg',
      '/images/river-stone/river-stone-4.jpg',
    ],
  },
  {
    id: 'ua-varshavskyi',
    name: 'ЖК "Варшавський"',
    country: 'ua',
    location: 'Київ, вул. Всеволода Змієнко, 34/21',
    status: 'Завершено',
    roi: '6.5%',
    roiSort: 6.5,
    rows: [
      { label: 'Площа', value: '40 м²' },
      { label: 'Одиниці', value: '1 квартира' },
      { label: 'Інвестиції', value: '$56,000' },
      { label: 'Термін', value: '4 місяці' },
    ],
    description:
      'Придбали квартиру 40м² у забудовника за програмою єОселя, зробили дизайнерський ремонт, здали в оренду. Орендна плата покриває щомісячний платіж власнику.',
    images: [
      '/images/varshavskyi/varshavskyi-1.jpg',
      '/images/varshavskyi/varshavskyi-2.jpg',
      '/images/varshavskyi/varshavskyi-3.jpg',
      '/images/varshavskyi/varshavskyi-4.jpg',
      '/images/varshavskyi/varshavskyi-5.jpg',
    ],
  },
];

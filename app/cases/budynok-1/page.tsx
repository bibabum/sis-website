import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import house1 from '@/public/images/house-1/house-1-1.jpg';

export const metadata: Metadata = {
  title: 'Кейс: Будинок №1 у Варшаві',
  description: 'Як $410,000 перетворились на $540,000 за 6 місяців — власний проєкт SIS у Варшаві.',
};

const story = [
  {
    label: 'Можливість',
    text: 'Ігор побачив зростання польського ринку нерухомості й вирішив зайти в нього не як консультант, а як інвестор — власними коштами.',
  },
  {
    label: 'Виклик',
    text: 'Чужий ринок: інша правова база, дозвільна система та будівельні норми. Заходити без сильного місцевого партнера означало б працювати наосліп.',
  },
  {
    label: 'Що ми зробили',
    text: 'Разом із партнером у Польщі та юристами Axellegal знайшли земельну ділянку у Варшаві, отримали дозвіл на будівництво, звели 4-квартирний будинок за 6 місяців і продали всі квартири.',
  },
];

const result = [
  { label: 'Інвестовано', value: '$410,000' },
  { label: 'Отримано', value: '$540,000' },
  { label: 'ROI', value: '32%' },
  { label: 'Термін', value: '6 міс.' },
];

export default function CaseBudynok1() {
  return (
    <>
      <section className="bg-ivory">
        <div className="container-site py-14 md:py-20">
          <Link href="/#projects" className="link text-[0.9375rem]">
            Усі проєкти
          </Link>
          <p className="eyebrow mt-10">Кейс-стаді · Будинок №1 · Варшава</p>
          <div className="mt-4 h-px w-10 bg-brass" aria-hidden />
          <h1 className="mt-8 max-w-4xl text-[2.5rem] leading-[1.08] md:text-[4rem]">
            Як $410,000 перетворились на $540,000 за 6 місяців
          </h1>
          <p className="mt-6 max-w-2xl text-body-lg text-muted">
            Власний проєкт SIS у Варшаві — на кошти засновника та його польського партнера. Всі документи, дозволи та
            контракти у нас є.
          </p>

          <div className="relative mt-12 aspect-[16/9] overflow-hidden bg-ivory-deep">
            <Image
              src={house1}
              alt="Будинок №1 у Варшаві"
              fill
              priority
              placeholder="blur"
              sizes="(min-width: 1216px) 1152px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section border-t border-line bg-ivory">
        <div className="container-site grid grid-cols-1 gap-14 lg:grid-cols-12">
          <ol className="space-y-10 lg:col-span-7">
            {story.map((s, i) => (
              <li key={s.label} className="border-t border-line pt-6">
                <p className="eyebrow">
                  0{i + 1} · {s.label}
                </p>
                <p className="mt-4 text-body-lg text-ink/85">{s.text}</p>
              </li>
            ))}
          </ol>

          <aside className="on-navy self-start bg-navy p-8 text-on-navy lg:col-span-5">
            <h2 className="text-[1.75rem] text-ivory">Результат: Будинок №1</h2>
            <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8">
              {result.map((r) => (
                <div key={r.label} className="flex flex-col border-t border-line-navy pt-4">
                  <dt className="order-2 mt-2 text-sm text-on-navy-muted">{r.label}</dt>
                  <dd className="numeral order-1 text-[2.25rem] leading-none text-brass-light">{r.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-10 border-t border-line-navy pt-6 text-on-navy">
              Разом по двох будинках у Варшаві: <span className="numeral text-brass-light">$860,000</span> інвестовано →{' '}
              <span className="numeral text-brass-light">$1,140,000</span> отримано
            </p>
            <p className="mt-3 text-sm text-on-navy-muted">
              Юридичний партнер: Axellegal · Всі договори нотаріально засвідчені
            </p>
            <Link href="/contact" className="btn-primary-inverse mt-8 w-full">
              Обговорити схожий проєкт
            </Link>
          </aside>
        </div>
      </section>
    </>
  );
}

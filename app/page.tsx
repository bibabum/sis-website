import Image from 'next/image';
import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import CurrentProject from '@/components/CurrentProject';
import Projects from '@/components/Projects';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { articles } from '@/data/articles';
import { contacts } from '@/data/contacts';
import { founderParagraphs } from '@/data/founder';
import igor from '@/public/igor.jpg';

const trust = [
  { figure: '8', label: 'завершених проєктів з цифрами' },
  { figure: 'Польща та Україна', label: 'проєкти, супровід і управління активами', small: true },
  { figure: '≥50%', label: 'власних коштів SIS у кожному проєкті' },
  { figure: 'Нотаріальні договори', label: 'юридичний партнер Axellegal', small: true },
];

// Border/padding per cell: 2×2 on mobile, one row on desktop.
const trustCell = [
  'pr-5 sm:pr-8',
  'border-l border-line-navy pl-5 sm:pl-8',
  'border-t border-line-navy pr-5 sm:pr-8 lg:border-l lg:border-t-0 lg:pl-8',
  'border-l border-t border-line-navy pl-5 sm:pl-8 lg:border-t-0',
];

// Full feature lists from the original site ("до 30% очікувана ROI" removed on purpose).
const services = [
  {
    title: 'Інвестування в проєкти',
    description: 'Приєднайтесь до готових проєктів з повним супроводом.',
    features: ['Мінімальна сума входу $50K+', 'Повний правовий захист', 'Регулярна звітність'],
    audience: 'для тих, хто хоче вкласти від $50K у готовий проєкт із повним супроводом',
  },
  {
    title: 'Управління активами',
    description: 'Ми управляємо вашою нерухомістю для максимальної прибутковості.',
    features: [
      'Купівля-продаж',
      'Оренда',
      'Технічне обслуговування',
      'Юридичний супровід',
      'Страхування',
      'Фінансова звітність',
    ],
    audience: 'для власників нерухомості, які хочуть отримувати дохід без власної участі',
  },
  {
    title: 'Персональна консультація',
    description: 'Експертний аналіз вашого фінансового стану і оцінка ваших можливостей.',
    features: [
      'Індивідуальний план розвитку',
      'Податкова оптимізація',
      'Зменшення податкового навантаження',
      'Юридична перевірка угод',
      'Бізнес-стратегія',
    ],
    audience: 'для тих, хто ще обирає стратегію або хоче перевірити угоду',
  },
];

const processSteps = [
  { title: 'Перша консультація', description: 'Розмова про ваші цілі та можливості. Обговорення стратегії розвитку.' },
  { title: 'Аналіз ситуації', description: 'Детальний огляд ваших поточних активів та потенціалу.' },
  { title: 'Пропозиція плану', description: 'Аналітичний відділ створює найкращий сценарій для вас.' },
  { title: 'Договір', description: 'Юридичне оформлення всіх умов та термінів.' },
  { title: 'Підготовка', description: 'Пошук та аналіз відповідних варіантів.' },
  { title: 'Реалізація', description: 'Повний супровід до завершення проєкту.' },
  { title: 'Управління (опційно)', description: 'Постійний контроль, звітність та оптимізація.' },
];

const partners = [
  { title: 'Axellegal', desc: 'Юридичний партнер', href: 'https://axellegal.com.ua/' },
  { title: 'Нотаріат', desc: 'Всі договори засвідчені' },
  { title: 'Польська юрисдикція', desc: 'Реєстрація та захист' },
  { title: 'Повна прозорість', desc: 'Всі документи доступні' },
];

// Testimonial text is kept exactly as supplied -- do not edit here.
const testimonials = [
  {
    text: 'Ігор провів нас через весь процес — від пошуку об\'єкту до підписання контракту. Ми нічого не розуміли в польському ринку, але він пояснив усе кроково. Реальний ROI 28% — підтверджено документами.',
    name: 'Дмитро К.',
    city: 'Київ',
    tag: 'Будинок №1',
  },
  {
    text: 'Я живу у Варшаві вже 3 роки і хотів інвестувати тут, але не розумів польського податкового закону. Консультація з Ігором відкрила очі на стратегії, про які я навіть не знав. Зекономив значну суму вже в перший рік.',
    name: 'Олена М.',
    city: 'Варшава',
    tag: 'Податкова оптимізація',
  },
  {
    text: 'Скептично ставився до 30%+ ROI — думав, це маркетинг. Але Ігор показав усі документи, дозволи, контракти. Юридичний партнер Axellegal дав впевненість. Вклав $75K — результатом дуже задоволений.',
    name: 'Сергій В.',
    city: 'Дніпро',
    tag: 'Інвестиційне партнерство',
  },
];

const faq = [
  {
    q: 'Чи можу я як українець купити нерухомість за кордоном?',
    a: 'Так. Українці можуть купувати нерухомість за кордоном. Придбання земельних ділянок — залежно від законодавства конкретної країни.',
  },
  {
    q: 'Яка мінімальна сума для інвестування?',
    a: 'Готові проєкти SIS — від $50,000. Якщо це індивідуальний проєкт — сума прораховується індивідуально.',
  },
  {
    q: 'Скільки часу потрібно від рішення до першого доходу?',
    a: 'Від 6 місяців — залежно від проєкту. Ви отримуєте детальний план для кожного.',
  },
  { q: 'Який юридичний захист я маю як інвестор?', a: 'Всі інвестиції оформлюються належним юридичним чином.' },
  {
    q: 'Як оподатковується нерухомість за кордоном?',
    a: 'Нерухомість за кордоном оподатковується згідно з місцевим законодавством. Діють міжнародні договори про уникнення подвійного оподаткування.',
  },
  {
    q: 'Чи можу я переглянути проєкти перед тим, як інвестувати?',
    a: 'Так, приїхати та подивитися на об’єкти можна без будь-яких проблем.',
  },
];

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* 2. Trust strip */}
      <section aria-label="Ключові факти" className="on-navy bg-navy-deep text-on-navy">
        <div className="container-site">
          <dl className="grid grid-cols-2 lg:grid-cols-4">
            {trust.map((t, i) => (
              <div
                key={t.label}
                className={`flex flex-col justify-between gap-3 py-8 lg:py-12 ${trustCell[i]}`}
              >
                <dt className="order-2 text-sm text-on-navy-muted sm:text-[0.9375rem]">{t.label}</dt>
                <dd
                  className={`numeral order-1 leading-[1.05] text-brass-light ${
                    t.small ? 'text-[1.5rem] sm:text-[1.875rem]' : 'text-[2rem] sm:text-[2.5rem] lg:text-[2.25rem] xl:text-[2.75rem]'
                  }`}
                >
                  {t.figure}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 3. Formats of cooperation -- three equal cards */}
      <section id="services" className="section border-t border-line bg-ivory-deep">
        <div className="container-site">
          <Reveal>
            <SectionHeading eyebrow="Формати співпраці" title="Три шляхи до зростання вашого капіталу" />
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08} as="article" className="flex h-full flex-col border border-line bg-ivory p-8">
                <p className="numeral text-sm text-brass-deep">0{i + 1}</p>
                <h3 className="mt-3 text-[1.75rem] leading-tight">{s.title}</h3>
                <p className="mt-3 text-muted">{s.description}</p>
                <ul className="dash-list mt-6 space-y-2 text-[0.9375rem] text-ink">
                  {s.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <p className="mt-auto border-t border-line pt-5 text-[0.9375rem] text-ink">
                  <span className="text-brass-deep">Для кого:</span> {s.audience}
                </p>
                <Link href="/contact" className="btn-secondary mt-6 w-full">
                  Обговорити
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Founder */}
      <section id="about" className="section bg-ivory">
        <div className="container-site grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-6">
            <div className="relative aspect-[5/4] overflow-hidden bg-ivory-deep">
              <Image
                src={igor}
                alt="Ігор — засновник SIS"
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-[65%_center]"
              />
            </div>
          </Reveal>
          <Reveal className="lg:col-span-6">
            <SectionHeading eyebrow="Про засновника" title="Ігор, засновник SIS" />
            <div className="mt-8 space-y-5 text-body-lg text-ink/85">
              {founderParagraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <Link href="/about" className="link mt-8 inline-block">
              Повна історія
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 5. Track record */}
      <Projects />

      {/* 6. Open for investment -- example of the first format */}
      <CurrentProject />

      {/* 7. Process -- all 7 steps, texts unchanged */}
      <section id="process" className="on-navy section bg-navy text-on-navy">
        <div className="container-site">
          <Reveal>
            <SectionHeading inverse eyebrow="Як ми працюємо" title="Процес роботи" />
          </Reveal>
          <ol className="mt-14 grid grid-cols-1 border-t border-line-navy sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <li key={step.title} className="border-b border-line-navy py-8 sm:pr-8">
                <p className="numeral text-[2rem] leading-none text-brass-light">{String(i + 1).padStart(2, '0')}</p>
                <h3 className="mt-5 font-sans text-[1.0625rem] font-medium tracking-normal text-ivory">{step.title}</h3>
                <p className="mt-2 text-[0.9375rem] text-on-navy-muted">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 8. Partners */}
      <section aria-labelledby="partners-title" className="border-b border-line bg-ivory">
        <div className="container-site py-12">
          <p id="partners-title" className="eyebrow">
            Партнери та гарантії
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-y-6 md:grid-cols-4">
            {partners.map((p, i) => (
              <li key={p.title} className={`pr-4 ${i > 0 ? 'md:border-l md:border-line md:pl-6' : ''} ${i % 2 === 1 ? 'border-l border-line pl-4 md:pl-6' : ''}`}>
                {p.href ? (
                  <a href={p.href} target="_blank" rel="noopener noreferrer" className="link font-serif text-[1.375rem]">
                    {p.title}
                  </a>
                ) : (
                  <p className="font-serif text-[1.375rem] text-navy">{p.title}</p>
                )}
                <p className="mt-1 text-sm text-muted">{p.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 9. Testimonials */}
      <section className="section bg-ivory">
        <div className="container-site">
          <Reveal>
            <SectionHeading eyebrow="Відгуки" title="Що кажуть наші клієнти" />
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08} as="article" className="flex flex-col border border-line p-8">
                <blockquote className="flex-grow font-serif text-[1.3125rem] italic leading-[1.45] text-navy">
                  «{t.text}»
                </blockquote>
                <footer className="mt-8 border-t border-line pt-5">
                  <p className="font-medium text-navy">{t.name}</p>
                  <p className="text-sm text-muted">
                    {t.city} · {t.tag}
                  </p>
                </footer>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Blog */}
      <section className="section border-t border-line bg-ivory-deep">
        <div className="container-site">
          <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading eyebrow="Матеріали" title="Корисні матеріали" />
            <Link href="/blog" className="link shrink-0">
              Всі статті
            </Link>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
            {articles.slice(0, 3).map((article) => (
              <Link key={article.id} href={`/blog/${article.slug}`} className="group block">
                <div className="relative aspect-[16/10] overflow-hidden bg-ivory">
                  <Image
                    src={article.image}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <p className="mt-5 text-sm text-muted">
                  <span className="text-brass-deep">{article.category}</span> · {article.readTime}
                </p>
                <h3 className="mt-2 text-[1.5rem] leading-snug group-hover:underline group-hover:decoration-brass group-hover:decoration-1 group-hover:underline-offset-[6px]">
                  {article.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FAQ */}
      <section className="section bg-ivory">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <SectionHeading eyebrow="Питання" title="Часті запитання" />
          </Reveal>
          <div className="border-t border-line lg:col-span-8">
            {faq.map((item) => (
              <details key={item.q} className="group border-b border-line">
                <summary className="flex min-h-[64px] items-center justify-between gap-6 py-5 text-body-lg text-navy">
                  <span>{item.q}</span>
                  <span className="text-2xl leading-none text-brass transition-transform group-open:rotate-45" aria-hidden>
                    +
                  </span>
                </summary>
                <p className="max-w-prose pb-6 text-muted">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Final CTA */}
      <section className="on-navy section bg-navy text-on-navy">
        <div className="container-site">
          <Reveal className="max-w-2xl">
            <div className="h-px w-10 bg-brass-light" aria-hidden />
            <h2 className="h-section mt-8 text-ivory">Готові до розмови?</h2>
            <p className="mt-5 text-body-lg text-on-navy-muted">
              Перша консультація безкоштовна. 15–20 хвилин, щоб зрозуміти ваші цілі.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary-inverse">
                Записатися на консультацію
              </Link>
              <a href={contacts.telegram} className="btn-secondary-inverse">
                Telegram
              </a>
              <a href={contacts.whatsapp} className="btn-secondary-inverse">
                WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

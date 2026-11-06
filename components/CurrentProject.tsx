import Link from 'next/link';
import ImageCarousel from '@/components/ImageCarousel';
import Reveal from '@/components/Reveal';
import {
  currentProject,
  marketSources,
  marketStats,
  priceGrowthComparison,
  scenarios,
} from '@/data/currentProject';

/**
 * Renders a figure, or a visible "уточнюється" when it has not been
 * confirmed yet. Never falls back to a plausible-looking number.
 */
function Figure({ value, className = '' }: { value: string | null; className?: string }) {
  if (value === null || value === undefined) {
    return <span className="text-sm font-normal italic text-muted">уточнюється</span>;
  }
  return <span className={className}>{value}</span>;
}

/**
 * The live project, shown compactly as an example of the
 * "Інвестування в проєкти" format. Scenarios and market context sit
 * behind "Детальні розрахунки"; their texts and the disclaimer are verbatim.
 */
export default function CurrentProject() {
  const { unitsSold, unitsTotal } = currentProject;
  const available = unitsTotal - unitsSold;

  return (
    <section id="current" className="section border-t border-line bg-ivory-deep">
      <div className="container-site">
        <Reveal>
          <p className="eyebrow">Відкрито для інвестицій</p>
          <div className="mt-4 h-px w-10 bg-brass" aria-hidden />
          <p className="mt-6 text-muted">
            Приклад формату{' '}
            <a href="#services" className="link">
              «Інвестування в проєкти»
            </a>
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-6">
            {currentProject.images.length > 0 && (
              <ImageCarousel
                images={currentProject.images}
                title={currentProject.name}
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            )}
          </Reveal>

          <Reveal className="flex flex-col lg:col-span-6">
            <h2 className="text-[2rem] leading-tight md:text-[2.5rem]">{currentProject.name}</h2>
            <p className="mt-2 text-muted">{currentProject.location}</p>

            <dl className="mt-6 grid grid-cols-1 gap-x-8 sm:grid-cols-2">
              {currentProject.facts.map((f) => (
                <div key={f.label} className="flex justify-between gap-4 border-b border-line py-3 text-[0.9375rem]">
                  <dt className="text-muted">{f.label}</dt>
                  <dd className="text-right text-navy">{f.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="text-sm text-muted">Ціна в стані deweloperski</p>
                <p className="numeral mt-1 text-[2.5rem] leading-none text-brass">{currentProject.price}</p>
                <p className="mt-1 text-muted">{currentProject.priceUsd}</p>
              </div>
              <div className="min-w-[12rem] flex-1 sm:max-w-[16rem]">
                <div className="flex items-baseline justify-between text-[0.9375rem]">
                  <span className="text-muted">
                    Продано {unitsSold} з {unitsTotal}
                  </span>
                  <span className="text-navy">Вільно: {available}</span>
                </div>
                <div className="mt-3 flex gap-1" aria-hidden>
                  {Array.from({ length: unitsTotal }).map((_, i) => (
                    <span key={i} className={`h-[3px] flex-1 ${i < unitsSold ? 'bg-brass' : 'bg-line'}`} />
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/contact" className="btn-primary shrink-0 whitespace-nowrap">
                Обговорити цей об’єкт
              </Link>
              <p className="text-sm text-muted">Розмова 15–20 хвилин. Покажемо документи та розрахунки.</p>
            </div>
          </Reveal>
        </div>

        <details className="group mt-12 border-y border-line">
          <summary className="flex min-h-[64px] items-center justify-between gap-4 py-4">
            <span className="font-serif text-[1.5rem] text-navy">Детальні розрахунки</span>
            <span className="text-2xl leading-none text-brass transition-transform group-open:rotate-45" aria-hidden>
              +
            </span>
          </summary>

          <div className="pb-10 pt-2">
            <p className="max-w-3xl text-ink/85">{currentProject.intro}</p>

            {/* Scenarios */}
            <h3 className="mt-10 text-[1.75rem]">Два способи заробити на цьому об’єкті</h3>
            <p className="mt-2 text-muted">
              Купуєте в стані deweloperski, ми виконуємо ремонт, а далі ви обираєте стратегію.
            </p>

            <div className="mt-6 grid grid-cols-1 border-t border-line lg:grid-cols-2">
              {scenarios.map((s, i) => (
                <div
                  key={s.id}
                  className={`py-8 ${i === 0 ? 'lg:pr-10' : 'border-t border-line lg:border-l lg:border-t-0 lg:pl-10'}`}
                >
                  <p className="numeral text-sm text-brass-deep">0{i + 1}</p>
                  <h4 className="mt-2 font-serif text-[1.5rem] font-medium text-navy">{s.name}</h4>
                  <p className="mt-1 text-muted">{s.tagline}</p>
                  <div className="mt-6 border-b border-line pb-5">
                    <p className="text-sm text-muted">{s.headline.label}</p>
                    <Figure value={s.headline.value} className="numeral mt-1 block text-[1.75rem] leading-tight text-brass" />
                  </div>
                  <dl className="mt-5 space-y-3 text-[0.9375rem]">
                    {s.rows.map((row) => (
                      <div key={row.label} className="flex justify-between gap-4">
                        <dt className="text-muted">{row.label}</dt>
                        <dd className="text-right text-navy">
                          <Figure value={row.value} />
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ))}
            </div>

            {/* Market context */}
            <h3 className="mt-12 text-[1.75rem]">Контекст ринку</h3>
            <p className="mt-2 max-w-2xl text-muted">Чому польська нерухомість зараз цікава для орендної стратегії.</p>

            <figure className="mt-8 max-w-3xl">
              <figcaption className="text-navy">{priceGrowthComparison.title}</figcaption>
              <div className="mt-5 space-y-4">
                {priceGrowthComparison.bars.map((bar) => (
                  <div key={bar.label} className="flex items-center gap-4">
                    <span className="w-16 shrink-0 text-muted md:w-20">{bar.label}</span>
                    <div className="h-2 flex-grow bg-line/60">
                      <div
                        className={`h-full ${bar.tone === 'accent' ? 'bg-brass' : 'bg-navy/40'}`}
                        style={{ width: `${Number(((bar.value / priceGrowthComparison.max) * 100).toFixed(1))}%` }}
                      />
                    </div>
                    <span className="w-14 shrink-0 text-right tabular-nums text-navy">
                      {bar.value.toLocaleString('uk-UA', { minimumFractionDigits: 1 })}%
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm text-muted">{priceGrowthComparison.caption}</p>
            </figure>

            <dl className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
              {marketStats.map((stat) => (
                <div key={stat.label} className="border-t border-line pt-5">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <p className="numeral text-[2.25rem] leading-none text-brass">{stat.value}</p>
                    <p className="mt-3 text-navy">{stat.label}</p>
                    <p className="mt-1 text-sm text-muted">{stat.note}</p>
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 max-w-3xl space-y-3 text-sm text-muted">
              <p>
                Дані описують ринок Варшави та Польщі загалом і наведені як контекст. Це не прогноз дохідності
                конкретно цього об&apos;єкта: Zakręt — приміська локація, а показники оренди вище стосуються
                квартир у Варшаві. Розрахунки саме по цьому будинку показуємо на консультації.
              </p>
              <p>
                Джерела:{' '}
                {marketSources.map((src, idx) => (
                  <span key={src.href}>
                    {idx > 0 && ' · '}
                    <a href={src.href} target="_blank" rel="noopener noreferrer" className="link">
                      {src.label}
                    </a>
                  </span>
                ))}
              </p>
            </div>
          </div>
        </details>
      </div>
    </section>
  );
}

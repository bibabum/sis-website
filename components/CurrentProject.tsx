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
    return <span className="text-sm font-normal italic text-on-navy-muted">уточнюється</span>;
  }
  return <span className={className}>{value}</span>;
}

export default function CurrentProject() {
  const { unitsSold, unitsTotal } = currentProject;
  const available = unitsTotal - unitsSold;

  return (
    <section id="current" className="on-navy section bg-navy text-on-navy">
      <div className="container-site">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">
            {currentProject.eyebrow} · {currentProject.status}
          </p>
          <div className="mt-4 h-px w-10 bg-brass-light" aria-hidden />
          <h2 className="h-section mt-6 text-ivory">{currentProject.name}</h2>
          <p className="mt-3 text-on-navy-muted">{currentProject.location}</p>
          <p className="mt-6 text-body-lg text-on-navy">{currentProject.intro}</p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            {currentProject.images.length > 0 && (
              <ImageCarousel
                images={currentProject.images}
                title={currentProject.name}
                sizes="(min-width: 1024px) 58vw, 100vw"
              />
            )}
            <dl className="mt-8 grid grid-cols-1 gap-x-10 sm:grid-cols-2">
              {currentProject.facts.map((f) => (
                <div key={f.label} className="flex justify-between gap-4 border-b border-line-navy py-3">
                  <dt className="text-on-navy-muted">{f.label}</dt>
                  <dd className="text-right text-ivory">{f.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal className="lg:col-span-5">
            <div className="border border-line-navy p-8">
              <p className="text-sm text-on-navy-muted">Ціна в стані deweloperski</p>
              <p className="numeral mt-2 text-[3rem] leading-none text-brass-light">{currentProject.price}</p>
              <p className="mt-2 text-on-navy-muted">{currentProject.priceUsd}</p>

              <div className="mt-8 border-t border-line-navy pt-6">
                <div className="flex items-baseline justify-between">
                  <span className="text-on-navy-muted">
                    Продано {unitsSold} з {unitsTotal}
                  </span>
                  <span className="text-ivory">Вільно: {available}</span>
                </div>
                {/* One thin segment per unit -- sold ones in brass. */}
                <div className="mt-4 flex gap-1" aria-hidden>
                  {Array.from({ length: unitsTotal }).map((_, i) => (
                    <span key={i} className={`h-[3px] flex-1 ${i < unitsSold ? 'bg-brass-light' : 'bg-line-navy'}`} />
                  ))}
                </div>
              </div>

              <Link href="/contact" className="btn-primary-inverse mt-8 w-full">
                Обговорити цей об’єкт
              </Link>
              <p className="mt-4 text-center text-sm text-on-navy-muted">
                Розмова 15–20 хвилин. Покажемо документи та розрахунки.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Scenarios */}
        <Reveal className="mt-20 max-w-2xl">
          <h3 className="text-[1.875rem] text-ivory">Два способи заробити на цьому об’єкті</h3>
          <p className="mt-3 text-on-navy-muted">
            Купуєте в стані deweloperski, ми виконуємо ремонт, а далі ви обираєте стратегію.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 border-t border-line-navy lg:grid-cols-2">
          {scenarios.map((s, i) => (
            <Reveal
              key={s.id}
              className={`py-10 lg:py-12 ${i === 0 ? 'lg:pr-12' : 'border-t border-line-navy lg:border-l lg:border-t-0 lg:pl-12'}`}
            >
              <p className="numeral text-sm text-brass-light">0{i + 1}</p>
              <h4 className="mt-3 font-serif text-[1.625rem] font-medium text-ivory">{s.name}</h4>
              <p className="mt-2 text-on-navy-muted">{s.tagline}</p>

              <div className="mt-8 border-b border-line-navy pb-6">
                <p className="text-sm text-on-navy-muted">{s.headline.label}</p>
                <Figure value={s.headline.value} className="numeral mt-2 block text-[2rem] leading-tight text-brass-light" />
              </div>

              <dl className="mt-6 space-y-3">
                {s.rows.map((row) => (
                  <div key={row.label} className="flex justify-between gap-4">
                    <dt className="text-on-navy-muted">{row.label}</dt>
                    <dd className="text-right text-ivory">
                      <Figure value={row.value} />
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          ))}
        </div>

        {/* Market context -- collapsed by default, disclaimer kept verbatim. */}
        <details className="group mt-8 border-y border-line-navy">
          <summary className="flex min-h-[64px] items-center justify-between gap-4 py-4">
            <span className="font-serif text-[1.5rem] text-ivory">Контекст ринку та джерела</span>
            <span className="text-2xl leading-none text-brass-light transition-transform group-open:rotate-45" aria-hidden>
              +
            </span>
          </summary>

          <div className="pb-10 pt-2">
            <p className="max-w-2xl text-on-navy-muted">
              Чому польська нерухомість зараз цікава для орендної стратегії.
            </p>

            <figure className="mt-8 max-w-3xl">
              <figcaption className="text-ivory">{priceGrowthComparison.title}</figcaption>
              <div className="mt-5 space-y-4">
                {priceGrowthComparison.bars.map((bar) => (
                  <div key={bar.label} className="flex items-center gap-4">
                    <span className="w-16 shrink-0 text-on-navy-muted md:w-20">{bar.label}</span>
                    <div className="h-2 flex-grow bg-line-navy/50">
                      <div
                        className={`h-full ${bar.tone === 'accent' ? 'bg-brass-light' : 'bg-on-navy-muted/60'}`}
                        style={{ width: `${Number(((bar.value / priceGrowthComparison.max) * 100).toFixed(1))}%` }}
                      />
                    </div>
                    <span className="w-14 shrink-0 text-right tabular-nums text-ivory">
                      {bar.value.toLocaleString('uk-UA', { minimumFractionDigits: 1 })}%
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm text-on-navy-muted">{priceGrowthComparison.caption}</p>
            </figure>

            <dl className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
              {marketStats.map((stat) => (
                <div key={stat.label} className="border-t border-line-navy pt-5">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <p className="numeral text-[2.25rem] leading-none text-brass-light">{stat.value}</p>
                    <p className="mt-3 text-ivory">{stat.label}</p>
                    <p className="mt-1 text-sm text-on-navy-muted">{stat.note}</p>
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 max-w-3xl space-y-3 text-sm text-on-navy-muted">
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
                    <a href={src.href} target="_blank" rel="noopener noreferrer" className="link-inverse">
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

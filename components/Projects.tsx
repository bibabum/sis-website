'use client';

import Link from 'next/link';
import { useState } from 'react';
import ImageCarousel from '@/components/ImageCarousel';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import { countryLabels, projects, type Country, type Project } from '@/data/projects';

type Filter = 'all' | Country;

const filters: { id: Filter; label: string }[] = [
  { id: 'all', label: 'Всі' },
  { id: 'ua', label: 'Україна' },
  { id: 'pl', label: 'Польща' },
];

function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="flex flex-col border border-line bg-ivory">
      {p.images && p.images.length > 0 && (
        <ImageCarousel images={p.images} title={p.name} objectPosition={p.imageObjectPosition} />
      )}

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-[1.625rem] leading-tight">{p.name}</h3>
            <p className="mt-1 text-[0.9375rem] text-muted">
              {p.city}
              {p.address ? `, ${p.address}` : ''} · {countryLabels[p.country]}
            </p>
          </div>
          <div className="shrink-0 text-right">
            <p className="numeral text-[2.25rem] leading-none text-brass">{p.roi}</p>
            <p className="mt-1 text-xs uppercase tracking-[0.08em] text-muted">ROI</p>
          </div>
        </div>

        <dl className="mt-6 space-y-3 border-t border-line pt-5 text-[0.9375rem]">
          <div className="flex justify-between gap-4">
            <dt className="text-muted">Інвестиції</dt>
            <dd className="text-right font-medium tabular-nums text-navy">{p.invested}</dd>
          </div>
          {p.result && (
            <div className="flex justify-between gap-4">
              <dt className="text-muted">Продаж</dt>
              <dd className="text-right font-medium tabular-nums text-navy">→ {p.result}</dd>
            </div>
          )}
          <div className="flex justify-between gap-4">
            <dt className="text-muted">Термін</dt>
            <dd className="text-right font-medium text-navy">{p.term}</dd>
          </div>
        </dl>

        <details className="group mt-5 border-t border-line pt-4">
          <summary className="flex min-h-[44px] items-center justify-between text-[0.9375rem] text-navy">
            <span>Детальніше</span>
            <span className="text-xl leading-none text-brass transition-transform group-open:rotate-45" aria-hidden>
              +
            </span>
          </summary>
          <dl className="mt-4 space-y-3 text-[0.9375rem]">
            <div className="flex justify-between gap-4">
              <dt className="text-muted">Статус</dt>
              <dd className="text-right text-navy">{p.status}</dd>
            </div>
            {p.details.map((row) => (
              <div key={row.label} className={row.value.length > 18 ? '' : 'flex justify-between gap-4'}>
                <dt className="text-muted">{row.label}</dt>
                <dd className={row.value.length > 18 ? 'mt-1 text-navy' : 'text-right text-navy'}>{row.value}</dd>
              </div>
            ))}
          </dl>
          {p.description && <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted">{p.description}</p>}
        </details>

        {p.caseHref && (
          <Link href={p.caseHref} className="link mt-5 self-start text-[0.9375rem]">
            Читати кейс-стаді
          </Link>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<Filter>('all');
  const visible = filter === 'all' ? projects : projects.filter((p) => p.country === filter);

  return (
    <section id="projects" className="section bg-ivory">
      <div className="container-site">
        <Reveal>
          <SectionHeading
            eyebrow="Трек-рекорд"
            title="Завершені проєкти"
            lead="Вісім об’єктів у Польщі та Україні — з реальними цифрами по кожному."
          />
        </Reveal>

        <div className="mt-10 flex flex-wrap gap-2" role="group" aria-label="Фільтр за країною">
          {filters.map((f) => {
            const count = f.id === 'all' ? projects.length : projects.filter((p) => p.country === f.id).length;
            const active = filter === f.id;
            return (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilter(f.id)}
                aria-pressed={active}
                className={`min-h-[44px] rounded border px-5 text-[0.9375rem] transition-colors ${
                  active ? 'border-navy bg-navy text-ivory' : 'border-line text-navy hover:border-navy'
                }`}
              >
                {f.label} <span className={active ? 'text-on-navy-muted' : 'text-muted'}>{count}</span>
              </button>
            );
          })}
        </div>

        {/* Cards are not animated individually: they remount on filter
            change and must never depend on an entrance animation. */}
        <div className="mt-10 grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => (
            <ProjectCard key={p.id} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

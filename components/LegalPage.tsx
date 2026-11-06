import type { ReactNode } from 'react';

/** Shared shell for /privacy and /terms. */
export default function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <section className="section bg-ivory">
      <div className="container-site max-w-3xl">
        <p className="eyebrow">Правова інформація</p>
        <div className="mt-4 h-px w-10 bg-brass" aria-hidden />
        <h1 className="h-section mt-6">{title}</h1>
        <p className="mt-4 text-sm text-muted">Редакція від {updated}</p>
        <div className="mt-6 border-l-2 border-brass bg-ivory-deep px-5 py-4 text-[0.9375rem] text-ink">
          Чернетка. Текст підлягає перевірці та доповненню юристом перед публікацією.
        </div>
        <div className="legal mt-12 space-y-10 text-ink/85 [&_h2]:text-[1.625rem] [&_li]:mt-2 [&_p]:mt-3 [&_ul]:mt-3">
          {children}
        </div>
      </div>
    </section>
  );
}

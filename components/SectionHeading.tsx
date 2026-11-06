import type { ReactNode } from 'react';

/** Eyebrow + serif heading + optional lead. Used by every section. */
export default function SectionHeading({
  eyebrow,
  title,
  lead,
  inverse = false,
  className = '',
  as: Tag = 'h2',
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  inverse?: boolean;
  className?: string;
  as?: 'h1' | 'h2';
}) {
  return (
    <div className={`max-w-3xl ${className}`}>
      <p className={`eyebrow ${inverse ? 'on-navy' : ''}`}>{eyebrow}</p>
      <div className={`mt-4 h-px w-10 ${inverse ? 'bg-brass-light' : 'bg-brass'}`} aria-hidden />
      <Tag className={`h-section mt-6 ${inverse ? 'text-ivory' : ''}`}>{title}</Tag>
      {lead && (
        <p className={`mt-5 max-w-prose text-body-lg ${inverse ? 'text-on-navy-muted' : 'text-muted'}`}>
          {lead}
        </p>
      )}
    </div>
  );
}

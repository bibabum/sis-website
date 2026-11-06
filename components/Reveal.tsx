'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

/**
 * Quiet fade-in on scroll. Opacity only -- no slide, bounce or parallax.
 *
 * Each Reveal animates itself (no variant propagation to children), so
 * content that mounts later -- filtered cards, form steps -- is never
 * left stuck at opacity 0. With prefers-reduced-motion it renders static.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  as = 'div',
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: 'div' | 'section' | 'li' | 'article';
}) {
  const reduce = useReducedMotion();
  const Tag = motion[as];

  if (reduce) {
    const Static = as;
    return <Static className={className}>{children}</Static>;
  }

  return (
    <Tag
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.7, ease: 'easeOut', delay }}
    >
      {children}
    </Tag>
  );
}

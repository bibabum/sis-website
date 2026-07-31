'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import ImageCarousel from '@/components/ImageCarousel';
import {
  currentProject,
  marketSources,
  marketStats,
  priceGrowthComparison,
  scenarios,
} from '@/data/currentProject';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

/**
 * Renders a figure, or a visible "уточнюється" when it has not been
 * confirmed yet. Never falls back to a plausible-looking number.
 */
function Figure({ value, className = '' }: { value: string | null; className?: string }) {
  if (value === null || value === undefined) {
    return (
      <span className="text-white/40 italic font-normal text-sm">
        уточнюється
      </span>
    );
  }
  return <span className={className}>{value}</span>;
}

export default function CurrentProject() {
  const { unitsSold, unitsTotal } = currentProject;
  const available = unitsTotal - unitsSold;
  const soldPct = Math.round((unitsSold / unitsTotal) * 100);

  return (
    <section
      id="current"
      className="py-3xl bg-gradient-to-br from-navy-700 to-navy-900 text-white"
    >
      <div className="container-responsive">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-3xl"
        >
          {/* Heading */}
          <motion.div variants={itemVariants} className="max-w-3xl">
            <span className="inline-flex items-center gap-sm px-md py-sm rounded-full bg-gold-400/20 border border-gold-400/40 text-gold-300 text-xs font-bold tracking-widest mb-lg">
              <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
              {currentProject.status.toUpperCase()}
            </span>
            <h2 className="text-white mb-md">{currentProject.name}</h2>
            <p className="text-white/60 text-sm mb-lg">
              {currentProject.location}
            </p>
            <p className="text-lg text-white/80">{currentProject.intro}</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3xl items-start">
            {/* Left: photo + facts */}
            <motion.div variants={itemVariants} className="space-y-lg">
              {currentProject.images.length > 0 ? (
                <ImageCarousel
                  images={currentProject.images}
                  title={currentProject.name}
                />
              ) : (
                <div className="h-64 flex flex-col items-center justify-center gap-sm rounded-lg border-2 border-dashed border-white/25 bg-white/5 text-white/50">
                  <span className="text-3xl leading-none">🏠</span>
                  <span className="text-xs">Фото об&apos;єкта</span>
                </div>
              )}

              <dl className="space-y-md text-sm">
                {currentProject.facts.map((f) => (
                  <div
                    key={f.label}
                    className="flex justify-between gap-md border-b border-white/15 pb-sm"
                  >
                    <dt className="text-white/60">{f.label}</dt>
                    <dd className="font-bold text-white text-right">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </motion.div>

            {/* Right: price, availability, CTA */}
            <motion.div variants={itemVariants}>
              <div className="bg-white/10 backdrop-blur rounded-2xl p-2xl border border-white/20 space-y-lg">
                <div>
                  <p className="text-xs text-white/60 mb-xs">
                    Ціна в стані deweloperski
                  </p>
                  <p className="text-4xl font-serif font-bold text-gold-400">
                    {currentProject.price}
                  </p>
                  <p className="text-sm text-white/50 mt-xs">
                    {currentProject.priceUsd}
                  </p>
                </div>

                {/* Availability -- real scarcity, not manufactured */}
                <div className="border-t border-white/20 pt-lg">
                  <div className="flex justify-between items-baseline mb-sm">
                    <span className="text-sm text-white/70">
                      Продано {unitsSold} з {unitsTotal}
                    </span>
                    <span className="text-sm font-bold text-gold-400">
                      Вільно: {available}
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-white/15 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gold-400"
                      style={{ width: `${soldPct}%` }}
                    />
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="btn-base bg-gold-400 text-navy-700 hover:bg-gold-500 font-bold w-full text-center block"
                >
                  Обговорити цей об&apos;єкт
                </Link>
                <p className="text-xs text-white/50 text-center">
                  Розмова 15–20 хвилин. Покажемо документи та розрахунки.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Scenarios */}
          <motion.div variants={itemVariants} className="max-w-2xl">
            <h3 className="text-white mb-sm">Два способи заробити на цьому об&apos;єкті</h3>
            <p className="text-white/70">
              Купуєте в стані deweloperski, ми виконуємо ремонт — далі обираєте,
              що робити далі.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-lg">
            {scenarios.map((s) => (
              <motion.div
                key={s.id}
                variants={itemVariants}
                className="rounded-xl bg-white/5 border border-white/15 p-2xl flex flex-col"
              >
                <h4 className="text-white">{s.name}</h4>
                <p className="text-sm text-white/60 mt-xs mb-lg">{s.tagline}</p>

                <div className="flex items-baseline justify-between pb-lg mb-lg border-b border-white/15">
                  <span className="text-sm text-white/70">
                    {s.headline.label}
                  </span>
                  <Figure
                    value={s.headline.value}
                    className="text-3xl font-serif font-bold text-gold-400"
                  />
                </div>

                <dl className="space-y-sm text-sm">
                  {s.rows.map((row) => (
                    <div key={row.label} className="flex justify-between gap-md">
                      <dt className="text-white/60">{row.label}</dt>
                      <dd className="font-medium text-white text-right">
                        <Figure value={row.value} />
                      </dd>
                    </div>
                  ))}
                </dl>
              </motion.div>
            ))}
          </div>

          {/* Market context */}
          <motion.div variants={itemVariants} className="max-w-2xl">
            <h3 className="text-white mb-sm">Контекст ринку</h3>
            <p className="text-white/70">
              Чому польська нерухомість зараз цікава для орендної стратегії.
            </p>
          </motion.div>

          {/* Price growth: one measure, two categories -- direct-labelled,
              so identity never rests on colour alone and no legend is needed. */}
          <motion.figure
            variants={itemVariants}
            className="rounded-xl bg-white/5 border border-white/15 p-lg md:p-2xl"
          >
            <figcaption className="text-sm font-medium text-white mb-lg">
              {priceGrowthComparison.title}
            </figcaption>

            <div className="space-y-md">
              {priceGrowthComparison.bars.map((bar) => (
                <div key={bar.label} className="flex items-center gap-md">
                  <span className="w-16 md:w-20 shrink-0 text-sm text-white/70">
                    {bar.label}
                  </span>
                  <div className="flex-grow h-6 bg-white/5 rounded-r-sm overflow-hidden">
                    <div
                      className="h-full rounded-r-sm"
                      style={{
                        width: `${Number(
                          ((bar.value / priceGrowthComparison.max) * 100).toFixed(1)
                        )}%`,
                        backgroundColor: bar.color,
                      }}
                    />
                  </div>
                  <span className="w-12 md:w-14 shrink-0 text-sm font-bold text-white text-right tabular-nums">
                    {bar.value.toLocaleString('uk-UA', {
                      minimumFractionDigits: 1,
                    })}
                    %
                  </span>
                </div>
              ))}
            </div>

            <p className="text-xs text-white/50 mt-lg">
              {priceGrowthComparison.caption}
            </p>
          </motion.figure>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-lg"
          >
            {marketStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl bg-white/5 border border-white/15 p-lg"
              >
                <p className="text-3xl font-serif font-bold text-gold-400 mb-sm">
                  {stat.value}
                </p>
                <p className="text-sm text-white font-medium">{stat.label}</p>
                <p className="text-xs text-white/50 mt-xs">{stat.note}</p>
              </div>
            ))}
          </motion.div>

          {/* Honest scoping of the market data */}
          <motion.div
            variants={itemVariants}
            className="text-xs text-white/50 space-y-sm max-w-3xl"
          >
            <p>
              Дані описують ринок Варшави та Польщі загалом і наведені як
              контекст. Це не прогноз дохідності конкретно цього об&apos;єкта:
              Zakręt — приміська локація, а показники оренди вище стосуються
              квартир у Варшаві. Розрахунки саме по цьому будинку показуємо на
              консультації.
            </p>
            <p>
              Джерела:{' '}
              {marketSources.map((src, idx) => (
                <span key={src.href}>
                  {idx > 0 && ' · '}
                  <a
                    href={src.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-dotted underline-offset-2 hover:text-white"
                  >
                    {src.label}
                  </a>
                </span>
              ))}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

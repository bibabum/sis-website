'use client';

import { motion } from 'framer-motion';
import ImageCarousel from '@/components/ImageCarousel';
import {
  polandBuildings,
  polandSummary,
  polandUnit,
} from '@/data/polandPortfolio';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

/**
 * Photo slot for a card. Renders the carousel once images exist and
 * otherwise holds the same space with a placeholder, so adding photos
 * later does not shift the layout.
 */
function PhotoSlot({
  images,
  title,
  dark = false,
}: {
  images?: string[];
  title: string;
  dark?: boolean;
}) {
  if (images && images.length > 0) {
    return <ImageCarousel images={images} title={title} />;
  }

  return (
    <div
      className={`h-64 flex flex-col items-center justify-center gap-sm rounded-lg border-2 border-dashed ${
        dark
          ? 'border-white/25 bg-white/5 text-white/50'
          : 'border-border bg-surface-alt text-text-secondary'
      }`}
    >
      <span className="text-3xl leading-none">🏠</span>
      <span className="text-xs">Фото проекту</span>
    </div>
  );
}

export default function PolandPortfolio() {
  return (
    <section id="poland" className="py-3xl bg-cream border-y border-border">
      <div className="container-responsive">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-3xl"
        >
          {/* Heading */}
          <motion.div variants={itemVariants} className="max-w-2xl">
            <span className="inline-block px-md py-sm rounded-full bg-navy-600/10 border border-navy-600/20 text-navy-600 text-xs font-bold tracking-widest mb-lg">
              ПОЛЬЩА · ВАРШАВА
            </span>
            <h2 className="mb-md">Збудовано та продано у Варшаві</h2>
            <p className="text-lg text-text-secondary">
              Два будинки, вісім квартир — усі продані. Увійти можна в цілу
              будівлю або в одну квартиру.
            </p>
          </motion.div>

          {/* Totals */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-lg"
          >
            {polandSummary.map((stat) => (
              <div
                key={stat.label}
                className="bg-surface rounded-xl border border-border p-lg text-center"
              >
                <p className="text-3xl font-serif font-bold text-navy-600">
                  {stat.value}
                </p>
                <p className="text-xs text-text-secondary mt-xs">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-lg items-start">
            {/* Apartment — the accessible entry point */}
            <motion.div
              variants={itemVariants}
              className="rounded-xl p-lg bg-navy-600 text-white border-2 border-gold-600 flex flex-col"
            >
              <PhotoSlot images={polandUnit.images} title={polandUnit.name} dark />

              <div className="mt-lg">
                <h3 className="text-white">{polandUnit.name}</h3>
                <p className="text-sm text-white/70 mt-xs">
                  {polandUnit.subtitle}
                </p>
              </div>

              <div className="flex items-end gap-lg mt-lg pb-lg mb-lg border-b border-white/20">
                <div>
                  <p className="text-xs text-white/60 mb-xs">
                    {polandUnit.entryLabel}
                  </p>
                  <p className="text-3xl font-serif font-bold text-gold-400">
                    {polandUnit.entry}
                  </p>
                </div>
                <div className="ml-auto text-right">
                  <p className="text-xs text-white/60 mb-xs">Дохідність</p>
                  <p className="text-3xl font-serif font-bold text-gold-400">
                    {polandUnit.roi}
                  </p>
                </div>
              </div>

              <dl className="space-y-sm text-sm">
                {polandUnit.rows.map((row) => (
                  <div key={row.label} className="flex justify-between gap-md">
                    <dt className="text-white/70">{row.label}</dt>
                    <dd className="font-medium text-white text-right">
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </motion.div>

            {/* Whole buildings */}
            {polandBuildings.map((b) => (
              <motion.div
                key={b.id}
                variants={itemVariants}
                className="card-base p-lg flex flex-col"
              >
                <PhotoSlot images={b.images} title={b.name} />

                <div className="flex flex-wrap items-center gap-sm mt-lg mb-lg">
                  <h3 className="text-navy-600 mr-auto">{b.name}</h3>
                  <span className="text-xs font-bold text-green bg-green/10 px-sm py-xs rounded-full">
                    ✓ {b.status}
                  </span>
                  <span className="text-xs text-text-secondary bg-surface-alt px-sm py-xs rounded-full">
                    {b.location}
                  </span>
                </div>

                <dl className="space-y-md text-sm">
                  {b.rows.map((row) => (
                    <div
                      key={row.label}
                      className="flex justify-between gap-md border-b border-border pb-sm"
                    >
                      <dt className="text-text-secondary">{row.label}</dt>
                      <dd className="font-bold text-navy-600 text-right">
                        {row.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="flex items-baseline justify-between mt-lg pt-md">
                  <span className="text-sm text-text-secondary">Дохідність</span>
                  <span className="text-3xl font-serif font-bold text-gold-600">
                    {b.roi}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Closing note */}
          <motion.p
            variants={itemVariants}
            className="text-sm text-text-secondary text-center"
          >
            Обидва проекти завершені та продані. Документи, дозволи та договори
            надаємо на консультації. Юридичний партнер — Axellegal.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

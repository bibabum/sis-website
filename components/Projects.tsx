'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import ImageCarousel from '@/components/ImageCarousel';
import { countryLabels, projects, type Country } from '@/data/projects';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

type Filter = 'all' | Country;

const filters: { id: Filter; label: string }[] = [
  { id: 'all', label: 'Всі проєкти' },
  { id: 'ua', label: 'Україна' },
  { id: 'pl', label: 'Польща' },
];

function PhotoSlot({ images, title }: { images?: string[]; title: string }) {
  if (images && images.length > 0) {
    return <ImageCarousel images={images} title={title} />;
  }
  return (
    <div className="h-64 flex flex-col items-center justify-center gap-sm rounded-lg border-2 border-dashed border-border bg-surface-alt text-text-secondary">
      <span className="text-3xl leading-none">🏠</span>
      <span className="text-xs">Фото проекту</span>
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<Filter>('all');

  const sorted = [...projects].sort((a, b) => b.roiSort - a.roiSort);
  const visible =
    filter === 'all' ? sorted : sorted.filter((p) => p.country === filter);

  return (
    <section id="projects" className="py-3xl bg-white">
      <div className="container-responsive">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-2xl"
        >
          <motion.div variants={itemVariants} className="max-w-2xl">
            <h2 className="mb-md">Наші проєкти</h2>
            <p className="text-lg text-text-secondary">
              Завершені проекти в Україні та за кордоном — з реальними
              цифрами по кожному.
            </p>
          </motion.div>

          {/* Filter -- also signals immediately that both countries exist */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-sm">
            {filters.map((f) => {
              const count =
                f.id === 'all'
                  ? projects.length
                  : projects.filter((p) => p.country === f.id).length;
              const active = filter === f.id;
              return (
                <button
                  key={f.id}
                  onClick={() => setFilter(f.id)}
                  aria-pressed={active}
                  className={`px-lg py-sm rounded-full text-sm font-medium transition-colors ${
                    active
                      ? 'bg-navy-600 text-white'
                      : 'bg-surface-alt text-text-secondary hover:text-navy-600'
                  }`}
                >
                  {f.label}
                  <span className={active ? 'text-white/60' : 'text-text-secondary'}>
                    {' '}
                    ({count})
                  </span>
                </button>
              );
            })}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg items-start">
            {visible.map((p) => (
              <motion.div
                key={p.id}
                variants={itemVariants}
                className="card-base p-lg flex flex-col"
              >
                <div className="relative">
                  <PhotoSlot images={p.images} title={p.name} />
                  <div className="absolute top-3 right-3 px-lg py-md bg-gold-600 text-white rounded-full text-sm font-bold shadow-lg">
                    {p.roi} ROI
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-sm mt-lg mb-sm">
                  <h3 className="text-navy-600 mr-auto">{p.name}</h3>
                  <span className="text-xs font-bold text-green bg-green/10 px-sm py-xs rounded-full">
                    ✓ {p.status}
                  </span>
                  <span className="text-xs text-text-secondary bg-surface-alt px-sm py-xs rounded-full">
                    {countryLabels[p.country]}
                  </span>
                </div>
                <p className="text-sm text-text-secondary mb-lg">{p.location}</p>

                <dl className="space-y-sm text-sm">
                  {p.rows.map((row) => (
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

                {p.description && (
                  <p className="text-sm text-text-secondary mt-lg leading-relaxed">
                    {p.description}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { articles } from '@/data/articles';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-600 to-navy-800 text-white py-3xl">
        <div className="container-responsive">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.h1 variants={itemVariants} className="text-4xl lg:text-5xl font-serif font-bold mb-lg">
              Корисні матеріали
            </motion.h1>
            <motion.p variants={itemVariants} className="text-lg text-white/80">
              Аналіз ринку, правові гайди та стратегії інвестування для українців
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-3xl bg-cream">
        <div className="container-responsive">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg"
          >
            {articles.map((article) => (
              <motion.div key={article.id} variants={itemVariants}>
                <Link href={`/blog/${article.slug}`} className="block group">
                  <div className="card-base overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden bg-navy-100">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-lg flex flex-col flex-grow">
                      <div className="flex gap-sm items-center mb-md">
                        <span className="text-xs font-bold text-gold-600 bg-gold-50 px-sm py-xs rounded-full">
                          {article.category}
                        </span>
                        <span className="text-xs text-text-secondary">{article.readTime}</span>
                      </div>

                      <h3 className="text-navy-600 group-hover:text-gold-600 transition-colors leading-snug mb-md flex-grow">
                        {article.title}
                      </h3>

                      <p className="text-sm text-text-secondary line-clamp-2 mb-md">
                        {article.excerpt}
                      </p>

                      <div className="text-xs text-text-secondary">
                        {new Date(article.date).toLocaleDateString('uk-UA', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-3xl bg-gradient-to-br from-navy-600 to-navy-800 text-white">
        <div className="container-responsive">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <motion.h2 variants={itemVariants} className="text-white mb-lg">
              Готові до розмови?
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg text-white/80 mb-2xl">
              Запишіться на консультацію з нашим експертом.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-md">
              <Link href="/contact" className="btn-primary">
                Записатися
              </Link>
              <a href="https://t.me/+380960082884" className="btn-base border-2 border-white text-white bg-transparent hover:bg-white/15">
                Телеграм
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

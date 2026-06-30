'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { articles } from '@/data/articles';
import { notFound } from 'next/navigation';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = articles.filter((a) => a.id !== article.id).slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-600 to-navy-800 text-white py-3xl">
        <div className="container-responsive">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <Link href="/blog" className="text-gold-400 hover:text-gold-300 text-sm font-medium mb-lg block">
              ← Назад до всіх статей
            </Link>
            <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-lg">{article.title}</h1>
            <div className="flex flex-wrap gap-lg items-center">
              <span className="text-gold-400 bg-gold-600/20 px-md py-sm rounded-full text-sm font-medium">
                {article.category}
              </span>
              <span className="text-white/60 text-sm">{article.readTime}</span>
              <span className="text-white/60 text-sm">
                {new Date(article.date).toLocaleDateString('uk-UA', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Image */}
      <section className="bg-white">
        <div className="container-responsive">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative h-96 rounded-xl overflow-hidden my-3xl"
          >
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-3xl bg-white">
        <div className="container-responsive">
          <div className="max-w-3xl mx-auto prose prose-lg dark:prose-invert">
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-text leading-relaxed space-y-lg"
              dangerouslySetInnerHTML={{
                __html: article.content
                  .split('\n')
                  .map((line, idx) => {
                    if (line.startsWith('# ')) {
                      return `<h1 key=${idx} class="text-4xl font-serif font-bold text-navy-600 mt-2xl mb-lg">${line.substring(2)}</h1>`;
                    }
                    if (line.startsWith('## ')) {
                      return `<h2 key=${idx} class="text-2xl font-serif font-bold text-navy-600 mt-xl mb-md">${line.substring(3)}</h2>`;
                    }
                    if (line.startsWith('### ')) {
                      return `<h3 key=${idx} class="text-xl font-bold text-navy-600 mt-lg mb-sm">${line.substring(4)}</h3>`;
                    }
                    if (line.startsWith('- ')) {
                      return `<li key=${idx} class="ml-lg">${line.substring(2)}</li>`;
                    }
                    if (line.trim() === '') {
                      return `<br key=${idx} />`;
                    }
                    return `<p key=${idx} class="text-text-secondary">${line}</p>`;
                  })
                  .join(''),
              }}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-3xl bg-gradient-to-br from-navy-600 to-navy-800 text-white">
        <div className="container-responsive">
          <motion.div
            variants={itemVariants}
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

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-3xl bg-cream">
          <div className="container-responsive">
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="mb-3xl">Інші статті</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
                {relatedArticles.map((relArticle) => (
                  <Link key={relArticle.id} href={`/blog/${relArticle.slug}`} className="group">
                    <div className="card-base overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow">
                      <div className="relative h-40 overflow-hidden bg-navy-100">
                        <Image
                          src={relArticle.image}
                          alt={relArticle.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-lg flex flex-col flex-grow">
                        <div className="flex gap-sm items-center mb-md">
                          <span className="text-xs font-bold text-gold-600 bg-gold-50 px-sm py-xs rounded-full">
                            {relArticle.category}
                          </span>
                          <span className="text-xs text-text-secondary">{relArticle.readTime}</span>
                        </div>
                        <h4 className="text-navy-600 group-hover:text-gold-600 transition-colors leading-snug">
                          {relArticle.title}
                        </h4>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}
    </>
  );
}

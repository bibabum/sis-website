'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-navy-600 via-navy-700 to-navy-800">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-2xl" />
      
      <div className="container-responsive relative z-10 min-h-screen flex flex-col justify-center py-2xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-3xl items-center"
        >
          {/* Left Column - Text */}
          <div className="space-y-lg">
            <motion.div variants={itemVariants}>
              <span className="inline-block px-md py-sm rounded-full bg-gold-100/20 border border-gold-400/30 text-gold-300 text-xs font-bold tracking-widest">
                ІНВЕСТИЦІЙНА КОНСУЛЬТАЦІЯ
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
              Растіть<br />ваш капітал<br />через<br /><span className="text-gold-400">нерухомість</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg text-white/80 max-w-md leading-relaxed">
              Інвестуйте в польські та українські проекти без ризику та стресу. Повний супровід, реальні 30%+ результати, прозора структура.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-md pt-lg">
              <Link href="/contact" className="btn-primary text-center border-2 border-gold-400 hover:border-gold-500">
                Інвестувати в проєкт
              </Link>
              <a href="#services" className="btn-base text-center border-2 border-white text-white bg-transparent hover:bg-white/15">
                Отримати консультацію
              </a>
            </motion.div>

            {/* Trust metrics */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2xl pt-2xl border-t border-white/10">
              {[
                { number: '5+', label: 'Завершених проектів' },
                { number: '$2M+', label: 'Обсяг інвестицій' },
                { number: '30%+', label: 'Середня ROI' },
              ].map((metric, idx) => (
                <div key={idx} className="flex-col">
                  <div className="text-3xl font-serif font-bold text-gold-400">{metric.number}</div>
                  <div className="text-sm text-white/60">{metric.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Image */}
          <motion.div
            variants={itemVariants}
            className="relative hidden lg:block"
          >
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop"
                alt="Modern building"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}

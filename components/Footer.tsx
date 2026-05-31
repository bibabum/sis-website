'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-navy-50">
      <div className="container-responsive py-3xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2xl mb-3xl">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-lg">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-navy-600 to-navy-700 flex-center text-white font-serif font-bold">
                SIS
              </div>
            </div>
            <p className="text-text-secondary text-sm">
              Інвестиційний консалтинг для українців
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-sans font-bold mb-md text-navy-600">Навігація</h4>
            <ul className="space-y-sm text-sm text-text-secondary">
              <li><a href="#services" className="hover:text-navy-600 transition-colors">Послуги</a></li>
              <li><a href="#projects" className="hover:text-navy-600 transition-colors">Проєкти</a></li>
              <li><Link href="/contact" className="hover:text-navy-600 transition-colors">Контакти</Link></li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-sans font-bold mb-md text-navy-600">Послуги</h4>
            <ul className="space-y-sm text-sm text-text-secondary">
              <li><a href="#services" className="hover:text-navy-600 transition-colors">Інвестиційне партнерство</a></li>
              <li><a href="#services" className="hover:text-navy-600 transition-colors">Консультація</a></li>
              <li><a href="#services" className="hover:text-navy-600 transition-colors">Управління активами</a></li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-sans font-bold mb-md text-navy-600">Контакти</h4>
            <ul className="space-y-sm text-sm text-text-secondary">
              <li>
                <a href="tel:+380960082884" className="hover:text-navy-600 transition-colors">
                  +38 096 008-28-84
                </a>
              </li>
              <li>
                <a href="mailto:mail@sis.pl.ua" className="hover:text-navy-600 transition-colors">
                  mail@sis.pl.ua
                </a>
              </li>
              <li>
                <a href="https://wa.me/380960082884" className="hover:text-navy-600 transition-colors">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="https://t.me/+380960082884" className="hover:text-navy-600 transition-colors">
                  Telegram
                </a>
              </li>
              <li>м. Київ, вул. Володимирська, 4</li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-lg">
          <div className="flex flex-col md:flex-row md:flex-between items-center gap-md text-sm text-text-secondary">
            <p>&copy; {currentYear} SIS. Всі права захищені.</p>
            <div className="flex gap-lg">
              <a href="#" className="hover:text-navy-600 transition-colors">Політика конфіденційності</a>
              <a href="#" className="hover:text-navy-600 transition-colors">Умови використання</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '#services', label: 'Услуги' },
    { href: '#projects', label: 'Проекты' },
    { href: '#process', label: 'Процесс' },
    { href: '#about', label: 'О нас' },
    { href: '/contact', label: 'Контакты' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-surface/95 backdrop-blur-sm border-b border-border">
      <div className="container-responsive flex-between py-md">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-sm group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-navy-600 to-navy-700 flex-center text-white font-serif font-bold text-lg group-hover:shadow-gold-glow transition-shadow duration-300">
            SIS
          </div>
          <span className="hidden sm:inline font-serif font-bold text-navy-600">SIS</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-xl">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-text-secondary hover:text-navy-600 transition-colors duration-200 font-sans font-medium text-sm"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden sm:flex gap-sm">
          <Link
            href="/contact"
            className="btn-secondary hidden sm:inline-block"
          >
            Консультація
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-xs w-6 h-6 justify-center"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="w-full h-0.5 bg-navy-600 rounded-full origin-left"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-full h-0.5 bg-navy-600 rounded-full"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="w-full h-0.5 bg-navy-600 rounded-full origin-left"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden border-t border-border bg-surface"
        >
          <div className="container-responsive py-lg flex flex-col gap-md">
            {navItems.map((item, idx) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="text-text-secondary hover:text-navy-600 transition-colors font-sans font-medium"
              >
                {item.label}
              </motion.a>
            ))}
            <Link href="/contact" className="btn-primary w-full text-center">
              Консультація
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}

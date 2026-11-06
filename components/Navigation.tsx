'use client';

import Link from 'next/link';
import { useState } from 'react';

const navItems = [
  { href: '/#projects', label: 'Проєкти' },
  { href: '/#services', label: 'Послуги' },
  { href: '/#process', label: 'Процес' },
  { href: '/about', label: 'Про засновника' },
  { href: '/blog', label: 'Матеріали' },
  { href: '/contact', label: 'Контакти' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ivory">
      <nav className="container-site flex h-16 items-center justify-between md:h-20" aria-label="Головна навігація">
        <Link href="/" className="font-serif text-[1.75rem] font-medium tracking-[0.12em] text-navy" aria-label="SIS — на головну">
          SIS
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="text-[0.9375rem] text-ink/80 transition-colors hover:text-navy">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link href="/contact" className="btn-primary hidden min-h-[42px] px-5 sm:inline-flex">
            Консультація
          </Link>
          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            className="flex h-11 w-11 flex-col items-center justify-center gap-[6px] lg:hidden"
            aria-label={isOpen ? 'Закрити меню' : 'Відкрити меню'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <span className={`h-px w-6 bg-navy transition-transform ${isOpen ? 'translate-y-[3.5px] rotate-45' : ''}`} />
            <span className={`h-px w-6 bg-navy transition-transform ${isOpen ? '-translate-y-[3.5px] -rotate-45' : ''}`} />
          </button>
        </div>
      </nav>

      {isOpen && (
        <div id="mobile-menu" className="border-t border-line bg-ivory lg:hidden">
          <ul className="container-site flex flex-col py-4">
            {navItems.map((item) => (
              <li key={item.href} className="border-b border-line last:border-0">
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-4 text-body-lg text-navy"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-4">
              <Link href="/contact" onClick={() => setIsOpen(false)} className="btn-primary w-full">
                Консультація
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

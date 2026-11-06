import Link from 'next/link';
import { contacts } from '@/data/contacts';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="on-navy bg-navy-ink text-on-navy">
      <div className="container-site py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-serif text-[2rem] font-medium tracking-[0.12em] text-ivory">SIS</p>
            <p className="mt-4 max-w-xs text-on-navy-muted">
              Інвестиційний консалтинг. Нерухомість у Варшаві та Києві.
            </p>
          </div>

          <div>
            <p className="eyebrow">Навігація</p>
            <ul className="mt-5 space-y-3 text-on-navy-muted">
              <li><Link href="/#projects" className="hover:text-ivory">Проєкти</Link></li>
              <li><Link href="/#services" className="hover:text-ivory">Послуги</Link></li>
              <li><Link href="/#process" className="hover:text-ivory">Процес роботи</Link></li>
              <li><Link href="/about" className="hover:text-ivory">Про засновника</Link></li>
              <li><Link href="/blog" className="hover:text-ivory">Корисні матеріали</Link></li>
            </ul>
          </div>

          <div>
            <p className="eyebrow">Послуги</p>
            <ul className="mt-5 space-y-3 text-on-navy-muted">
              <li><Link href="/#services" className="hover:text-ivory">Інвестування в проєкти</Link></li>
              <li><Link href="/#services" className="hover:text-ivory">Управління активами</Link></li>
              <li><Link href="/contact" className="hover:text-ivory">Персональна консультація</Link></li>
            </ul>
          </div>

          <div>
            <p className="eyebrow">Контакти</p>
            <ul className="mt-5 space-y-3 text-on-navy-muted">
              <li><a href={contacts.phoneHref} className="hover:text-ivory">{contacts.phone}</a></li>
              <li><a href={contacts.emailHref} className="hover:text-ivory">{contacts.email}</a></li>
              <li><a href={contacts.whatsapp} className="hover:text-ivory">WhatsApp</a></li>
              <li><a href={contacts.telegram} className="hover:text-ivory">Telegram</a></li>
              <li>
                <a href={contacts.mapHref} target="_blank" rel="noopener noreferrer" className="hover:text-ivory">
                  {contacts.address}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line-navy pt-8 text-sm text-on-navy-muted md:flex-row md:items-center md:justify-between">
          <p>&copy; {year} SIS. Усі права захищені.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-ivory">Політика конфіденційності</Link>
            <Link href="/terms" className="hover:text-ivory">Умови використання</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

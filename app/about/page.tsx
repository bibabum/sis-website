import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SectionHeading from '@/components/SectionHeading';
import { founderParagraphs, principles } from '@/data/founder';
import igor from '@/public/igor.jpg';

export const metadata: Metadata = {
  title: 'Про засновника',
  description: 'Ігор, засновник SIS: понад 20 років у фінансах, інвестує власні кошти в кожен проєкт.',
};

export default function AboutPage() {
  return (
    <>
      <section className="section bg-ivory">
        <div className="container-site grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <SectionHeading as="h1" eyebrow="Про засновника" title="Ігор, засновник SIS" />
            <div className="mt-8 space-y-5 text-body-lg text-ink/85">
              {founderParagraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="relative aspect-[5/4] overflow-hidden bg-ivory-deep">
              <Image
                src={igor}
                alt="Ігор — засновник SIS"
                fill
                priority
                placeholder="blur"
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-[65%_center]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="on-navy section bg-navy text-on-navy">
        <div className="container-site">
          <SectionHeading inverse eyebrow="Принципи" title="На чому тримається SIS" />
          <ol className="mt-14 grid grid-cols-1 border-t border-line-navy md:grid-cols-2">
            {principles.map((p, i) => (
              <li key={p.title} className={`border-b border-line-navy py-8 ${i % 2 === 1 ? 'md:border-l md:pl-10' : 'md:pr-10'}`}>
                <p className="numeral text-sm text-brass-light">0{i + 1}</p>
                <h2 className="mt-3 text-[1.75rem] text-ivory">{p.title}</h2>
                <p className="mt-2 text-on-navy-muted">{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section bg-ivory">
        <div className="container-site max-w-3xl text-center">
          <h2 className="h-section">Поговоримо про ваші цілі</h2>
          <p className="mt-5 text-body-lg text-muted">
            Перша консультація безкоштовна. 15–20 хвилин, щоб зрозуміти ваші цілі.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/contact" className="btn-primary">
              Записатися на консультацію
            </Link>
            <Link href="/#projects" className="btn-secondary">
              Дивитись проєкти
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SectionHeading from '@/components/SectionHeading';
import { articles } from '@/data/articles';

export const metadata: Metadata = {
  title: 'Корисні матеріали',
  description: 'Аналіз ринку, правові гайди та стратегії інвестування для українців.',
};

export default function BlogPage() {
  return (
    <section className="section bg-ivory">
      <div className="container-site">
        <SectionHeading
          as="h1"
          eyebrow="Матеріали"
          title="Корисні матеріали"
          lead="Аналіз ринку, правові гайди та стратегії інвестування для українців."
        />
        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, i) => (
            <Link key={article.id} href={`/blog/${article.slug}`} className="group block">
              <div className="relative aspect-[16/10] overflow-hidden bg-ivory-deep">
                <Image
                  src={article.image}
                  alt=""
                  fill
                  priority={i === 0}
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <p className="mt-5 text-sm text-muted">
                <span className="text-brass-deep">{article.category}</span> · {article.readTime} ·{' '}
                {new Date(article.date).toLocaleDateString('uk-UA', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
              <h2 className="mt-2 text-[1.625rem] leading-snug group-hover:underline group-hover:decoration-brass group-hover:decoration-1 group-hover:underline-offset-[6px]">
                {article.title}
              </h2>
              <p className="mt-3 line-clamp-3 text-muted">{article.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

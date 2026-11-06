import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { articles } from '@/data/articles';
import { contacts } from '@/data/contacts';
import { renderArticle } from '@/lib/renderArticle';

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = articles.find((a) => a.slug === params.slug);
  return article ? { title: article.title, description: article.excerpt } : {};
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) notFound();

  const related = articles.filter((a) => a.id !== article.id).slice(0, 3);

  return (
    <>
      <article className="bg-ivory">
        <header className="container-site max-w-4xl pt-14 md:pt-20">
          <Link href="/blog" className="link text-[0.9375rem]">
            Усі статті
          </Link>
          <p className="mt-10 text-sm text-muted">
            <span className="text-brass-deep">{article.category}</span> · {article.readTime} ·{' '}
            {new Date(article.date).toLocaleDateString('uk-UA', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
          <h1 className="mt-4 text-[2.375rem] leading-[1.1] md:text-[3.5rem]">{article.title}</h1>
        </header>

        <div className="container-site max-w-5xl">
          <div className="relative mt-12 aspect-[2/1] overflow-hidden bg-ivory-deep">
            <Image src={article.image} alt="" fill priority sizes="(min-width: 1024px) 1024px, 100vw" className="object-cover" />
          </div>
        </div>

        <div
          className="container-site max-w-prose py-12 text-body-lg md:py-16"
          dangerouslySetInnerHTML={{ __html: renderArticle(article.content) }}
        />
      </article>

      <section className="on-navy section bg-navy text-on-navy">
        <div className="container-site max-w-2xl">
          <div className="h-px w-10 bg-brass-light" aria-hidden />
          <h2 className="h-section mt-8 text-ivory">Готові до розмови?</h2>
          <p className="mt-5 text-body-lg text-on-navy-muted">
            Перша консультація безкоштовна. 15–20 хвилин, щоб зрозуміти ваші цілі.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn-primary-inverse">
              Записатися на консультацію
            </Link>
            <a href={contacts.telegram} className="btn-secondary-inverse">
              Telegram
            </a>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section bg-ivory">
          <div className="container-site">
            <h2 className="h-section">Інші статті</h2>
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
              {related.map((r) => (
                <Link key={r.id} href={`/blog/${r.slug}`} className="group block">
                  <div className="relative aspect-[16/10] overflow-hidden bg-ivory-deep">
                    <Image src={r.image} alt="" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                  </div>
                  <p className="mt-5 text-sm text-muted">
                    <span className="text-brass-deep">{r.category}</span> · {r.readTime}
                  </p>
                  <h3 className="mt-2 text-[1.5rem] leading-snug group-hover:underline group-hover:decoration-brass group-hover:decoration-1 group-hover:underline-offset-[6px]">
                    {r.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

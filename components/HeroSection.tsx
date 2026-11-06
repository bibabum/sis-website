import Image from 'next/image';
import Link from 'next/link';
import house1 from '@/public/images/house-1/house-1-1.jpg';

// Static -- no entrance animation, so the LCP heading and photo paint immediately.
export default function HeroSection() {
  return (
    <section className="bg-ivory">
      <div className="container-site grid grid-cols-1 items-center gap-12 py-14 md:py-20 lg:grid-cols-12 lg:gap-16 lg:py-24">
        <div className="lg:col-span-6">
          <p className="eyebrow">Інвестиційний консалтинг</p>
          <div className="mt-4 h-px w-10 bg-brass" aria-hidden />
          <h1 className="mt-8 text-[2.625rem] leading-[1.05] sm:text-[3.5rem] lg:text-[4.5rem] xl:text-[5rem]">
            Ми інвестуємо разом з вами.{' '}
            <span className="italic">Власними грошима.</span>
          </h1>
          <p className="mt-8 max-w-[34rem] text-body-lg text-muted">
            У кожен проєкт SIS вкладає щонайменше 50% власних коштів. Ви бачите документи, розрахунки та
            результат кожного завершеного об&apos;єкта.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn-primary">
              Обговорити інвестицію
            </Link>
            <Link href="/#projects" className="btn-secondary">
              Дивитись проєкти
            </Link>
          </div>
        </div>

        <figure className="lg:col-span-6">
          <div className="relative aspect-[4/3] overflow-hidden bg-ivory-deep">
            <Image
              src={house1}
              alt="Будинок №1 у Варшаві — завершений проєкт SIS"
              fill
              priority
              quality={60}
              placeholder="blur"
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-4 flex items-center justify-between border-t border-line pt-3 text-sm text-muted">
            <span>Будинок №1 · Варшава · завершено</span>
            <span className="numeral text-base text-brass-deep">ROI 32%</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

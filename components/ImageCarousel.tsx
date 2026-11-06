'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ImageCarouselProps {
  images: string[];
  title: string;
  /** CSS object-position applied to every image (e.g. "center 25%"). */
  objectPosition?: string;
  /** next/image `sizes` -- how wide the frame renders at each breakpoint. */
  sizes?: string;
  /** Load the first image eagerly (only for above-the-fold use). */
  priority?: boolean;
  aspect?: string;
}

export default function ImageCarousel({
  images,
  title,
  objectPosition = 'center',
  sizes = '(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw',
  priority = false,
  aspect = 'aspect-[4/3]',
}: ImageCarouselProps) {
  const [current, setCurrent] = useState(0);
  const many = images.length > 1;

  const go = (delta: number) => setCurrent((c) => (c + delta + images.length) % images.length);

  return (
    <div className={`relative w-full overflow-hidden bg-ivory-deep ${aspect}`}>
      <Image
        key={images[current]}
        src={images[current]}
        alt={`${title} — фото ${current + 1} з ${images.length}`}
        fill
        sizes={sizes}
        priority={priority && current === 0}
        className="object-cover"
        style={{ objectPosition }}
      />

      {many && (
        <>
          <div className="absolute bottom-3 right-3 flex gap-1">
            <button
              type="button"
              onClick={() => go(-1)}
              className="flex h-10 w-10 items-center justify-center rounded bg-navy/80 text-ivory hover:bg-navy"
              aria-label={`${title}: попереднє фото`}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.25" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              className="flex h-10 w-10 items-center justify-center rounded bg-navy/80 text-ivory hover:bg-navy"
              aria-label={`${title}: наступне фото`}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.25" />
              </svg>
            </button>
          </div>
          <p className="absolute bottom-3 left-3 rounded bg-navy/80 px-2 py-1 text-xs tabular-nums text-ivory" aria-live="polite">
            {current + 1} / {images.length}
          </p>
        </>
      )}
    </div>
  );
}

import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Cormorant_Garamond, Onest } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

// `subsets` controls what is *preloaded*; the other unicode ranges
// (latin, latin-ext for "Zakręt") are still declared and load on demand.
const serif = Cormorant_Garamond({
  subsets: ['cyrillic'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

const sans = Onest({
  subsets: ['cyrillic', 'latin'],
  variable: '--font-sans',
  display: 'swap',
});

const description =
  'Інвестиційний консалтинг SIS: нерухомість у Варшаві та Києві. У кожен проєкт SIS вкладає щонайменше 50% власних коштів. Документи, розрахунки та результат кожного завершеного об’єкта.';

export const metadata: Metadata = {
  metadataBase: new URL('https://sis.pl.ua'),
  title: {
    default: 'SIS — Інвестиційний консалтинг',
    template: '%s — SIS',
  },
  description,
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%231B3A5C"/><text x="50" y="68" font-family="Georgia,serif" font-size="52" text-anchor="middle" fill="%23F7F4EE">S</text></svg>',
  },
  openGraph: {
    type: 'website',
    locale: 'uk_UA',
    siteName: 'SIS',
    title: 'SIS — Ми інвестуємо разом з вами. Власними грошима.',
    description,
    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 630,
        alt: 'Будинок №1 у Варшаві — завершений проєкт SIS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SIS — Ми інвестуємо разом з вами. Власними грошима.',
    description,
    images: ['/og.jpg'],
  },
};

export const viewport: Viewport = {
  themeColor: '#1B3A5C',
  width: 'device-width',
  initialScale: 1,
};

// Analytics IDs come from env. The old code shipped placeholder IDs
// (G-XXXXXXXXXX), which loaded third-party scripts for nothing.
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk" className={`${serif.variable} ${sans.variable}`}>
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-navy focus:px-4 focus:py-2 focus:text-ivory"
        >
          Перейти до змісту
        </a>
        <Navigation />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <Analytics />

        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
            </Script>
          </>
        )}
        {META_PIXEL_ID && (
          <Script id="meta-pixel" strategy="afterInteractive">
            {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${META_PIXEL_ID}');fbq('track','PageView');`}
          </Script>
        )}
      </body>
    </html>
  );
}

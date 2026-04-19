import type { Metadata } from 'next';
import { Fraunces } from 'next/font/google';
import { DM_Sans } from 'next/font/google';
import { JetBrains_Mono } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { JsonLd } from '@/components/seo/JsonLd';
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from '@/lib/constants';
import '@/styles/globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Investment Research in Minutes | AI Market Pulse',
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: ['investment research', 'AI reports', 'stocks', 'futures', 'crypto', 'market analysis'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: 'Investment Research in Minutes | AI Market Pulse',
    description: SITE_DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/og-default.png`,
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Investment Research in Minutes | AI Market Pulse',
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}/og-default.png`],
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen flex flex-col">
        <JsonLd />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

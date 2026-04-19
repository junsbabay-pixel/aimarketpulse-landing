import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import HeroSection from '@/components/landing/HeroSection';
import FeaturesSection from '@/components/landing/FeaturesSection';
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from '@/lib/constants';

// Non-critical sections: lazy-loaded to reduce initial JS
const ReportSampleSection = dynamic(() => import('@/components/landing/ReportSampleSection'));
const HowItWorksSection = dynamic(() => import('@/components/landing/HowItWorksSection'));
const PricingSection = dynamic(() => import('@/components/landing/PricingSection').then((m) => ({ default: m.PricingSection })));
const FAQSection = dynamic(() => import('@/components/landing/FAQSection').then((m) => ({ default: m.FAQSection })));
const FinalCTASection = dynamic(() => import('@/components/landing/FinalCTASection').then((m) => ({ default: m.FinalCTASection })));

export const metadata: Metadata = {
  title: `AI Investment Research Reports | Stocks, Futures & Crypto | ${SITE_NAME}`,
  description:
    'AI-powered research reports for stocks, futures & crypto. Institutional-grade analysis with scenario modeling and 50+ sources. Start free.',
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: `AI Investment Research Reports | Stocks, Futures & Crypto | ${SITE_NAME}`,
    description:
      'AI-powered research reports for stocks, futures & crypto. Institutional-grade analysis with scenario modeling and 50+ sources. Start free.',
    url: SITE_URL,
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/og-home.png`,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — AI Investment Research`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `AI Investment Research Reports | Stocks, Futures & Crypto | ${SITE_NAME}`,
    description:
      'AI-powered research reports for stocks, futures & crypto. Institutional-grade analysis with scenario modeling and 50+ sources. Start free.',
    images: [`${SITE_URL}/og-home.png`],
  },
};

export default function LandingPage() {
  return (
    <main>
      <HeroSection />

      {/* Data Sources Bar */}
      <div className="py-6 px-4 bg-white border-b border-gray-100">
        <p className="text-center text-xs text-gray-400 tracking-wide">
          Data from: SEC EDGAR · CoinGecko · FRED · Yahoo Finance · CME Group · Bloomberg Terminal
        </p>
      </div>

      <ReportSampleSection />
      <HowItWorksSection />
      <FeaturesSection />
      <PricingSection />
      <FAQSection />
      <FinalCTASection />
    </main>
  );
}

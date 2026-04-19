export const SITE_NAME = 'AI Market Pulse';
export const SITE_DESCRIPTION =
  'Pick any ticker — stocks, crypto, or futures. Get a 10-page PDF analysis report with technicals, fundamentals, capital flows, scenario forecasts, and 50+ cited sources.';

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://aimarketpulse.com';

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

export const LANDING_SECTIONS = [
  'hero',
  'features',
  'report-sample',
  'how-it-works',
  'pricing',
  'faq',
  'final-cta',
] as const;

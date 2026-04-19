import { SITE_NAME, SITE_URL } from '@/lib/constants';

function JsonLdScript({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function JsonLd() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    sameAs: ['https://twitter.com/aimarketpulse', 'https://linkedin.com/company/aimarketpulse'],
    description: 'AI-powered research reports for stocks, futures & crypto.',
  };

  const webSiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
  };

  return (
    <>
      <JsonLdScript data={organizationSchema} />
      <JsonLdScript data={webSiteSchema} />
    </>
  );
}

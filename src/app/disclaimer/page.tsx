import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Investment Disclaimer',
  description: 'Important legal disclosures about our investment analysis reports.',
};

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)]">
      <Section className="py-20">
        <Container className="max-w-4xl">
          <Link href="/" className="text-primary-400 hover:text-primary-300 text-sm mb-8 inline-block">
            ← Back to Home
          </Link>
          <h1 className="font-heading font-bold text-3xl md:text-4xl text-text-primary mb-4">
            Investment Disclaimer
          </h1>
          <p className="text-text-tertiary text-sm mb-4">
            <strong>Effective Date:</strong> April 15, 2026
          </p>
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-12">
            <p className="text-red-400 text-sm font-medium">
              ⚠️ <strong>READ CAREFULLY BEFORE USING THIS SERVICE</strong>
            </p>
          </div>
          <div className="prose prose-invert max-w-none text-text-secondary leading-relaxed space-y-6 text-sm">
            <section>
              <h2>1. Not Investment Advice</h2>
              <p>The information provided on this platform is for <strong>informational and educational purposes only</strong> and does not constitute financial, investment, or legal advice.</p>
            </section>
            <section>
              <h2>2. Regulatory Compliance Status</h2>
              <p>AI Market Pulse operates as an <strong>information publishing platform</strong>. We are not registered as an Investment Adviser, Broker-Dealer, or Commodity Trading Advisor.</p>
            </section>
            <section>
              <h2>3. General Investment Risks</h2>
              <p>All investments involve risk, including the possible loss of principal. Past performance is not indicative of future results.</p>
            </section>
            <section>
              <h2>4. Contact Us</h2>
              <p>If you have questions about this Disclaimer, please <Link href="/contact" className="text-primary-400 hover:text-primary-300">contact us</Link>.</p>
            </section>
          </div>
        </Container>
      </Section>
    </main>
  );
}

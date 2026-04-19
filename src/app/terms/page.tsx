import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms and conditions governing your use of our investment analysis report services.',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)]">
      <Section className="py-20">
        <Container className="max-w-4xl">
          <Link href="/" className="text-primary-400 hover:text-primary-300 text-sm mb-8 inline-block">
            ← Back to Home
          </Link>
          <h1 className="font-heading font-bold text-3xl md:text-4xl text-text-primary mb-4">
            Terms of Service
          </h1>
          <p className="text-text-tertiary text-sm mb-12">
            <strong>Effective Date:</strong> April 15, 2026 &nbsp;|&nbsp; <strong>Last Updated:</strong> April 15, 2026
          </p>
          <div className="prose prose-invert max-w-none text-text-secondary leading-relaxed space-y-6 text-sm">
            <section>
              <h2>1. Acceptance of Terms</h2>
              <p>By accessing or using our investment analysis report services (&quot;Services&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, please do not use our Services.</p>
            </section>
            <section>
              <h2>2. Description of Services</h2>
              <p>We provide AI-powered investment analysis reports covering stocks, futures, and digital currencies. Our Services are delivered through our website and email newsletters. The reports are for informational and educational purposes only and do not constitute investment advice, financial advice, or any form of recommendation to buy, sell, or hold any security or digital asset.</p>
            </section>
            <section>
              <h2>3. User Accounts</h2>
              <p>To access certain features, you may be required to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
            </section>
            <section>
              <h2>4. Subscription and Payments</h2>
              <p>Our Services are offered on a subscription basis. Fees are non-refundable except as required by applicable law or as described in our refund policy.</p>
            </section>
            <section>
              <h2>5. Intellectual Property</h2>
              <p>All content, reports, analysis, graphics, and other materials provided through our Services are the intellectual property of AI Market Pulse or its licensors.</p>
            </section>
            <section>
              <h2>6. Use Restrictions</h2>
              <p>You agree not to redistribute, resell, or sublicense our reports, or use automated systems to scrape or extract data.</p>
            </section>
            <section>
              <h2>7. Disclaimer of Warranties</h2>
              <p>OUR SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND.</p>
            </section>
            <section>
              <h2>8. Limitation of Liability</h2>
              <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE 12 MONTHS PRECEDING THE CLAIM.</p>
            </section>
            <section>
              <h2>9. Contact Us</h2>
              <p>For questions about these Terms, please <Link href="/contact" className="text-primary-400 hover:text-primary-300">contact us</Link>.</p>
            </section>
          </div>
        </Container>
      </Section>
    </main>
  );
}

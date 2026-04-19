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
            &larr; Back to Home
          </Link>
          <h1 className="font-heading font-bold text-3xl md:text-4xl text-text-primary mb-4">
            Terms of Service
          </h1>
          <p className="text-text-tertiary text-sm mb-12">
            <strong>Effective Date:</strong> April 15, 2026 &nbsp;|&nbsp; <strong>Last Updated:</strong> April 15, 2026
          </p>
          <div className="prose prose-invert max-w-none text-text-secondary leading-relaxed space-y-6 text-sm">
            <section>
              <h2 className="font-heading font-semibold text-xl text-text-primary mt-10 mb-4">1. Acceptance of Terms</h2>
              <p>By accessing or using our investment analysis report services (&quot;Services&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, please do not use our Services.</p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl text-text-primary mt-10 mb-4">2. Description of Services</h2>
              <p>We provide AI-powered investment analysis reports covering stocks, futures, and digital currencies. Our Services are delivered through our website and email newsletters. The reports are for informational and educational purposes only and do not constitute investment advice, financial advice, or any form of recommendation to buy, sell, or hold any security or digital asset.</p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl text-text-primary mt-10 mb-4">3. User Accounts</h2>
              <p>To access certain features, you may be required to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must provide accurate and complete information during registration.</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>You must be at least 18 years of age to use our Services</li>
                <li>You may not share your account credentials with others</li>
                <li>You must notify us immediately of any unauthorized access</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl text-text-primary mt-10 mb-4">4. Subscription and Payments</h2>
              <p>Our Services are offered on a subscription basis. By subscribing, you agree to pay the applicable fees as described at the time of subscription. Fees are non-refundable except as required by applicable law or as described in our refund policy.</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Subscriptions auto-renew at the end of each billing period unless cancelled</li>
                <li>We reserve the right to change pricing with 30 days&apos; notice</li>
                <li>Free trial periods are limited to one per user</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl text-text-primary mt-10 mb-4">5. Intellectual Property</h2>
              <p>All content, reports, analysis, graphics, and other materials provided through our Services are the intellectual property of AI Market Pulse or its licensors. You may not reproduce, distribute, modify, or create derivative works from our content without prior written consent.</p>
              <p>You retain ownership of any data you provide to us.</p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl text-text-primary mt-10 mb-4">6. Use Restrictions</h2>
              <p>You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Use our Services for any unlawful purpose</li>
                <li>Redistribute, resell, or sublicense our reports</li>
                <li>Use automated systems to scrape or extract data</li>
                <li>Interfere with or disrupt our Services</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Use our Services to make investment decisions on behalf of third parties without authorization</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl text-text-primary mt-10 mb-4">7. Disclaimer of Warranties</h2>
              <p>OUR SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.</p>
              <p>We do not warrant that our Services will be uninterrupted, error-free, or free of harmful components. Past performance discussed in our reports is not indicative of future results.</p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl text-text-primary mt-10 mb-4">8. Limitation of Liability</h2>
              <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, BRANDNAME SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR INVESTMENT LOSSES, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF OUR SERVICES.</p>
              <p>OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE 12 MONTHS PRECEDING THE CLAIM.</p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl text-text-primary mt-10 mb-4">9. Indemnification</h2>
              <p>You agree to indemnify and hold harmless AI Market Pulse, its affiliates, officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from your use of our Services or your violation of these Terms.</p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl text-text-primary mt-10 mb-4">10. Governing Law</h2>
              <p>These Terms are governed by the laws of the State of Delaware, United States, without regard to conflict of law principles. Any disputes shall be resolved in the state or federal courts located in Delaware.</p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl text-text-primary mt-10 mb-4">11. Changes to Terms</h2>
              <p>We may modify these Terms at any time. Material changes will be communicated via email or website notice at least 30 days before the effective date. Continued use of our Services after changes constitutes acceptance.</p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl text-text-primary mt-10 mb-4">12. Contact Us</h2>
              <p>For questions about these Terms, please <Link href="/contact" className="text-primary-400 hover:text-primary-300">contact us</Link>.</p>
            </section>
          </div>
        </Container>
      </Section>
    </main>
  );
}

import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Learn how we collect, use, and protect your personal information. Your privacy matters to us.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)]">
      <Section className="py-20">
        <Container className="max-w-4xl">
          <Link href="/" className="text-primary-400 hover:text-primary-300 text-sm mb-8 inline-block">
            ← Back to Home
          </Link>
          <h1 className="font-heading font-bold text-3xl md:text-4xl text-text-primary mb-4">
            Privacy Policy
          </h1>
          <p className="text-text-tertiary text-sm mb-12">
            <strong>Effective Date:</strong> April 15, 2026 &nbsp;|&nbsp; <strong>Last Updated:</strong> April 15, 2026
          </p>
          <div className="prose prose-invert max-w-none text-text-secondary leading-relaxed space-y-6 text-sm">
            <section>
              <h2 className="font-heading font-semibold text-xl text-text-primary mt-10 mb-4">1. Introduction</h2>
              <p>AI Market Pulse (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our investment analysis report services, including our website, mobile applications, and related products (collectively, the &quot;Services&quot;).</p>
              <p>This Privacy Policy applies to all users of our Services, including users in the United States and, to the extent applicable, users in the European Union and other jurisdictions.</p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl text-text-primary mt-10 mb-4">2. Information We Collect</h2>
              <p><strong>Information You Directly Provide:</strong> Email address, password (hashed), subscription plan, payment information (processed by Stripe), customer support inquiries, and marketing preferences.</p>
              <p><strong>Information Automatically Collected:</strong> Device information (browser type, operating system), usage data (pages visited, reports accessed, click patterns), log data (IP address, access timestamps), and cookie data.</p>
              <p><strong>Information from Third Parties:</strong> Transaction confirmations from payment processors, aggregated usage statistics from analytics services, and publicly available financial information.</p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl text-text-primary mt-10 mb-4">3. How We Use Your Information</h2>
              <p>We use your information to create and maintain your account, process subscriptions and payments, deliver investment analysis reports, provide customer support, send service notifications, and improve our Services.</p>
              <p>We may also send marketing communications about our products and services. You can opt out at any time by clicking the &quot;unsubscribe&quot; link in any marketing email.</p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl text-text-primary mt-10 mb-4">4. How We Share Your Information</h2>
              <p><strong>We Do Not &quot;Sell&quot; Your Personal Information.</strong> We do not sell your personal information as defined under the CPRA.</p>
              <p>We share your information with trusted service providers: Stripe (payment processing), Amazon Web Services (cloud hosting), Google Analytics (website analytics), and SendGrid (email delivery). All service providers are contractually bound to protect your information.</p>
              <p>We may also disclose information when required by law, including responding to legal process and complying with regulatory requirements.</p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl text-text-primary mt-10 mb-4">5. Cookies and Tracking Technologies</h2>
              <p>We use cookies and similar tracking technologies. For detailed information, please see our <Link href="/cookie-policy" className="text-primary-400 hover:text-primary-300">Cookie Policy</Link>.</p>
              <p>Cookie categories: Strictly Necessary (no consent required), Performance/Analytics (consent required), Functional (consent required), and Marketing (consent required).</p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl text-text-primary mt-10 mb-4">6. Data Security</h2>
              <p>We implement industry-standard security measures including encryption (TLS/SSL, AES-256), strict access controls, regular security audits, and SOC 2 compliant cloud infrastructure. In the event of a data breach, we will notify affected users within 72 hours as required by applicable law.</p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl text-text-primary mt-10 mb-4">7. Your Privacy Rights (California Residents — CPRA)</h2>
              <p>If you are a California resident, you have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Know</strong> what personal information we collect about you</li>
                <li><strong>Delete</strong> your personal information (subject to certain exceptions)</li>
                <li><strong>Correct</strong> inaccurate personal information</li>
                <li><strong>Portability</strong> — receive your data in a portable format</li>
                <li><strong>Opt Out</strong> of the &quot;sale&quot; or &quot;sharing&quot; of your personal information</li>
                <li><strong>Non-Discrimination</strong> — we will not discriminate against you for exercising your rights</li>
              </ul>
              <p className="mt-4">To submit a request, email us with the appropriate subject line. We will respond within 45 calendar days.</p>
            </section>

            <section id="do-not-sell">
              <h2 className="font-heading font-semibold text-xl text-text-primary mt-10 mb-4">8. Do Not Sell or Share My Personal Information</h2>
              <p>We do not sell your personal information. However, if you wish to limit the sharing of your personal information with our service providers for cross-context behavioral advertising, you may submit a request by emailing us or using the &quot;Do Not Sell or Share My Personal Information&quot; link in the website footer.</p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl text-text-primary mt-10 mb-4">9. Your Privacy Rights (EU/EEA Residents — GDPR)</h2>
              <p>If you are located in the EEA, you have rights under GDPR including: Access, Rectification, Erasure (&quot;Right to be Forgotten&quot;), Restriction, Portability, Objection, and Withdrawal of Consent. You may lodge a complaint with your local data protection authority.</p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl text-text-primary mt-10 mb-4">10. Data Retention</h2>
              <p>Active account data is retained for the duration of your account plus 30 days. Transaction records are retained for 7 years for tax compliance. Security logs are retained for 90 days. Anonymous/aggregated data may be retained indefinitely.</p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl text-text-primary mt-10 mb-4">11. Financial Information Disclaimer</h2>
              <p>We provide investment analysis reports as an information publishing service. We are not registered as an Investment Adviser, Broker-Dealer, or Commodity Trading Advisor. The information we provide is general and non-personalized, for informational purposes only, and does not constitute investment advice.</p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl text-text-primary mt-10 mb-4">12. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. Material changes will be notified via email or a prominent website notice at least 30 days before the effective date. Your continued use after modifications indicates acceptance.</p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl text-text-primary mt-10 mb-4">13. Contact Us</h2>
              <p>If you have questions about this Privacy Policy, please <Link href="/contact" className="text-primary-400 hover:text-primary-300">contact us</Link>.</p>
            </section>
          </div>
        </Container>
      </Section>
    </main>
  );
}

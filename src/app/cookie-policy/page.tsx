import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Learn about how we use cookies and similar tracking technologies on our platform.',
};

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)]">
      <Section className="py-20">
        <Container className="max-w-4xl">
          <Link href="/" className="text-primary-400 hover:text-primary-300 text-sm mb-8 inline-block">
            &larr; Back to Home
          </Link>
          <h1 className="font-heading font-bold text-3xl md:text-4xl text-text-primary mb-4">
            Cookie Policy
          </h1>
          <p className="text-text-tertiary text-sm mb-12">
            <strong>Effective Date:</strong> April 15, 2026 &nbsp;|&nbsp; <strong>Last Updated:</strong> April 15, 2026
          </p>
          <div className="prose prose-invert max-w-none text-text-secondary leading-relaxed space-y-6 text-sm">
            <section>
              <h2 className="font-heading font-semibold text-xl text-text-primary mt-10 mb-4">1. What Are Cookies?</h2>
              <p>Cookies are small text files stored on your device when you visit our website. They help us provide a better user experience, understand how our site is used, and deliver relevant content.</p>
              <p>We also use similar technologies including web beacons, local storage, session storage, and fingerprinting technologies. For simplicity, we refer to all of these as &quot;Cookies.&quot;</p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl text-text-primary mt-10 mb-4">2. How We Use Cookies</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 pr-4 text-text-primary font-medium">Category</th>
                      <th className="text-left py-3 pr-4 text-text-primary font-medium">Purpose</th>
                      <th className="text-left py-3 text-text-primary font-medium">Consent</th>
                    </tr>
                  </thead>
                  <tbody className="text-text-secondary">
                    <tr className="border-b border-border/50">
                      <td className="py-3 pr-4">Strictly Necessary</td>
                      <td className="py-3 pr-4">Essential for website functionality (authentication, security, session management)</td>
                      <td className="py-3">Not required</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 pr-4">Performance / Analytics</td>
                      <td className="py-3 pr-4">Google Analytics — understand usage patterns, improve performance</td>
                      <td className="py-3">Required</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 pr-4">Functional</td>
                      <td className="py-3 pr-4">Remember your preferences and settings</td>
                      <td className="py-3">Required</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4">Marketing</td>
                      <td className="py-3 pr-4">Advertising and retargeting (if applicable)</td>
                      <td className="py-3">Required</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl text-text-primary mt-10 mb-4">3. Third-Party Cookies</h2>
              <p>We use the following third-party services that may set cookies:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Google Analytics:</strong> Website analytics (_ga, _ga_* cookies)</li>
                <li><strong>Vercel Analytics:</strong> Performance monitoring</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl text-text-primary mt-10 mb-4">4. Managing Your Preferences</h2>
              <p>You can manage your cookie preferences by:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Using our Cookie Consent Banner (displayed on your first visit)</li>
                <li>Adjusting your browser settings (most browsers allow you to block or delete cookies)</li>
                <li>Visiting <a href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300">aboutads.info</a> to opt out of interest-based advertising</li>
              </ul>
              <p className="mt-4">Please note that disabling certain cookies may affect the functionality of our website.</p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl text-text-primary mt-10 mb-4">5. Updates to This Policy</h2>
              <p>We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated effective date. Your continued use of our website after changes indicates acceptance.</p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl text-text-primary mt-10 mb-4">6. Contact Us</h2>
              <p>If you have questions about our use of cookies, please <Link href="/contact" className="text-primary-400 hover:text-primary-300">contact us</Link>. For more information about how we handle your personal data, please see our <Link href="/privacy" className="text-primary-400 hover:text-primary-300">Privacy Policy</Link>.</p>
            </section>
          </div>
        </Container>
      </Section>
    </main>
  );
}

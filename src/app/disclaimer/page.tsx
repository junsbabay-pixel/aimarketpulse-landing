import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Investment Disclaimer',
  description: 'Important legal disclosures about our investment analysis reports. Please read carefully before using our services.',
};

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)]">
      <Section className="py-20">
        <Container className="max-w-4xl">
          <Link href="/" className="text-primary-400 hover:text-primary-300 text-sm mb-8 inline-block">
            &larr; Back to Home
          </Link>
          <h1 className="font-heading font-bold text-3xl md:text-4xl text-text-primary mb-4">
            Investment Disclaimer
          </h1>
          <p className="text-text-tertiary text-sm mb-4">
            <strong>Effective Date:</strong> April 15, 2026 &nbsp;|&nbsp; <strong>Last Updated:</strong> April 15, 2026
          </p>
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-12">
            <p className="text-red-400 text-sm font-medium">
              ⚠️ <strong>READ CAREFULLY BEFORE USING THIS SERVICE</strong>
            </p>
            <p className="text-text-secondary text-sm mt-2">
              By accessing and using our investment analysis reports and related services, you acknowledge that you have read, understood, and agree to be bound by this Disclaimer.
            </p>
          </div>
          <div className="prose prose-invert max-w-none text-text-secondary leading-relaxed space-y-6 text-sm">
            <section>
              <h2 className="font-heading font-semibold text-xl text-text-primary mt-10 mb-4">1. Not Investment Advice</h2>
              <p>The information provided on this platform is for <strong>informational and educational purposes only</strong> and does not constitute financial, investment, or legal advice. Nothing on this platform should be construed as a recommendation to buy, sell, or hold any security, digital asset, or financial instrument.</p>
              <p>AI Market Pulse is not a registered investment adviser, broker-dealer, or financial consultant with the SEC or any state securities authority. All investment decisions are solely your responsibility.</p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl text-text-primary mt-10 mb-4">2. Regulatory Compliance Status</h2>
              <p>AI Market Pulse operates as an <strong>information publishing platform</strong> under the information publishing exemption. We are not:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Registered as an Investment Adviser under the Investment Advisers Act of 1940</li>
                <li>Registered as a Broker-Dealer under the Securities Exchange Act of 1934</li>
                <li>Registered as a Commodity Trading Advisor (CTA) under the Commodity Exchange Act</li>
                <li>A member of FINRA, SIPC, or any self-regulatory organization</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl text-text-primary mt-10 mb-4">3. General Investment Risks</h2>
              <p>All investments involve risk, including the possible loss of principal. The value of investments and the income derived from them can go down as well as up. You may not get back the amount you invested.</p>
              <p>Past performance is not indicative of future results. Historical data, backtested results, and hypothetical performance presented in our reports do not guarantee future performance.</p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl text-text-primary mt-10 mb-4">4. Cryptocurrency and Digital Asset Risks</h2>
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 my-4">
                <p className="text-yellow-400 text-sm">
                  <strong>Cryptocurrency Disclosure:</strong> Digital assets, including cryptocurrencies and tokens, are highly volatile and speculative. They are not legal tender and are not backed by any government. You should be prepared to lose your entire investment. Regulatory treatment of digital assets varies by jurisdiction and may change without notice.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl text-text-primary mt-10 mb-4">5. Futures and Derivatives Risks</h2>
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 my-4">
                <p className="text-yellow-400 text-sm">
                  <strong>Futures and Derivatives Disclosure:</strong> Trading futures, options, and other derivatives involves substantial risk of loss and is not suitable for all investors. You may lose more than your initial investment. Past performance is not indicative of future results. Please read the CFTC&apos;s risk disclosure at cftc.gov before engaging in any futures or options trading.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl text-text-primary mt-10 mb-4">6. No Guarantee of Results</h2>
              <p>AI Market Pulse does not guarantee the accuracy, completeness, or timeliness of any data, analysis, or reports presented on this platform. Market data may be delayed. Analysis and opinions expressed in our reports are subject to change without notice.</p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl text-text-primary mt-10 mb-4">7. Third-Party Content</h2>
              <p>Our reports may reference or include data from third-party sources including Bloomberg, Reuters, Morningstar, and others. We do not independently verify all third-party data and are not responsible for its accuracy or completeness.</p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl text-text-primary mt-10 mb-4">8. Limitation of Liability</h2>
              <p>IN NO EVENT SHALL BRANDNAME, ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF OUR SERVICES, INCLUDING BUT NOT LIMITED TO INVESTMENT LOSSES.</p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl text-text-primary mt-10 mb-4">9. Contact Us</h2>
              <p>If you have questions about this Disclaimer, please <Link href="/contact" className="text-primary-400 hover:text-primary-300">contact us</Link>.</p>
            </section>
          </div>
        </Container>
      </Section>
    </main>
  );
}

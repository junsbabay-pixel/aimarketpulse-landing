import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Learn about how we use cookies and similar tracking technologies.',
};

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)]">
      <Section className="py-20">
        <Container className="max-w-4xl">
          <Link href="/" className="text-primary-400 hover:text-primary-300 text-sm mb-8 inline-block">
            ← Back to Home
          </Link>
          <h1 className="font-heading font-bold text-3xl md:text-4xl text-text-primary mb-4">
            Cookie Policy
          </h1>
          <p className="text-text-tertiary text-sm mb-12">
            <strong>Effective Date:</strong> April 15, 2026
          </p>
          <div className="prose prose-invert max-w-none text-text-secondary leading-relaxed space-y-6 text-sm">
            <section>
              <h2>1. What Are Cookies?</h2>
              <p>Cookies are small text files stored on your device when you visit our website.</p>
            </section>
            <section>
              <h2>2. How We Use Cookies</h2>
              <p>We use strictly necessary, performance/analytics, functional, and marketing cookies.</p>
            </section>
            <section>
              <h2>3. Managing Your Preferences</h2>
              <p>You can manage your cookie preferences through our Cookie Consent Banner or browser settings.</p>
            </section>
            <section>
              <h2>4. Contact Us</h2>
              <p>For questions, please <Link href="/contact" className="text-primary-400 hover:text-primary-300">contact us</Link>.</p>
            </section>
          </div>
        </Container>
      </Section>
    </main>
  );
}

'use client';

import { Container } from '@/components/ui/Container';
import { Star } from 'lucide-react';
import { AnimateInView } from '@/components/shared/AnimateInView';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Portfolio Manager',
    company: 'Horizon Capital',
    quote: 'The AI-generated reports have cut our research time by 80%. The accuracy of price targets has been remarkable.',
    avatar: 'SC',
  },
  {
    name: 'Marcus Johnson',
    role: 'Independent Trader',
    company: 'Self-employed',
    quote: "I've tried dozens of research tools. This is the only one that delivers institutional-quality analysis at a price individual investors can afford.",
    avatar: 'MJ',
  },
  {
    name: 'Elena Petrova',
    role: 'Chief Investment Officer',
    company: 'Nordic Wealth Group',
    quote: 'We rolled this out to our entire analyst team. The risk scoring alone has paid for the subscription ten times over.',
    avatar: 'EP',
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-28">
      <Container>
        <AnimateInView className="text-center mb-16">
          <span className="text-primary-400 text-sm font-medium tracking-widest uppercase">
            Testimonials
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-5xl mt-3">
            Trusted by 50,000+ Investors
          </h2>
        </AnimateInView>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <AnimateInView key={t.name} delay={i * 100} className="rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, si) => (
                  <Star key={si} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-text-secondary leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-400 font-semibold text-sm">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-medium text-sm">{t.name}</p>
                  <p className="text-text-tertiary text-xs">{t.role}, {t.company}</p>
                </div>
              </div>
            </AnimateInView>
          ))}
        </div>
      </Container>
    </section>
  );
}

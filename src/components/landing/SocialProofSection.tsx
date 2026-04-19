'use client';

import { Container } from '@/components/ui/Container';
import { Users, FileText, Target, TrendingUp } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { AnimateInView } from '@/components/shared/AnimateInView';

const stats = [
  { icon: Users, value: 50000, suffix: '+', label: 'Active Investors' },
  { icon: FileText, value: 12000, suffix: '+', label: 'Reports Generated' },
  { icon: Target, value: 94, suffix: '%', label: 'Accuracy Rate' },
  { icon: TrendingUp, value: 180, suffix: '%', label: 'Avg. Return Outperformance' },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="text-3xl md:text-4xl font-heading font-bold text-text-primary">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export function SocialProofSection() {
  return (
    <section id="social-proof" className="border-y border-border bg-surface-secondary">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 md:py-16">
          {stats.map((stat, i) => (
            <AnimateInView key={stat.label} delay={i * 100} className="text-center">
              <stat.icon className="w-6 h-6 text-primary-500 mx-auto mb-3" />
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              <p className="text-text-tertiary text-sm mt-1">{stat.label}</p>
            </AnimateInView>
          ))}
        </div>
      </Container>
    </section>
  );
}

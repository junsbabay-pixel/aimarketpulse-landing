import { cn } from '@/lib/utils';
import type { CSSProperties } from 'react';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties;
}

export function Section({ id, children, className, style }: SectionProps) {
  return (
    <section id={id} className={cn('py-20 md:py-24', className)} style={style}>
      {children}
    </section>
  );
}

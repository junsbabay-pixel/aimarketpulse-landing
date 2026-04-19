'use client';

import { useInView } from '@/lib/hooks';
import { CSSProperties, ReactNode } from 'react';

type AnimType = 'fade-in-up' | 'fade-in-up-30' | 'fade-in' | 'fade-in-left' | 'fade-in-right';

const animClasses: Record<AnimType, string> = {
  'fade-in-up': 'animate-fade-in-up',
  'fade-in-up-30': 'animate-fade-in-up-30',
  'fade-in': 'animate-fade-in',
  'fade-in-left': 'animate-fade-in-left',
  'fade-in-right': 'animate-fade-in-right',
};

const delayClasses: Record<number, string> = {
  100: 'delay-100', 200: 'delay-200', 300: 'delay-300', 400: 'delay-400',
  500: 'delay-500', 600: 'delay-600', 700: 'delay-700', 800: 'delay-800',
};

interface AnimateInViewProps {
  children: ReactNode;
  anim?: AnimType;
  delay?: number;
  className?: string;
  style?: CSSProperties;
  margin?: string;
  as?: keyof JSX.IntrinsicElements;
}

export function AnimateInView({ children, anim = 'fade-in-up', delay, className = '', style, margin, as: Tag = 'div', ...rest }: AnimateInViewProps) {
  const { ref, isInView } = useInView({ margin });
  const animClass = isInView ? animClasses[anim] : 'opacity-0';
  const delayClass = delay && isInView ? delayClasses[delay] ?? '' : '';

  return (
    // @ts-expect-error dynamic tag
    <Tag ref={ref} className={`${animClass} ${delayClass} ${className}`} style={style} {...rest}>
      {children}
    </Tag>
  );
}

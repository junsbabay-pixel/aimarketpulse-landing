'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Lightweight IntersectionObserver hook to replace framer-motion whileInView.
 * Triggers once when element enters viewport.
 */
export function useInView(options?: { margin?: string; threshold?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: options?.margin ?? '-50px', threshold: options?.threshold ?? 0 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options?.margin, options?.threshold]);

  return { ref, isInView };
}

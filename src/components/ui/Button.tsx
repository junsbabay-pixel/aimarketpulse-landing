import type { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-gradient-to-r from-[#00D4AA] to-[#00B4D8] text-[#0A0F1E] font-semibold shadow-glow hover:shadow-glow-lg',
  secondary:
    'glass glass-hover text-text-primary border border-border hover:border-border-hover',
  ghost:
    'text-text-secondary hover:text-text-primary hover:bg-white/5',
};

export function Button({ variant = 'primary', className, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center min-h-[44px] min-w-[44px] px-6 py-3 rounded-lg font-medium transition-all duration-normal ease-out-expo focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500',
        variantStyles[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

import { cn } from '@/lib/utils';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'wide' | 'narrow';
}

const sizeMap = {
  default: 'max-w-container',
  wide: 'max-w-container-wide',
  narrow: 'max-w-container-narrow',
};

export function Container({ children, className, size = 'default' }: ContainerProps) {
  return (
    <div className={cn('mx-auto w-full px-6 lg:px-[var(--container-padding)]', sizeMap[size], className)}>
      {children}
    </div>
  );
}

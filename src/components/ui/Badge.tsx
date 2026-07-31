import type { ReactNode } from 'react';

export type BadgeProps = {
  readonly children: ReactNode;
  readonly tone?: 'burgundy' | 'gold' | 'success' | 'neutral';
  readonly className?: string;
};

const tones = {
  burgundy: 'bg-burgundy-900 text-cream-50',
  gold: 'bg-gold-200 text-burgundy-950',
  success: 'bg-success text-cream-50',
  neutral: 'bg-cream-200 text-ink-700',
} as const;

export function Badge({ children, tone = 'burgundy', className = '' }: BadgeProps) {
  return (
    <span className={`inline-flex min-h-7 items-center rounded-full px-3 py-1 font-body text-xs font-bold uppercase tracking-[0.12em] ${tones[tone]} ${className}`}>
      {children}
    </span>
  );
}


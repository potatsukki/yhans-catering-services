import type { ReactNode } from 'react';

import { formatPhp } from '../../utils/formatCurrency';

export { formatPhp } from '../../utils/formatCurrency';

export type PriceProps = {
  readonly amount: number;
  readonly suffix?: ReactNode;
  readonly className?: string;
};

export function Price({ amount, suffix, className = '' }: PriceProps) {
  return (
    <span className={`font-display text-3xl font-bold leading-none text-burgundy-900 ${className}`}>
      {formatPhp(amount)}
      {suffix ? <span className="ml-1 font-body text-sm font-semibold text-ink-700">{suffix}</span> : null}
    </span>
  );
}

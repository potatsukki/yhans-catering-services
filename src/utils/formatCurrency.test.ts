import { describe, expect, it } from 'vitest';

import { formatPhp } from './formatCurrency';

describe('formatPhp', () => {
  it.each([
    [0, '₱0'],
    [1000, '₱1,000'],
    [30000, '₱30,000'],
    [75000, '₱75,000'],
  ])('formats %s as %s', (amount, expected) => {
    expect(formatPhp(amount)).toBe(expected);
  });
});

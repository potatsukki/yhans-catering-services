import { describe, expect, it } from 'vitest';

import {
  calculateGrazingEstimate,
  clampGuestCount,
  GRAZING_MAX_GUESTS,
  GRAZING_MIN_GUESTS,
} from './calculateGrazingEstimate';

describe('grazing estimate calculations', () => {
  it.each([
    [50, 50000],
    [75, 75000],
    [100, 100000],
  ])('calculates %s guests as ₱%s', (guestCount, expected) => {
    expect(calculateGrazingEstimate(guestCount)).toBe(expected);
  });

  it('clamps below-minimum and above-maximum values', () => {
    expect(clampGuestCount(49)).toBe(GRAZING_MIN_GUESTS);
    expect(calculateGrazingEstimate(49)).toBe(50000);
    expect(clampGuestCount(601)).toBe(GRAZING_MAX_GUESTS);
    expect(calculateGrazingEstimate(601)).toBe(600000);
  });

  it('falls back to the minimum for invalid values', () => {
    expect(clampGuestCount(Number.NaN)).toBe(GRAZING_MIN_GUESTS);
    expect(clampGuestCount(Number.POSITIVE_INFINITY)).toBe(GRAZING_MIN_GUESTS);
    expect(calculateGrazingEstimate(Number.NaN)).toBe(50000);
  });
});

import { BUSINESS } from '../../data/business';
import { GRAZING_PACKAGES } from '../../data/packages';

export const GRAZING_MIN_GUESTS = GRAZING_PACKAGES[0].minimumGuests;
export const GRAZING_MAX_GUESTS = BUSINESS.guestCapacity[1];
export const GRAZING_PRICE_PER_GUEST = GRAZING_PACKAGES[0].pricePerGuestPhp;

export function clampGuestCount(value: number): number {
  if (!Number.isFinite(value)) {
    return GRAZING_MIN_GUESTS;
  }

  return Math.min(GRAZING_MAX_GUESTS, Math.max(GRAZING_MIN_GUESTS, Math.round(value)));
}

export function calculateGrazingEstimate(guestCount: number): number {
  return clampGuestCount(guestCount) * GRAZING_PRICE_PER_GUEST;
}

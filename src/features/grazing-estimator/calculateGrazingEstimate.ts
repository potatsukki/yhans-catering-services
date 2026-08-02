import { BUSINESS } from '../../data/business';
import { GRAZING_TABLE_OFFER } from '../../data/packages';

export const GRAZING_MIN_GUESTS = GRAZING_TABLE_OFFER.minimumGuests;
export const GRAZING_MAX_GUESTS = BUSINESS.guestCapacity[1];
export const GRAZING_PRICE_PER_GUEST = GRAZING_TABLE_OFFER.pricePerGuestPhp;

export function clampGuestCount(value: number): number {
  if (!Number.isFinite(value)) {
    return GRAZING_MIN_GUESTS;
  }

  return Math.min(GRAZING_MAX_GUESTS, Math.max(GRAZING_MIN_GUESTS, Math.round(value)));
}

export function calculateGrazingEstimate(guestCount: number): number {
  return clampGuestCount(guestCount) * GRAZING_PRICE_PER_GUEST;
}

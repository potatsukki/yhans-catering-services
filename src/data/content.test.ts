import { describe, expect, it } from 'vitest';

import { BUSINESS, CONTACT_LINKS } from './business';
import { BOOKING_POLICY_NOTE, BOOKING_STEPS } from './booking';
import {
  FOOD_TRAY,
  GRAZING_INCLUSIONS,
  GRAZING_PACKAGES,
  PACKED_MEAL_PRICE_RANGE,
  PACKED_MEALS,
  REGULAR_SHARED_INCLUSIONS,
  REGULAR_PACKAGES,
} from './packages';

describe('confirmed catering content', () => {
  it('keeps the three regular packages at the confirmed fixed price and capacity', () => {
    expect(REGULAR_PACKAGES).toHaveLength(3);
    expect(REGULAR_PACKAGES.every((item) => item.pricePhp === 30000)).toBe(true);
    expect(REGULAR_PACKAGES.every((item) => item.guestCapacity === 50)).toBe(true);
    expect(REGULAR_PACKAGES.every((item) => item.dishes.length === 5)).toBe(true);
  });

  it('keeps all four grazing packages at the confirmed per-guest rate and minimum', () => {
    expect(GRAZING_PACKAGES).toHaveLength(4);
    expect(GRAZING_PACKAGES.every((item) => item.pricePerGuestPhp === 1000)).toBe(true);
    expect(GRAZING_PACKAGES.every((item) => item.minimumGuests === 50)).toBe(true);
    expect(GRAZING_PACKAGES.every((item) => item.dishes.length === 7)).toBe(true);
    expect(GRAZING_PACKAGES.find((item) => item.isBestSeller)?.bestSellerDish).toBe('Pork Menudo');
    expect(GRAZING_INCLUSIONS.fruits).toContain('Seasonal fruits');
    expect(GRAZING_INCLUSIONS.savoryItems).toContain('Camembert Cheese');
  });

  it('keeps packed meals and food trays free of invented prices', () => {
    expect(PACKED_MEALS).toHaveLength(3);
    expect(PACKED_MEAL_PRICE_RANGE).toEqual([250, 300]);
    expect(PACKED_MEALS[0].sampleMenu).toEqual(['Rice', 'Egg', 'Hotdog']);
    expect(PACKED_MEALS[1].sampleMenu).toEqual(['One piece of chicken', 'Vegetables', 'Pancit']);
    expect(FOOD_TRAY.price).toBeUndefined();
    expect(FOOD_TRAY.description).not.toMatch(/₱\s*\d/);
  });

  it('preserves the regular inclusions and confirmed booking payment values', () => {
    expect(REGULAR_SHARED_INCLUSIONS).toEqual([
      'One dessert',
      'Salad bar',
      'Iced tea',
      'Rice',
      'Soup',
      'Tables and chairs',
      'Buffet setup',
    ]);
    expect(BOOKING_STEPS).toHaveLength(5);
    expect(BOOKING_STEPS[3].description).toContain('70% down payment');
    expect(BOOKING_STEPS[4].description).toContain('three days before the event');
    expect(BOOKING_POLICY_NOTE).toMatch(/signed catering contract/);
  });

  it('preserves the confirmed contact destinations', () => {
    expect(CONTACT_LINKS.map((link) => link.href)).toEqual([
      'https://www.facebook.com/share/1EnpK8EnM1/',
      'mailto:marianne03natanawan@gmail.com',
      'tel:+639566755148',
      'tel:+639671195792',
    ]);
    expect(BUSINESS.serviceAreas).toEqual(['Quezon City', 'Caloocan', 'Manila', 'Nearby Metro Manila areas']);
    expect(BUSINESS.paymentMethods).toEqual(['Cash', 'Bank transfer', 'GCash']);
  });

  it('contains no fake ratings, testimonials, or invented review claims', () => {
    const serializedContent = JSON.stringify({ BUSINESS, REGULAR_PACKAGES, GRAZING_PACKAGES, PACKED_MEALS, FOOD_TRAY });
    expect(serializedContent).not.toMatch(/testimonial|customer review|rating|five stars|\b[1-5]\.0\s*\/\s*5/i);
  });
});

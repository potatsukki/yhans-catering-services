import { describe, expect, it } from 'vitest';

import { isSafeExternalHref, normalizePhoneHref } from './links';

describe('link utilities', () => {
  it('normalizes Philippine phone numbers to tel links', () => {
    expect(normalizePhoneHref('0956 675 5148')).toBe('tel:+639566755148');
    expect(normalizePhoneHref('+639671195792')).toBe('tel:+639671195792');
    expect(normalizePhoneHref('(0956) 675-5148')).toBe('tel:+639566755148');
    expect(normalizePhoneHref('956 675 5148')).toBe('tel:+639566755148');
  });

  it('accepts HTTPS external links and rejects unsafe schemes', () => {
    expect(isSafeExternalHref('https://www.facebook.com/share/1EnpK8EnM1/')).toBe(true);
    expect(isSafeExternalHref('http://example.com')).toBe(true);
    expect(isSafeExternalHref('javascript:alert(1)')).toBe(false);
    expect(isSafeExternalHref('/about-contact')).toBe(false);
  });
});

import type { NavigationItem } from '../types/content';

import { FACEBOOK_URL } from './business';

export const NAVIGATION_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Packages & Services', href: '/packages' },
  { label: 'About & Contact', href: '/about-contact' },
] as const satisfies readonly NavigationItem[];

export const PRIMARY_CTA = {
  label: 'Request a Quote',
  href: FACEBOOK_URL,
  external: true,
} as const;

export const FACEBOOK_CTA = {
  label: 'Message Us on Facebook',
  href: FACEBOOK_URL,
  external: true,
} as const;

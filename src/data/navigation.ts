import type { NavigationItem } from '../types/content';

import { FACEBOOK_URL } from './business';

export const NAVIGATION_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Packages & Services', href: '/packages' },
  { label: 'Events', href: '/events' },
  { label: 'About & Contact', href: '/about-contact' },
] as const satisfies readonly NavigationItem[];

export const DESKTOP_NAVIGATION_GROUPS = [
  {
    label: 'Packages & Services',
    href: '/packages',
    items: [
      { label: 'Packages & Services', href: '/packages#packages-overview' },
      { label: 'Customize Your Catering Menu', href: '/packages#regular-packages' },
      { label: 'Grazing Table', href: '/packages#grazing-table' },
      { label: 'Packed Meals', href: '/packages#packed-meals' },
      { label: 'Food Trays', href: '/packages#food-trays' },
      { label: 'Additional Event Services', href: '/packages#additional-services' },
      { label: 'Menu customization', href: '/packages#customization-note' },
    ],
  },
  {
    label: 'Events',
    href: '/events',
    items: [
      { label: 'Our Events', href: '/events#events-overview' },
      { label: 'Events Gallery', href: '/events#events-gallery' },
    ],
  },
  {
    label: 'About & Contact',
    href: '/about-contact',
    items: [
      { label: 'About & Contact', href: '/about-contact#about-overview' },
      { label: 'Our Story', href: '/about-contact#story' },
      { label: 'What We Cater', href: '/about-contact#what-we-cater' },
      { label: 'Service Areas', href: '/about-contact#service-areas' },
      { label: 'Booking Process', href: '/about-contact#booking-process' },
      { label: 'Contact Us', href: '/about-contact#contact' },
      { label: 'Where to Find Us', href: '/about-contact#where-to-find-us' },
      { label: 'Helpful Information', href: '/about-contact#helpful-information' },
    ],
  },
] as const;

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

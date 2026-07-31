import type { AboutHighlight, BusinessProfile, ContactLink, HomeTrustPoint } from '../types/content';

export const CONTACT_LINKS = [
  {
    label: 'Message Us on Facebook',
    href: 'https://www.facebook.com/share/1EnpK8EnM1/',
    kind: 'facebook',
    external: true,
  },
  {
    label: 'Send an Email',
    href: 'mailto:marianne03natanawan@gmail.com',
    kind: 'email',
  },
  {
    label: 'Call Us Today',
    href: 'tel:+639566755148',
    kind: 'phone',
  },
  {
    label: 'Call or Viber 2',
    href: 'tel:+639671195792',
    kind: 'phone',
  },
] as const satisfies readonly ContactLink[];

export const BUSINESS = {
  name: "Yhan's Catering Services",
  facebookDisplayName: "Yhan's Catering Service Official",
  owner: 'Marianne P. Natanawan',
  role: 'Chef / Proprietor',
  established: 2010,
  tagline: 'Making Every Celebration Delicious',
  registration: 'DTI and BIR registered',
  guestCapacity: [50, 600],
  address:
    'Block 19, Lot 11, Dahlia Extension Street, BIR Village, West Fairview, Quezon City 1118, Philippines',
  hours: 'Daily, 8:00 AM to 7:00 PM',
  serviceAreas: [
    'Quezon City',
    'Caloocan',
    'Manila',
    'Nearby Metro Manila areas',
  ],
  paymentMethods: ['Cash', 'Bank transfer', 'GCash'],
  contacts: CONTACT_LINKS,
} as const satisfies BusinessProfile;

export const PHONE_NUMBERS = ['0956 675 5148', '0967 119 5792'] as const;

export const FACEBOOK_URL = 'https://www.facebook.com/share/1EnpK8EnM1/';
export const EMAIL_ADDRESS = 'marianne03natanawan@gmail.com';

export const HOME_TRUST_POINTS = [
  {
    id: 'established',
    title: `Trusted since ${BUSINESS.established}`,
    description: `Established in ${BUSINESS.established}.`,
  },
  {
    id: 'presentation',
    title: 'Professional presentation',
    description: 'Improved equipment, presentation, hygiene standards, and event setup.',
  },
  {
    id: 'flexible-options',
    title: 'Flexible package options',
    description: 'Regular packages, grazing packages, food trays, and packed meals are available.',
  },
  {
    id: 'private-corporate',
    title: 'Private and corporate events',
    description: 'Serving private celebrations, business functions, and group events.',
  },
  {
    id: 'registration',
    title: BUSINESS.registration,
    description: BUSINESS.registration,
  },
] as const satisfies readonly HomeTrustPoint[];

export const ABOUT_HIGHLIGHTS = [
  {
    id: 'established',
    title: 'Established in 2010',
    description: 'Serving celebrations and group events since 2010.',
    icon: 'calendar',
  },
  {
    id: 'private-corporate',
    title: 'Trusted for Private & Corporate Events',
    description: 'Private celebrations, business functions, and group events.',
    icon: 'users',
  },
  {
    id: 'guest-capacity',
    title: 'Guest Capacity: 50–600',
    description: 'Catered events for 50 to 600 guests.',
    icon: 'people',
  },
  {
    id: 'registration',
    title: 'DTI & BIR Registered',
    description: BUSINESS.registration,
    icon: 'badge',
  },
] as const satisfies readonly AboutHighlight[];

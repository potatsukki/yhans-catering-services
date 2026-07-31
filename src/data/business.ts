import type { AboutHighlight, BusinessProfile, ContactLink, HomeTrustPoint } from '../types/content';

export const FACEBOOK_URL = 'https://www.facebook.com/share/1EnpK8EnM1/';
export const EMAIL_ADDRESS = 'marianne03natanawan@gmail.com';

export const LOCATION_DETAILS = {
  address: 'Block 19, Lot 11, Dahlia Extension Street, BIR Village, West Fairview, Quezon City 1118, Philippines',
  addressLines: [
    'Block 19, Lot 11, Dahlia Extension Street',
    'BIR Village, West Fairview',
    'Quezon City 1118, Philippines',
  ],
  hours: 'Daily, 8:00 AM–7:00 PM',
  latitude: 14.6995033,
  longitude: 121.0536876,
  mapsPageUrl: 'https://www.google.com/maps/place/Natanawan+Residence/@14.6995046,121.0530439,19z/data=!3m1!4b1!4m6!3m5!1s0x3397b100609ab79b:0x8660534f6a53f2a!8m2!3d14.6995033!4d121.0536876!16s%2Fg%2F11ybc4ythr?entry=ttu&g_ep=EgoyMDI2MDcyOS4wIKXMDSoASAFQAw%3D%3D',
  mapsEmbedUrl: 'https://www.google.com/maps?q=14.6995033,121.0536876&z=18&output=embed',
  visitNote: "Please message or call before visiting so Yhan's Catering Services can confirm availability.",
  foodTastingNote:
    'Not sure which dishes to choose? Customers may request a complimentary tasting of selected menu items before confirming their event. Tastings are subject to availability, and the final schedule is arranged and confirmed by Marianne P. Natanawan.',
  facebookUrl: FACEBOOK_URL,
  callBeforeVisitingHref: 'tel:+639566755148',
} as const;

export const CONTACT_LINKS = [
  {
    label: 'Message Us on Facebook',
    href: FACEBOOK_URL,
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
  address: LOCATION_DETAILS.address,
  hours: LOCATION_DETAILS.hours,
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

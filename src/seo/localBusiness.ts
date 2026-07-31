import { BUSINESS, FACEBOOK_URL } from '../data/business';
import { getRuntimeSiteUrl } from '../config/siteUrl';

export const LOCAL_BUSINESS_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: BUSINESS.name,
  url: getRuntimeSiteUrl(),
  telephone: '+639566755148',
  email: 'marianne03natanawan@gmail.com',
  sameAs: [FACEBOOK_URL],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Block 19, Lot 11, Dahlia Extension Street, BIR Village, West Fairview',
    addressLocality: 'Quezon City',
    postalCode: '1118',
    addressCountry: 'PH',
  },
  areaServed: [...BUSINESS.serviceAreas],
  openingHours: 'Mo-Su 08:00-19:00',
} as const;


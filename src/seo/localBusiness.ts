import { BUSINESS } from '../data/business';
import { getRuntimeSiteUrl } from '../config/siteUrl';

export const LOCAL_BUSINESS_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${getRuntimeSiteUrl()}/#localbusiness`,
  name: BUSINESS.name,
  url: getRuntimeSiteUrl(),
  telephone: '+639566755148',
  description:
    "Yhan's Catering Services provides catering menu choices, food trays, and event catering for birthdays, weddings, corporate events, and family celebrations in Fairview, Quezon City.",
  image: `${getRuntimeSiteUrl()}/og.webp`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Block 19 - L 11, Dahlia Extension Street, BIR Village, West Fairview',
    addressLocality: 'Quezon City',
    addressRegion: 'Metro Manila',
    postalCode: '1118',
    addressCountry: 'PH',
  },
  areaServed: [
    { '@type': 'Place', name: 'Fairview, Quezon City' },
    { '@type': 'City', name: 'Quezon City' },
  ],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    opens: '08:00',
    closes: '19:00',
  },
  sameAs: ['https://www.facebook.com/yhanscateringserviceofficial'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Catering Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Event Catering Services' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Catering Menu Choices' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Food Trays' },
      },
    ],
  },
} as const;

import { describe, expect, it } from 'vitest';

import { PRODUCTION_SITE_URL } from '../config/siteUrl';
import { LOCAL_BUSINESS_JSON_LD } from './localBusiness';
import { INDEXABLE_ROUTES } from './pageMeta';
import { getCanonicalUrl } from './routeMeta';
import { createRobotsTxt, createSitemapXml } from './siteFiles';

describe('SEO configuration', () => {
  it('uses production canonicals and distinct indexable route metadata', () => {
    expect(getCanonicalUrl('/')).toBe('https://yhanscatering.online');
    expect(getCanonicalUrl('/packages')).toBe('https://yhanscatering.online/packages');
    expect(new Set(INDEXABLE_ROUTES.map((route) => route.title)).size).toBe(INDEXABLE_ROUTES.length);
    expect(INDEXABLE_ROUTES[0].title).toContain('Fairview, Quezon City');
    expect(INDEXABLE_ROUTES.flatMap((route) => [route.title, route.description]).join(' ')).not.toMatch(/catering packages/i);
  });

  it('publishes crawlable sitemap and robots output for the public routes', () => {
    const robots = createRobotsTxt(PRODUCTION_SITE_URL);
    const sitemap = createSitemapXml(PRODUCTION_SITE_URL);

    expect(robots).toContain('Allow: /');
    expect(robots).toContain('Sitemap: https://yhanscatering.online/sitemap.xml');
    ['https://yhanscatering.online', 'https://yhanscatering.online/packages', 'https://yhanscatering.online/about-contact', 'https://yhanscatering.online/events'].forEach((url) => {
      expect(sitemap).toContain(`<loc>${url}</loc>`);
    });
  });

  it('describes the confirmed local business and actual services without package claims', () => {
    expect(LOCAL_BUSINESS_JSON_LD).toMatchObject({
      '@type': 'LocalBusiness',
      name: "Yhan's Catering Services",
      url: 'https://yhanscatering.online',
      telephone: '+639566755148',
      address: {
        streetAddress: 'Block 19 - L 11, Dahlia Extension Street, BIR Village, West Fairview',
        addressLocality: 'Quezon City',
        addressRegion: 'Metro Manila',
        postalCode: '1118',
        addressCountry: 'PH',
      },
    });
    expect(LOCAL_BUSINESS_JSON_LD.openingHoursSpecification.opens).toBe('08:00');
    expect(LOCAL_BUSINESS_JSON_LD.openingHoursSpecification.closes).toBe('19:00');
    expect(LOCAL_BUSINESS_JSON_LD.sameAs).toContain(
      'https://www.facebook.com/yhanscateringserviceofficial',
    );
    expect(JSON.stringify(LOCAL_BUSINESS_JSON_LD)).toContain('Fairview, Quezon City');
    expect(JSON.stringify(LOCAL_BUSINESS_JSON_LD)).not.toMatch(/catering packages/i);
  });
});

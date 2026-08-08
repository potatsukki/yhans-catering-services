import type { RouteMeta } from '../types/content.ts';

export const INDEXABLE_ROUTES = [
  {
    pathname: '/',
    title: "Yhan's Catering Services | Catering in Fairview, Quezon City",
    description:
      "Yhan's Catering Services offers catering menu choices, food trays, and event catering in Fairview, Quezon City for birthdays, weddings, corporate events, and family celebrations.",
    crawlableHeading: 'Catering Services for Events in Fairview, Quezon City',
    crawlableSummary:
      "Yhan's Catering Services provides catering menu choices, food trays, and event catering for birthdays, weddings, corporate events, and family celebrations in Fairview, Quezon City, Metro Manila, Philippines.",
  },
  {
    pathname: '/packages',
    title: "Catering Menu & Food Trays in Fairview, Quezon City | Yhan's Catering Services",
    description:
      "Explore catering menu choices, food trays, packed meals, and grazing tables from Yhan's Catering Services for celebrations and group events in Fairview, Quezon City.",
    crawlableHeading: 'Catering Menu and Food Trays in Fairview, Quezon City',
    crawlableSummary:
      "Explore catering menu choices, food trays, packed meals, and grazing tables from Yhan's Catering Services for celebrations and group events in Fairview, Quezon City.",
  },
  {
    pathname: '/about-contact',
    title: "About & Contact | Yhan's Catering Services in Fairview, Quezon City",
    description:
      "Contact Yhan's Catering Services in Fairview, Quezon City for catering menu choices, food trays, event catering, and celebration planning.",
    crawlableHeading: "Contact Yhan's Catering Services in Fairview, Quezon City",
    crawlableSummary:
      "Contact Yhan's Catering Services in Fairview, Quezon City for catering menu choices, food trays, event catering, and celebration planning.",
  },
  {
    pathname: '/events',
    title: "Event Catering Gallery in Quezon City | Yhan's Catering Services",
    description:
      "View birthday, wedding, corporate event, buffet, and family celebration catering setups prepared by Yhan's Catering Services in Quezon City.",
    crawlableHeading: 'Event Catering Gallery in Quezon City',
    crawlableSummary:
      "View birthday, wedding, corporate event, buffet, and family celebration catering setups prepared by Yhan's Catering Services in Quezon City.",
  },
] as const satisfies readonly (RouteMeta & {
  readonly pathname: string;
  readonly crawlableHeading: string;
  readonly crawlableSummary: string;
})[];

export const INDEXABLE_PATHS = INDEXABLE_ROUTES.map((route) => route.pathname);

export function getPageMeta(pathname: string): RouteMeta {
  return INDEXABLE_ROUTES.find((route) => route.pathname === pathname) ?? INDEXABLE_ROUTES[0];
}

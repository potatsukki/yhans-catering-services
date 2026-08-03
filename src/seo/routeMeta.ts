import type { RouteMeta } from '../types/content';
import { getRuntimeSiteUrl } from '../config/siteUrl';

const ROUTE_META: Record<string, RouteMeta> = {
  '/': {
    title: "Yhan's Catering Services | Catering in Quezon City",
    description:
      "Yhan's Catering Services provides catering, grazing tables, food trays, and packed meals for celebrations and group events in Quezon City and nearby Metro Manila areas.",
  },
  '/packages': {
    title: "Catering Packages | Yhan's Catering Services",
    description:
      "Explore Yhan's confirmed regular catering packages, grazing packages, packed meals, and food-tray offerings for celebrations and group events.",
  },
  '/about-contact': {
    title: "About & Contact | Yhan's Catering Services",
    description:
      "Learn about Yhan's Catering Services, view service areas and business hours, and contact Marianne P. Natanawan for your event requirements.",
  },
  '/events': {
    title: "Events Gallery | Yhan's Catering Services",
    description:
      "Explore celebrations, table setups, buffet arrangements, and special occasions catered by Yhan's Catering Services.",
  },
};

export function getRouteMeta(pathname: string): RouteMeta {
  return ROUTE_META[pathname] ?? ROUTE_META['/'];
}

export function getCanonicalUrl(
  pathname: string,
  siteUrl: string = getRuntimeSiteUrl(),
): string {
  const canonicalPath = ROUTE_META[pathname] ? pathname : '/';
  return `${siteUrl}${canonicalPath === '/' ? '' : canonicalPath}`;
}

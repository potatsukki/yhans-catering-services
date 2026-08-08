import { getRuntimeSiteUrl } from '../config/siteUrl';
import { getPageMeta, INDEXABLE_PATHS } from './pageMeta';

export function getRouteMeta(pathname: string) {
  return getPageMeta(pathname);
}

export function getCanonicalUrl(
  pathname: string,
  siteUrl: string = getRuntimeSiteUrl(),
): string {
  const canonicalPath = INDEXABLE_PATHS.includes(pathname) ? pathname : '/';
  return `${siteUrl}${canonicalPath === '/' ? '' : canonicalPath}`;
}

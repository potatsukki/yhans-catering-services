import { useEffect } from 'react';

import { getCanonicalUrl, getRouteMeta } from '../seo/routeMeta';
import { getRuntimeSiteUrl } from '../config/siteUrl';

function upsertMeta(name: string, content: string, property = false) {
  const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement('meta');
    if (property) {
      element.setAttribute('property', name);
    } else {
      element.setAttribute('name', name);
    }
    element.dataset.siteMeta = 'true';
    document.head.appendChild(element);
  }

  element.content = content;
}

function upsertCanonical(href: string) {
  let element = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!element) {
    element = document.createElement('link');
    element.rel = 'canonical';
    element.dataset.siteMeta = 'true';
    document.head.appendChild(element);
  }
  element.href = href;
}

export function useDocumentMeta(pathname: string) {
  useEffect(() => {
    const meta = getRouteMeta(pathname);
    const canonical = getCanonicalUrl(pathname, getRuntimeSiteUrl());

    document.title = meta.title;
    upsertMeta('description', meta.description);
    upsertCanonical(canonical);
    upsertMeta('og:title', meta.title, true);
    upsertMeta('og:description', meta.description, true);
    upsertMeta('og:url', canonical, true);
    upsertMeta('og:type', 'website', true);
    upsertMeta('og:site_name', "Yhan's Catering Services", true);
    upsertMeta('og:image', `${getRuntimeSiteUrl()}/og.webp`, true);
    upsertMeta('twitter:card', 'summary_large_image');
    upsertMeta('twitter:title', meta.title);
    upsertMeta('twitter:description', meta.description);
    upsertMeta('twitter:image', `${getRuntimeSiteUrl()}/og.webp`);
  }, [pathname]);
}

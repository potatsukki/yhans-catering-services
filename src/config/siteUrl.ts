const LOCAL_SITE_URL = 'http://localhost:5173';

export type SiteUrlOptions = {
  readonly requireHttps?: boolean;
};

export function resolveSiteUrl(
  rawValue?: string,
  options: SiteUrlOptions = {},
): string {
  const value = rawValue?.trim();

  if (!value) {
    if (options.requireHttps) {
      throw new Error('VITE_SITE_URL is required for a production deployment.');
    }
    return LOCAL_SITE_URL;
  }

  let parsed: URL;
  try {
    parsed = new URL(value);
  } catch {
    throw new Error('VITE_SITE_URL must be an absolute HTTP(S) URL.');
  }

  if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
    throw new Error('VITE_SITE_URL must use http or https.');
  }

  if (options.requireHttps && parsed.protocol !== 'https:') {
    throw new Error('VITE_SITE_URL must use HTTPS for a production deployment.');
  }

  if (parsed.username || parsed.password || parsed.pathname !== '/' || parsed.search || parsed.hash) {
    throw new Error('VITE_SITE_URL must be an origin without credentials, path, query, or hash.');
  }

  return parsed.origin;
}

export function resolveVercelProjectSiteUrl(hostname: string | undefined): string | undefined {
  const normalizedHostname = hostname?.trim();

  return normalizedHostname ? `https://${normalizedHostname}` : undefined;
}

export function getRuntimeSiteUrl(): string {
  return resolveSiteUrl(
    import.meta.env.VITE_SITE_URL ??
      resolveVercelProjectSiteUrl(import.meta.env.VITE_VERCEL_PROJECT_PRODUCTION_URL),
  );
}

import { describe, expect, it } from 'vitest';

import { resolveVercelProjectSiteUrl } from './siteUrl';

describe('resolveVercelProjectSiteUrl', () => {
  it('converts the assigned Vercel production hostname to an HTTPS origin', () => {
    expect(resolveVercelProjectSiteUrl('yhans-catering-services.vercel.app')).toBe(
      'https://yhans-catering-services.vercel.app',
    );
  });

  it('returns undefined when Vercel does not provide a hostname', () => {
    expect(resolveVercelProjectSiteUrl(undefined)).toBeUndefined();
    expect(resolveVercelProjectSiteUrl('  ')).toBeUndefined();
  });
});

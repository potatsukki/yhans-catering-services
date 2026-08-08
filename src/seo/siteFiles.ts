import { INDEXABLE_PATHS } from './pageMeta.ts';

function escapeXml(value: string): string {
  return value.replace(/[<>&'\"]/g, (character) => {
    const entities: Record<string, string> = {
      '<': '&lt;',
      '>': '&gt;',
      '&': '&amp;',
      "'": '&apos;',
      '\"': '&quot;',
    };
    return entities[character];
  });
}

export function createSitemapXml(siteUrl: string): string {
  const urls = INDEXABLE_PATHS.map(
    (path) => `  <url><loc>${escapeXml(`${siteUrl}${path === '/' ? '' : path}`)}</loc></url>`,
  ).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

export function createRobotsTxt(siteUrl: string): string {
  return `User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`;
}

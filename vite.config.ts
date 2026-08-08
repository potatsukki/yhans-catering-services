import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath, URL } from 'node:url';

import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';
import { loadEnv, type Plugin } from 'vite';
import { PRODUCTION_SITE_URL, resolveSiteUrl, resolveVercelProjectSiteUrl } from './src/config/siteUrl.ts';
import { INDEXABLE_ROUTES } from './src/seo/pageMeta.ts';
import { createRobotsTxt, createSitemapXml } from './src/seo/siteFiles.ts';

function getBuildSiteUrl(mode: string): string {
  const env = loadEnv(mode, process.cwd(), '');
  const rawSiteUrl =
    process.env.VITE_SITE_URL ??
    env.VITE_SITE_URL ??
    resolveVercelProjectSiteUrl(
      process.env.VERCEL_PROJECT_PRODUCTION_URL ??
        process.env.VITE_VERCEL_PROJECT_PRODUCTION_URL,
    ) ??
    PRODUCTION_SITE_URL;

  return resolveSiteUrl(rawSiteUrl, { requireHttps: true });
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>'"]/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;',
  })[character] ?? character);
}

function updateHeadTag(html: string, pattern: RegExp, value: string): string {
  return html.replace(pattern, value);
}

function createRouteHtml(html: string, siteUrl: string, route: (typeof INDEXABLE_ROUTES)[number]): string {
  const canonical = `${siteUrl}${route.pathname === '/' ? '' : route.pathname}`;
  const title = escapeHtml(route.title);
  const description = escapeHtml(route.description);
  const image = `${siteUrl}/og.webp`;

  return [
    [/\<title\>[^<]*\<\/title\>/, `<title>${title}</title>`],
    [/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${description}" />`],
    [/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${canonical}" />`],
    [/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${title}" />`],
    [/<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${description}" />`],
    [/<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${canonical}" />`],
    [/<meta property="og:image" content="[^"]*" \/>/, `<meta property="og:image" content="${image}" />`],
    [/<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${title}" />`],
    [/<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${description}" />`],
    [/<meta name="twitter:image" content="[^"]*" \/>/, `<meta name="twitter:image" content="${image}" />`],
    [/<h1>Catering Services for Events in Fairview, Quezon City<\/h1>/, `<h1>${escapeHtml(route.crawlableHeading)}</h1>`],
    [/<p>Yhan's Catering Services provides catering menu choices, food trays, and event catering for birthdays, weddings, corporate events, and family celebrations in Fairview, Quezon City, Metro Manila, Philippines.<\/p>/, `<p>${escapeHtml(route.crawlableSummary)}</p>`],
  ].reduce((result, [pattern, value]) => updateHeadTag(result, pattern, value), html);
}

function seoFilesPlugin(mode: string): Plugin {
  return {
    name: 'yhans-seo-files',
    generateBundle() {
      const siteUrl = getBuildSiteUrl(mode);

      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: createRobotsTxt(siteUrl),
      });
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: createSitemapXml(siteUrl),
      });
    },
  };
}

function staticRouteHtmlPlugin(mode: string): Plugin {
  return {
    name: 'yhans-static-route-html',
    apply: 'build',
    async closeBundle() {
      const distDirectory = join(process.cwd(), 'dist');
      const rootHtml = await readFile(join(distDirectory, 'index.html'), 'utf8');
      const siteUrl = getBuildSiteUrl(mode);

      await Promise.all(INDEXABLE_ROUTES.filter((route) => route.pathname !== '/').map(async (route) => {
        const outputPath = join(distDirectory, route.pathname.slice(1), 'index.html');
        await mkdir(dirname(outputPath), { recursive: true });
        await writeFile(outputPath, createRouteHtml(rootHtml, siteUrl, route), 'utf8');
      }));
    },
  };
}

export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss(), seoFilesPlugin(mode), staticRouteHtmlPlugin(mode)],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup.ts'],
    css: true,
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      thresholds: {
        statements: 75,
        branches: 65,
        functions: 75,
        lines: 75,
      },
    },
  },
}));

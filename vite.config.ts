import { fileURLToPath, URL } from 'node:url';

import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';
import { loadEnv, type Plugin } from 'vite';
import { resolveSiteUrl, resolveVercelProjectSiteUrl } from './src/config/siteUrl.ts';
import { createRobotsTxt, createSitemapXml } from './src/seo/siteFiles.ts';

function seoFilesPlugin(mode: string): Plugin {
  return {
    name: 'yhans-seo-files',
    generateBundle() {
      const env = loadEnv(mode, process.cwd(), '');
      const rawSiteUrl =
        process.env.VITE_SITE_URL ??
        env.VITE_SITE_URL ??
        resolveVercelProjectSiteUrl(
          process.env.VERCEL_PROJECT_PRODUCTION_URL ??
            process.env.VITE_VERCEL_PROJECT_PRODUCTION_URL,
        );
      const requireHttps =
        process.env.VERCEL === '1' || env.VITE_REQUIRE_PRODUCTION_URL === 'true';
      const siteUrl = resolveSiteUrl(rawSiteUrl, { requireHttps });

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

export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss(), seoFilesPlugin(mode)],
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

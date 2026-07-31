# Yhan's Catering Services

Yhan's Catering Services is a static React marketing website for a Quezon City catering business. It presents confirmed catering packages, grazing tables, packed meals, food-tray inquiries, event services, business information, and direct contact actions. The site has three main public routes plus a not-found fallback. It has no backend, account system, booking engine, checkout, payment processing, or inquiry form.

## Technology stack

- React 19 with React Router DOM 7
- TypeScript 7 in strict mode
- Vite 8 and Tailwind CSS 4
- Vitest 4, jsdom, and React Testing Library
- Playwright Chromium and `@axe-core/playwright`
- Inter, Cormorant Garamond, and Great Vibes via Fontsource

Node and npm versions are pinned by `.nvmrc` and `package.json` (`22.19.0` and Node `>=22.12.0`).

## Prerequisites and installation

Install Node.js 22.19.0 (or a compatible Node 22 release) and npm. Then install the locked dependencies:

```powershell
npm ci
npx playwright install chromium
```

The Playwright browser installation is needed for local E2E runs. Do not run `npm audit fix --force`; the known React Router audit risk is documented below.

## Development and production commands

Start the Vite development server:

```powershell
npm run dev
```

Create a production build and preview it locally:

```powershell
npm run build
npm run preview
```

Run the TypeScript check:

```powershell
npm run typecheck
```

## Tests and coverage

Run all Vitest unit/component tests:

```powershell
npm run test
```

Run a focused test file or directory by passing Vitest arguments:

```powershell
npm run test -- src/data/content.test.ts
npm run test -- src/components
```

Run the V8 coverage report. The configured minimums are 75% statements, 65% branches, 75% functions, and 75% lines:

```powershell
npm run test:coverage
```

Install Chromium and run every Playwright test:

```powershell
npx playwright install chromium
npm run test:e2e
```

Useful focused browser runs:

```powershell
npm run test:e2e -- e2e/navigation.spec.ts
npm run test:e2e -- e2e/mobile.spec.ts e2e/accessibility.spec.ts
npm run test:e2e:ui
```

The E2E suite covers direct routes, SPA navigation and history, active navigation, not-found behavior, CTA destinations, mobile behavior, image loading, overflow, browser errors, and serious/critical Axe violations.

## Project structure

```text
docs/                         Source of truth, decisions, progress, and execution plan
reference/                    Supplied logo, mockups, and screenshots
public/                       Favicon and static public files
src/
  app/                        Router and application shell
  assets/                     Official logo and temporary local imagery
  components/layout/           Skip link, header, mobile nav, footer, and layout
  components/sections/         Home, Packages, and About/Contact sections
  components/ui/               Shared buttons, cards, images, icons, and primitives
  data/                        Typed centralized business and page content
  features/                   Grazing guest estimator
  hooks/                      Metadata and reduced-motion hooks
  pages/                      Route-level page compositions
  seo/                        Route metadata, JSON-LD, robots, and sitemap helpers
  utils/                      Currency and link utilities
  test/                       Vitest setup and render helpers
e2e/                          Playwright navigation, page, mobile, and accessibility tests
.github/workflows/ci.yml       GitHub Actions validation workflow
```

## Updating centralized content

`docs/CONTENT_SOURCE_OF_TRUTH.md` is the factual authority. Keep page and section components presentational and update the typed data modules instead:

- Business identity, contacts, hours, areas, and payments: `src/data/business.ts`.
- Navigation and approved CTA destinations: `src/data/navigation.ts`.
- Regular packages, grazing packages, inclusions, packed meals, and food trays: `src/data/packages.ts`.
- Event types and service offerings: `src/data/events.ts` and `src/data/services.ts`.
- Booking steps, policy wording, and helpful information: `src/data/booking.ts`.
- Image references and placeholder disclosures: `src/data/gallery.ts`.

After a confirmed business-detail change, update the source-of-truth documentation, the relevant typed module, and its focused tests. Never add unsupported prices, staff inclusions, testimonials, ratings, customer identities, policies, or event claims.

### Updating packages

Edit `src/data/packages.ts` only after the corresponding fact is approved in `docs/CONTENT_SOURCE_OF_TRUTH.md`. Preserve exact menu spelling, package constraints, confirmed inclusions, and the rule that food-tray prices remain unpublished. Update `src/data/content.test.ts` and the relevant page tests when approved content changes.

### Replacing placeholder images

Replace only the temporary files under `src/assets/images/placeholders/` with approved local assets of the documented dimensions and aspect ratios. Keep imports centralized through `src/data/gallery.ts`, preserve meaningful alt text, remove the temporary disclosure only when the replacement is approved, and update `docs/ASSET_INVENTORY.md` and `docs/PROGRESS.md`. Do not import mockups or `reference/screenshots/facebook-page.jpg` into production.

## `VITE_SITE_URL`

Development can use the built-in localhost fallback. For production outside Vercel, set an absolute HTTPS origin:

```powershell
$env:VITE_SITE_URL = 'https://www.example.com'
npm run build
```

In local work, place the value in `.env.local` (which is ignored by Git). On Vercel, the build uses the platform-provided `VERCEL_PROJECT_PRODUCTION_URL` automatically when `VITE_SITE_URL` is absent. Set `VITE_SITE_URL` when an approved custom domain should override the assigned Vercel production domain. Production validation rejects a missing, relative, or non-HTTPS origin. The resolved value supplies canonical URLs, Open Graph URLs, JSON-LD, `robots.txt`, and `sitemap.xml`.

## Vercel deployment

1. Import the repository into Vercel as a Vite project.
2. Use Node 22.19.0 (or the `.nvmrc` value) and keep the install command `npm ci`.
3. Set the production environment variable `VITE_SITE_URL` to the final HTTPS domain.
4. Use `npm run build` as the build command and `dist` as the output directory.
5. Deploy a preview, verify direct refreshes for `/`, `/packages`, and `/about-contact`, then promote only after the production-origin SEO output and final QA checks pass.

## Current production deployment

- Repository: [`potatsukki/yhans-catering-services`](https://github.com/potatsukki/yhans-catering-services)
- Production branch: `main`
- Vercel project: `potatsukki-7878s-projects / yhans-catering-services`
- Production URL: [https://yhans-catering-services-eight.vercel.app](https://yhans-catering-services-eight.vercel.app)
- Production `VITE_SITE_URL`: `https://yhans-catering-services-eight.vercel.app`
- Deployment configuration: `npm ci`, `npm run build`, output directory `dist`.

Pushes to `main` deploy through the connected Vercel project. The earlier project under the separate `seans-projects-4f512072` team was retained and is not the production target.

## Pending owner confirmations

The following details remain intentionally unpublished until confirmed: regular-package additional-head pricing; serving-staff inclusion; complete food-tray menu and prices; food-pack minimum, delivery, and inclusion details; booking lead times; guest-count and menu-change deadlines; overtime rules; final cancellation/rescheduling wording; approved real photos; and approved real testimonials.

## Known dependency audit issue

`docs/DECISIONS.md` D-013 records two high-severity advisories reported through the pinned React Router dependency (`GHSA-qwww-vcr4-c8h2`, affecting the documented React Router range). The available npm suggestion is outside the approved dependency decision and was not applied. Reassess before production release; do not use `npm audit fix --force`.

No lint step is configured because a compatible TypeScript 7 linting setup has not been approved.

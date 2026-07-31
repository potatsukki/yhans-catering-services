# Technical Architecture

## Required stack

Install the latest stable releases available at implementation time:

- TypeScript 7.x stable
- React stable
- React DOM stable
- Vite stable
- Tailwind CSS stable
- React Router stable
- Vitest stable
- Playwright stable
- React Testing Library stable

Do not install beta, RC, canary, nightly, or preview packages.

Before scaffolding, verify npm dist-tags:

```bash
npm view typescript dist-tags
npm view react dist-tags
npm view react-dom dist-tags
npm view vite dist-tags
npm view tailwindcss dist-tags
npm view @tailwindcss/vite dist-tags
npm view vitest dist-tags
npm view @playwright/test dist-tags
```

The project must keep TypeScript 7 as the main compiler. Do not silently downgrade it.

If a linting tool is temporarily incompatible with the TypeScript 7 compiler API:

- keep TypeScript 7 for `tsc`;
- use non-type-aware lint rules, a compatible linter, or the official TypeScript 6 compatibility package where appropriate;
- document the choice in `docs/DECISIONS.md`;
- never replace TypeScript 7 with an older main compiler without approval.

## Runtime

Use the latest active Node.js LTS that is compatible with the selected packages.

Set a practical minimum engine:

```json
{
  "engines": {
    "node": ">=22.12.0"
  }
}
```

Use npm and commit `package-lock.json` unless the repository already uses another package manager.

## Routing

Use React Router with these routes:

```txt
/                  HomePage
/packages          PackagesPage
/about-contact     AboutContactPage
/*                 NotFoundPage
```

Use a shared `SiteLayout` with:

- skip link;
- header;
- main route outlet;
- footer;
- scroll restoration.

## Recommended source structure

```txt
src/
  app/
    App.tsx
    router.tsx
  assets/
    brand/
      yhans-logo.png
    images/
      home/
      packages/
      about/
      placeholders/
  components/
    layout/
      Header.tsx
      MobileNavigation.tsx
      Footer.tsx
      SiteLayout.tsx
      SkipLink.tsx
    ui/
      ButtonLink.tsx
      Container.tsx
      SectionHeading.tsx
      DecorativeDivider.tsx
      ResponsiveImage.tsx
      Icon.tsx
      Badge.tsx
      Price.tsx
      ExternalLink.tsx
    sections/
      home/
      packages/
      about/
  data/
    business.ts
    navigation.ts
    packages.ts
    services.ts
    events.ts
    gallery.ts
  features/
    grazing-estimator/
      GrazingEstimator.tsx
      calculateGrazingEstimate.ts
      calculateGrazingEstimate.test.ts
  hooks/
    useDocumentMeta.ts
    useReducedMotion.ts
  pages/
    HomePage.tsx
    PackagesPage.tsx
    AboutContactPage.tsx
    NotFoundPage.tsx
  styles/
    index.css
  test/
    setup.ts
    render.tsx
  types/
    content.ts
  main.tsx

e2e/
  navigation.spec.ts
  home.spec.ts
  packages.spec.ts
  about-contact.spec.ts
  mobile.spec.ts
  accessibility.spec.ts

public/
  favicon.svg
  robots.txt
  sitemap.xml
  og-placeholder.jpg

.github/
  workflows/
    ci.yml

docs/
  PROJECT_BRIEF.md
  CONTENT_SOURCE_OF_TRUTH.md
  DESIGN_SYSTEM.md
  ARCHITECTURE.md
  ACCEPTANCE_CRITERIA.md
  DECISIONS.md
  PROGRESS.md
  IMPLEMENTATION_PLAN.md
  ASSET_INVENTORY.md
  LUNA_EXECUTION_PLAN.md
README.md
vercel.json
```

Do not create hundreds of tiny components. Extract components when they:

- repeat;
- carry behavior;
- improve readability;
- represent a stable design primitive.

## Content modeling

All business content must be centralized in typed data files.

Example concepts:

```ts
type RegularPackage = {
  id: string;
  name: string;
  pricePhp: 30000;
  guestCapacity: 50;
  dishes: readonly string[];
};

type GrazingPackage = {
  id: string;
  name: string;
  pricePerGuestPhp: 1000;
  minimumGuests: 50;
  dishes: readonly string[];
  isBestSeller?: boolean;
};

type ContactLink = {
  label: string;
  href: string;
  kind: "facebook" | "email" | "phone";
  external?: boolean;
};
```

Use `as const` and `satisfies` where appropriate.

No package content should be duplicated inside page components.

## Tailwind CSS

Use the current Tailwind CSS Vite integration.

Prefer Tailwind's CSS-first configuration and theme tokens in `src/styles/index.css`.

Use the official Vite plugin rather than an outdated PostCSS setup unless compatibility requires otherwise.

## Styling strategy

- Tailwind utilities for layout and component styling;
- CSS custom properties for theme colors;
- a few semantic component classes only when repetition justifies them;
- no Bootstrap;
- no generic UI kit;
- no heavy component library;
- no CSS-in-JS.

## Images and assets

Create a typed asset map.

The official logo is a real asset.

Generated or stock food/event images are placeholders. Keep them replaceable without editing page components.

Use a `ResponsiveImage` component that supports:

- width/height or aspect ratio;
- alt text;
- lazy loading;
- eager loading for the hero image;
- fallback when an asset is missing.

## Contact actions

Create centralized helpers/constants for:

```txt
Facebook: https://www.facebook.com/share/1EnpK8EnM1/
Email: mailto:marianne03natanawan@gmail.com
Primary phone: tel:+639566755148
Secondary phone: tel:+639671195792
```

External links:

- use `target="_blank"` only when appropriate;
- include `rel="noreferrer noopener"`;
- indicate to assistive technology when a link opens a new tab.

## Guest estimator

A small grazing-package estimate component is allowed.

Rules:

- minimum 50;
- maximum UI value may be 600;
- price = guest count × 1000;
- use a number input and plus/minus controls;
- show Philippine peso formatting;
- label result as an estimate;
- include “Final details are confirmed directly with Yhan's Catering Services.”

Do not build a regular-package estimator because the additional-head rate is unknown.

## SEO

Each page must have:

- unique document title;
- unique meta description;
- canonical path support;
- Open Graph title and description;
- meaningful heading structure.

Add:

- `robots.txt`;
- `sitemap.xml`;
- a `LocalBusiness` JSON-LD block using only confirmed facts;
- no fake aggregate rating;
- no fake review schema;
- no invented price range beyond confirmed packages.

## Deployment

Target Vercel.

Add a client-side routing fallback:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

Verify direct refreshes of `/packages` and `/about-contact`.

## Scripts

Provide at least:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc --noEmit && vite build",
    "preview": "vite preview",
    "typecheck": "tsc --noEmit",
    "test": "vitest run",
    "test:watch": "vitest",
    "test:coverage": "vitest run --coverage",
    "test:e2e": "playwright test",
    "test:e2e:ui": "playwright test --ui",
    "check": "npm run typecheck && npm run test && npm run build"
  }
}
```

Add a lint script only after selecting a TypeScript 7-compatible setup.

## Error handling

- no blank page if an image is missing;
- no unhandled route errors;
- no console errors;
- no undefined content rendering;
- no unsafe non-null assertions for content;
- graceful fallback for unavailable browser APIs.

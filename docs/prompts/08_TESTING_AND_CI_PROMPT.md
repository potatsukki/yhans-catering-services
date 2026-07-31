# Phase 8 Prompt — Complete Testing and CI

Proceed after responsive and accessibility refinement.

## Goal

Finish a dependable test suite and continuous-integration workflow.

## Vitest setup

Use:

- Vitest;
- jsdom;
- React Testing Library;
- `@testing-library/jest-dom`;
- `@testing-library/user-event`.

## Required unit and component coverage

### Content/data

- business identity;
- contact links;
- service areas;
- regular package count, prices, guest capacity, dishes, and inclusions;
- grazing package count, per-head price, minimum guests, dishes, and inclusions;
- packed-meal price range and examples;
- food trays contain no invented public price;
- booking steps and payment values.

### Utilities

- Philippine peso formatter;
- external-link helper;
- phone `tel:` normalization;
- grazing estimate calculation;
- clamp/validation for guest count.

### Components

- Header;
- MobileNavigation;
- Footer;
- ButtonLink;
- PackageCard;
- GrazingEstimator;
- ContactCard;
- ResponsiveImage fallback.

Test behavior rather than implementation details.

## Playwright coverage

### Navigation

- all routes load from direct navigation;
- nav links work;
- active state changes;
- browser back/forward works;
- unknown route shows a useful page.

### CTAs

- View Packages;
- Facebook;
- Request a Quote;
- phone;
- email;
- food-tray menu request.

Do not actually place a call or send an email. Assert hrefs and link behavior.

### Mobile

At 375×812:

- menu opens and closes;
- no horizontal overflow;
- hero CTA buttons are usable;
- regular packages are readable;
- grazing inclusions are usable;
- contact cards do not overlap;
- footer is readable.

### Accessibility

- axe checks on all main routes;
- keyboard traversal;
- visible focus;
- menu focus management.

### Reliability

- fail on browser console errors;
- fail on uncaught page errors;
- verify local images return successfully;
- verify no empty image `src`;
- verify internal navigation does not cause a full-page 404.

## CI

Create `.github/workflows/ci.yml`.

Recommended jobs or steps:

1. checkout;
2. setup Node with npm cache;
3. `npm ci`;
4. typecheck;
5. lint, if configured;
6. unit tests;
7. build;
8. install Playwright Chromium;
9. Playwright tests;
10. upload Playwright report on failure.

Use a stable Node LTS version compatible with the package engine.

Do not run all three Playwright browsers in CI unless runtime remains reasonable. Chromium is sufficient initially; local config may retain Firefox and WebKit projects for optional runs.

## Coverage

Add coverage support.

Use practical thresholds, for example:

- statements: 75%;
- branches: 65%;
- functions: 75%;
- lines: 75%.

Do not write meaningless tests merely to reach a number.

## Documentation

Update README with:

- prerequisites;
- install;
- development;
- build;
- unit tests;
- E2E tests;
- replacing placeholder images;
- updating business content;
- deployment to Vercel.

Run CI-equivalent commands locally, update docs, report results, and stop.

# Luna Execution Plan — Yhan's Catering Services

## Purpose

This is the execution authority for Luna. Build and deploy a production-quality, responsive three-page marketing website for Yhan's Catering Services by completing the ten phases in order. Complete one phase at a time, run its gate, update `docs/DECISIONS.md` and `docs/PROGRESS.md`, report results, and stop before the next phase.

Do not reinterpret business facts, add product scope, or choose an alternative stack. When this plan references content already documented, read it from the named source instead of duplicating or rewriting it.

## Source precedence

1. `docs/CONTENT_SOURCE_OF_TRUTH.md` controls every public business fact and all approved wording.
2. `docs/ARCHITECTURE.md` controls the stack, routes, content model, deployment target, and technical behavior.
3. The three files under `reference/mockups/` control visual hierarchy and section composition; `docs/DESIGN_SYSTEM.md` controls responsive and accessible adaptation.
4. `docs/ACCEPTANCE_CRITERIA.md` is the release checklist.
5. `docs/prompts/01_DISCOVERY_AND_DOCS_PROMPT.md` through `docs/prompts/09_FINAL_QA_PROMPT.md` control Phases 1–9; the approved P10 section in this plan controls Phase 10.
6. `reference/screenshots/original-ui-reference.png` is inspiration only.
7. `reference/screenshots/facebook-page.jpg` is identity/contact evidence only and must never be imported into production code.

If a mockup conflicts with the written sources, follow the written sources. Known mockup errors include outdated footer years, incorrect hours, unsupported claims, unconfirmed inclusions, `Pork Caldereta`, and renaming `Chicken Pesto` to `Chicken Pesto Pasta`.

## Execution protocol

- Execute task IDs in the order listed. A task may start only after every dependency reports success.
- Do not combine phases. At each phase gate, update the two execution logs, report files and commands, and stop.
- Make the smallest change needed for the active task. Preserve unrelated user changes.
- Business content must be imported from typed data modules; page and section components must not contain duplicated business facts.
- Generated prototype photography is temporary. Store it only under `src/assets/images/placeholders/`, label it in the asset inventory and progress log, and never imply that it shows a real Yhan's event or customer.
- Use `VITE_SITE_URL` as the production origin. Development may use localhost. Vercel production validation must reject a missing value, a relative URL, or a non-HTTPS URL.
- Do not configure linting unless a stable TypeScript 7-compatible option is confirmed. Never downgrade TypeScript to satisfy a linter.

## Exact routes

| Path | Route component | Layout |
|---|---|---|
| `/` | `HomePage` | `SiteLayout` |
| `/packages` | `PackagesPage` | `SiteLayout` |
| `/about-contact` | `AboutContactPage` | `SiteLayout` |
| `/*` | `NotFoundPage` | `SiteLayout` |

There are exactly three main public pages. The not-found route is a fallback, not a fourth main page.

## Exact file contract

### Existing files Luna may update

- `docs/DECISIONS.md`
- `docs/PROGRESS.md`
- `docs/IMPLEMENTATION_PLAN.md`
- `docs/ASSET_INVENTORY.md`

Treat the supplied source documents under `docs/`, phase prompts, and reference images as read-only except for the four execution documents explicitly listed above.

### Project configuration and public output

- `.env.example`
- `.gitignore`
- `.nvmrc`
- `package.json`
- `package-lock.json`
- `index.html`
- `tsconfig.json`
- `tsconfig.app.json`
- `tsconfig.node.json`
- `vite.config.ts`
- `playwright.config.ts`
- `vercel.json`
- `README.md`
- `.github/workflows/ci.yml`
- `public/favicon.png`

### Application foundation

- `src/main.tsx`
- `src/vite-env.d.ts`
- `src/app/App.tsx`
- `src/app/router.tsx`
- `src/styles/index.css`
- `src/config/siteUrl.ts`
- `src/types/content.ts`
- `src/hooks/useDocumentMeta.ts`
- `src/hooks/useReducedMotion.ts`
- `src/seo/routeMeta.ts`
- `src/seo/localBusiness.ts`
- `src/seo/siteFiles.ts`

`src/seo/siteFiles.ts` and the Vite configuration must emit `robots.txt` and `sitemap.xml` into the build output without rewriting tracked files during validation.

### Exact data modules

- `src/data/business.ts`
- `src/data/navigation.ts`
- `src/data/packages.ts`
- `src/data/services.ts`
- `src/data/events.ts`
- `src/data/gallery.ts`
- `src/data/booking.ts`

Define and export these types from `src/types/content.ts`: `BusinessProfile`, `ContactLink`, `NavigationItem`, `RegularPackage`, `GrazingPackage`, `PackedMealOffering`, `FoodTrayOffering`, `ServiceOffering`, `EventType`, `BookingStep`, `HelpfulInformationItem`, `ImageAsset`, and `RouteMeta`. Use readonly arrays, literal unions, `as const`, and `satisfies`; avoid `any` and unjustified non-null assertions.

### Exact shared components

- `src/components/layout/SkipLink.tsx`
- `src/components/layout/Header.tsx`
- `src/components/layout/MobileNavigation.tsx`
- `src/components/layout/Footer.tsx`
- `src/components/layout/SiteLayout.tsx`
- `src/components/layout/ScrollToTop.tsx`
- `src/components/ui/Container.tsx`
- `src/components/ui/SectionHeading.tsx`
- `src/components/ui/DecorativeDivider.tsx`
- `src/components/ui/ButtonLink.tsx`
- `src/components/ui/ExternalLink.tsx`
- `src/components/ui/ResponsiveImage.tsx`
- `src/components/ui/Icon.tsx`
- `src/components/ui/Badge.tsx`
- `src/components/ui/Price.tsx`
- `src/components/ui/PackageCard.tsx`
- `src/components/ui/ContactCard.tsx`
- `src/components/ui/CtaBand.tsx`
- `src/components/ui/Accordion.tsx`

### Exact pages and section components

Home:

- `src/pages/HomePage.tsx`
- `src/components/sections/home/HomeHero.tsx`
- `src/components/sections/home/OccasionGrid.tsx`
- `src/components/sections/home/ServicesGrid.tsx`
- `src/components/sections/home/PopularChoices.tsx`
- `src/components/sections/home/WhyChooseYhans.tsx`
- `src/components/sections/home/RecentEvents.tsx`

Packages:

- `src/pages/PackagesPage.tsx`
- `src/components/sections/packages/PackagesHero.tsx`
- `src/components/sections/packages/RegularPackagesSection.tsx`
- `src/components/sections/packages/GrazingPackagesSection.tsx`
- `src/components/sections/packages/GrazingInclusions.tsx`
- `src/components/sections/packages/PackedMealsSection.tsx`
- `src/components/sections/packages/FoodTraysSection.tsx`
- `src/components/sections/packages/AdditionalServicesSection.tsx`
- `src/components/sections/packages/CustomizationNote.tsx`
- `src/features/grazing-estimator/GrazingEstimator.tsx`
- `src/features/grazing-estimator/calculateGrazingEstimate.ts`

About and contact:

- `src/pages/AboutContactPage.tsx`
- `src/components/sections/about/AboutHero.tsx`
- `src/components/sections/about/StorySection.tsx`
- `src/components/sections/about/HighlightsGrid.tsx`
- `src/components/sections/about/WhatWeCater.tsx`
- `src/components/sections/about/ServiceAreasSection.tsx`
- `src/components/sections/about/BookingProcess.tsx`
- `src/components/sections/about/ContactSection.tsx`
- `src/components/sections/about/HelpfulInformationSection.tsx`
- `src/pages/NotFoundPage.tsx`

### Exact utilities and tests

- `src/utils/formatCurrency.ts`
- `src/utils/links.ts`
- `src/test/setup.ts`
- `src/test/render.tsx`
- `src/data/content.test.ts`
- `src/utils/formatCurrency.test.ts`
- `src/utils/links.test.ts`
- `src/features/grazing-estimator/calculateGrazingEstimate.test.ts`
- `src/features/grazing-estimator/GrazingEstimator.test.tsx`
- `src/components/layout/Header.test.tsx`
- `src/components/layout/MobileNavigation.test.tsx`
- `src/components/layout/Footer.test.tsx`
- `src/components/ui/ButtonLink.test.tsx`
- `src/components/ui/ResponsiveImage.test.tsx`
- `src/components/ui/PackageCard.test.tsx`
- `src/components/ui/ContactCard.test.tsx`
- `src/pages/HomePage.test.tsx`
- `src/pages/PackagesPage.test.tsx`
- `src/pages/AboutContactPage.test.tsx`
- `e2e/navigation.spec.ts`
- `e2e/home.spec.ts`
- `e2e/packages.spec.ts`
- `e2e/about-contact.spec.ts`
- `e2e/mobile.spec.ts`
- `e2e/accessibility.spec.ts`

Required utility contracts:

- `formatPhp(amount: number): string`
- `normalizePhoneHref(phone: string): string`
- `isSafeExternalHref(href: string): boolean`
- `clampGuestCount(value: number): number`
- `calculateGrazingEstimate(guestCount: number): number`

## Atomic task sequence

### P1 — Discovery and documentation

#### P1-T01 — Verify sources and precedence

- Depends on: none.
- Read every project Markdown file and inspect all visual references.
- Confirm the canonical paths in `docs/ASSET_INVENTORY.md`.
- Acceptance: every source is classified; mockups cannot override factual documents.

#### P1-T02 — Record the asset register

- Depends on: P1-T01.
- Create or update `docs/ASSET_INVENTORY.md` with type, dimensions, production eligibility, destination, placeholder status, and restrictions.
- Acceptance: the official logo is the only supplied production-eligible visual; the Facebook screenshot is explicitly prohibited.

#### P1-T03 — Resolve stable toolchain versions

- Depends on: P1-T01.
- Run the exact read-only commands:

```powershell
node --version
npm --version
npm view typescript dist-tags --json
npm view react dist-tags --json
npm view react-dom dist-tags --json
npm view vite dist-tags --json
npm view @vitejs/plugin-react dist-tags --json
npm view tailwindcss dist-tags --json
npm view @tailwindcss/vite dist-tags --json
npm view react-router-dom dist-tags --json
npm view vitest dist-tags --json
npm view @playwright/test dist-tags --json
npm view @testing-library/react dist-tags --json
```

- Record exact stable versions in `docs/DECISIONS.md`.
- Stop if stable TypeScript is not 7.x or any selected release is beta, RC, canary, preview, or nightly.

#### P1-T04 — Finalize Phase 1 documents

- Depends on: P1-T02, P1-T03.
- Update `docs/IMPLEMENTATION_PLAN.md`, `docs/DECISIONS.md`, and `docs/PROGRESS.md`.
- Acceptance: unresolved business information remains pending rather than invented; Phase 2 prerequisites are explicit.

#### P1-T05 — Phase 1 gate and stop

- Depends on: P1-T04.
- Report documents changed, version results, asset-path status, unresolved issues, and `P2 — Scaffold` as the next phase.
- Do not create application or package files during Phase 1.

### P2 — Scaffold, typed data, assets, and smoke tests

#### P2-T01 — Create the pinned npm manifest

- Depends on: P1-T05 and canonical reference assets being present.
- Create the configuration files listed above.
- Use npm, exact version pins, strict TypeScript, and `engines.node >=22.12.0`.
- Runtime packages: React, React DOM, React Router DOM, Inter, Cormorant Garamond, and Great Vibes font packages.
- Development packages: TypeScript 7, Vite, React Vite plugin, Tailwind and its Vite plugin, Vitest, jsdom, Testing Library packages, Playwright, axe, and V8 coverage.

#### P2-T02 — Install and audit dependencies

- Depends on: P2-T01.
- Run `npm install`, then `npm ls`.
- Stop on prereleases, peer dependency errors, or a second main TypeScript compiler. Never downgrade TypeScript.

#### P2-T03 — Configure Vite, Tailwind, fonts, and global CSS

- Depends on: P2-T02.
- Create the application foundation files and implement the documented tokens, reset, fonts, focus treatment, and reduced-motion base.
- Use Tailwind's official Vite integration and CSS-first configuration. Do not add Bootstrap, a UI kit, CSS-in-JS, or an obsolete PostCSS setup.

#### P2-T04 — Create the routing shell

- Depends on: P2-T03.
- Define the exact four route outcomes and minimal one-`h1` placeholder pages.
- Add the Vercel SPA rewrite.

#### P2-T05 — Create typed content modules

- Depends on: P2-T01.
- Transcribe all confirmed content from `docs/CONTENT_SOURCE_OF_TRUTH.md` into the exact data modules.
- Add no business content to page components.

#### P2-T06 — Prepare official and placeholder assets

- Depends on: P1-T02.
- Copy `reference/logo/yhans-logo.png` to `src/assets/brand/yhans-logo.png`.
- Generate the temporary assets listed in `docs/ASSET_INVENTORY.md`; reject text, logos, watermarks, identifiable people, and misleading event claims.
- Import assets only through `src/data/gallery.ts`.

#### P2-T07 — Build environment-aware SEO foundations

- Depends on: P2-T03.
- Implement `VITE_SITE_URL` validation, route metadata, canonical paths, LocalBusiness JSON-LD, and generated sitemap/robots output.
- Do not hard-code a Vercel or custom domain.

#### P2-T08 — Configure initial tests

- Depends on: P2-T04, P2-T05.
- Configure Vitest with jsdom, Testing Library, Playwright Chromium, data validation tests, and a three-route smoke test.

#### P2-T09 — Phase 2 gate and stop

- Depends on: P2-T06, P2-T07, P2-T08.
- Run:

```powershell
npm run typecheck
npm run test -- src/data/content.test.ts
npm run build
npx playwright install chromium
npm run test:e2e -- e2e/navigation.spec.ts
```

- Acceptance: the applicable General, Content, and Testing criteria pass; all routes load; TypeScript 7 remains the main compiler.

### P3 — Shared foundation

#### P3-T01 — Layout primitives

- Depends on: P2-T09.
- Build `SkipLink`, `Container`, `SectionHeading`, `DecorativeDivider`, `ScrollToTop`, and `SiteLayout`.

#### P3-T02 — Image and icon primitives

- Depends on: P3-T01, P2-T06.
- Build typed `Icon` and `ResponsiveImage` with explicit geometry, eager hero mode, lazy default mode, correct alt behavior, and fallback handling.

#### P3-T03 — Action and card primitives

- Depends on: P3-T01.
- Build all listed UI primitives. External links opening new tabs require safe `rel` values and an accessible new-tab indication. Touch targets must be at least 44px.

#### P3-T04 — Header and mobile navigation

- Depends on: P3-T03.
- Implement active route state, keyboard/touch behavior, Escape/outside-click close, route-selection close, body scroll locking, focus restoration, `aria-current`, and `aria-expanded`.

#### P3-T05 — Footer

- Depends on: P3-T03.
- Render centralized business information and a dynamic current year. Do not copy mockup hours or dates.

#### P3-T06 — Metadata hooks

- Depends on: P2-T07.
- Implement route-specific title, description, canonical, and Open Graph updates without stale tags after navigation.

#### P3-T07 — Shared tests and gate

- Depends on: P3-T04, P3-T05, P3-T06.
- Create the listed shared component tests and initial mobile E2E coverage.
- Run:

```powershell
npm run typecheck
npm run test -- src/components
npm run build
npm run test:e2e -- e2e/navigation.spec.ts e2e/mobile.spec.ts
```

- Acceptance: Header, Footer, navigation, base accessibility, and safe-link criteria pass. Update logs and stop.

### P4 — Home page

#### P4-T01 — Home hero

- Depends on: P3-T07.
- Build `HomeHero` with the approved `h1`, supporting copy, three exact CTAs, and the placeholder buffet hero.

#### P4-T02 — Occasion and service grids

- Depends on: P4-T01.
- Build `OccasionGrid` and `ServicesGrid` from typed data and custom icons.

#### P4-T03 — Popular choices and trust section

- Depends on: P4-T02.
- Build `PopularChoices` and `WhyChooseYhans`. Only Pork Menudo may carry an explicit best-seller claim.

#### P4-T04 — Recent-event placeholders and CTA

- Depends on: P4-T03.
- Build `RecentEvents` and the final `CtaBand`. Add a neutral sample-image disclosure; invent no event names, customers, venues, dates, or testimonials.

#### P4-T05 — Compose and test HomePage

- Depends on: P4-T04, P3-T06.
- Compose sections in mockup order, add exact route metadata, and include confirmed LocalBusiness JSON-LD once.
- Create `HomePage.test.tsx` and `e2e/home.spec.ts`.
- Run:

```powershell
npm run typecheck
npm run test -- src/pages/HomePage.test.tsx
npm run build
npm run test:e2e -- e2e/home.spec.ts
```

- Acceptance: every Home criterion and its relevant cross-cutting criteria pass. Update logs and stop.

### P5 — Packages and Services page

#### P5-T01 — Packages hero and regular packages

- Depends on: P4-T05.
- Build `PackagesHero` and `RegularPackagesSection` from typed package data.
- Never show regular per-head pricing, serving staff, or an unconfirmed additional-guest rate.

#### P5-T02 — Grazing packages and inclusions

- Depends on: P5-T01.
- Build `GrazingPackagesSection` and `GrazingInclusions` with exact menus, categorized inclusions, and the Package B Pork Menudo marker.

#### P5-T03 — Estimator domain and UI

- Depends on: P5-T02.
- Implement and test `clampGuestCount` and `calculateGrazingEstimate`; then build `GrazingEstimator` with labelled input, plus/minus controls, accessible result, peso formatting, limits 50–600, and the estimate disclaimer.
- Do not build a regular-package estimator.

#### P5-T04 — Packed meals and food trays

- Depends on: P5-T01.
- Build the two sections with exact approved samples, price wording, unknown-detail wording, and Facebook CTA. Food trays must expose no price.

#### P5-T05 — Partner services and customization

- Depends on: P5-T04.
- Build `AdditionalServicesSection` and `CustomizationNote`; label services as partner-arranged and omit pricing.

#### P5-T06 — Compose and test PackagesPage

- Depends on: P5-T03, P5-T05.
- Compose sections in documented order, add route metadata, tests, and final CTA.
- Run:

```powershell
npm run typecheck
npm run test -- src/features/grazing-estimator src/pages/PackagesPage.test.tsx src/data/content.test.ts
npm run build
npm run test:e2e -- e2e/packages.spec.ts
```

- Test estimates for 50, 75, 100, below-minimum, above-maximum, and invalid values. Accept every Packages criterion, update logs, and stop.

### P6 — About and Contact page

#### P6-T01 — Hero, story, and highlights

- Depends on: P5-T06.
- Build `AboutHero`, `StorySection`, and `HighlightsGrid` from approved facts. Publish no investment amount or registration number.

#### P6-T02 — Catered events and service areas

- Depends on: P6-T01.
- Build `WhatWeCater` and `ServiceAreasSection`; include Inductions and approved farther-location wording without fees.

#### P6-T03 — Booking process

- Depends on: P6-T02.
- Build the exact five-step sequence, 70% down payment, three-day balance timing, and contract-governed policy note.

#### P6-T04 — Contact and helpful information

- Depends on: P6-T03.
- Build `ContactSection` and `HelpfulInformationSection` from typed data. Use direct links and no form.

#### P6-T05 — Compose and test AboutContactPage

- Depends on: P6-T04.
- Add final CTA, metadata, component tests, link tests, and `e2e/about-contact.spec.ts`.
- Run:

```powershell
npm run typecheck
npm run test -- src/pages/AboutContactPage.test.tsx src/components/ui/ContactCard.test.tsx src/utils/links.test.ts
npm run build
npm run test:e2e -- e2e/about-contact.spec.ts
```

- Acceptance: every About & Contact criterion, exact hrefs, no form, and no invented policy pass. Update logs and stop.

### P7 — Responsive, accessibility, and visual refinement

#### P7-T01 — Responsive geometry audit

- Depends on: P6-T05.
- Test 360×800, 375×812, 390×844, 768×1024, 1024×768, and 1440×900.
- Remove overflow, clipping, image distortion, overlapping decorations, fixed-height failures, and unreadable wrapping.

#### P7-T02 — Mobile interaction audit

- Depends on: P7-T01.
- Verify menu focus behavior, scroll lock, touch targets, CTA sizing, package stacking, inclusion grouping, long email/address wrapping, and footer order.

#### P7-T03 — Semantic accessibility audit

- Depends on: P7-T02.
- Verify landmarks, one `h1`, heading order, alt handling, decorative SVG hiding, active state, expanded state, non-color cues, contrast, visible focus, reduced motion, and accessible names.

#### P7-T04 — Automated accessibility and reliability

- Depends on: P7-T03.
- Build `e2e/accessibility.spec.ts`; fail on serious/critical axe findings, page errors, console errors, failed local assets, empty image sources, or horizontal overflow.

#### P7-T05 — Mockup comparison and gate

- Depends on: P7-T04.
- Compare all routes with the corresponding generated mockups; refine spacing, typography, proportions, dividers, CTA bands, and footer balance without sacrificing usability.
- Check 200% zoom manually.
- Run:

```powershell
npm run typecheck
npm run test
npm run build
npm run test:e2e -- e2e/mobile.spec.ts e2e/accessibility.spec.ts
```

- Acceptance: every Responsive and Accessibility criterion passes. Update logs and stop.

### P8 — Complete tests, CI, and README

#### P8-T01 — Complete data and utility tests

- Depends on: P7-T05.
- Cover every content/data and utility case required by the Phase 8 prompt, including forbidden-content absence.

#### P8-T02 — Complete component tests

- Depends on: P8-T01.
- Finish behavior coverage for Header, MobileNavigation, Footer, ButtonLink, PackageCard, GrazingEstimator, ContactCard, and ResponsiveImage.

#### P8-T03 — Complete E2E coverage

- Depends on: P8-T02.
- Cover direct routes, active state, history, not-found behavior, all CTA hrefs, mobile usability, accessibility, SPA navigation, images, overflow, and browser errors.

#### P8-T04 — Coverage and CI

- Depends on: P8-T03.
- Configure V8 thresholds: statements 75%, branches 65%, functions 75%, lines 75%.
- Create `.github/workflows/ci.yml` with `.nvmrc`, npm cache, `npm ci`, typecheck, tests, coverage, build, Chromium install, E2E, and failure-only Playwright report upload.
- Do not add a lint step unless Phase 1 recorded a compatible linter.

#### P8-T05 — README and gate

- Depends on: P8-T04.
- Document purpose, stack, prerequisites, scripts, content updates, contact/package updates, placeholder replacement, `VITE_SITE_URL`, testing, and Vercel deployment.
- Run:

```powershell
npm ci
npm run typecheck
npm run test
npm run test:coverage
npm run build
npm run test:e2e
```

- Acceptance: every Testing and README criterion passes. Update logs and stop.

### P9 — Final QA and production readiness

#### P9-T01 — Line-by-line content audit

- Depends on: P8-T05.
- Compare every visible and structured fact against `docs/CONTENT_SOURCE_OF_TRUTH.md`; remove all invented or mockup-only content.

#### P9-T02 — Asset audit

- Depends on: P9-T01.
- Verify logo integrity, image loading, dimensions, aspect ratios, alt behavior, fallback, lazy/eager behavior, and absence of reference screenshot/mockup imports.
- Record every remaining placeholder in `docs/PROGRESS.md` and `docs/ASSET_INVENTORY.md`.

#### P9-T03 — Final visual and interaction audit

- Depends on: P9-T02.
- Repeat every viewport, 200% zoom, keyboard traversal, menu behavior, CTA behavior, footer layout, and mockup comparison.

#### P9-T04 — Dependency and repository audit

- Depends on: P9-T03.
- Confirm TypeScript 7 is the sole main compiler, all packages are stable, and there are no secrets, unexplained suppressions, obsolete scaffold files, broken links, or accidental large assets.

#### P9-T05 — Production SEO and routing validation

- Depends on: P9-T04 and an approved production origin.
- Set `VITE_SITE_URL`, build, inspect canonical/Open Graph/JSON-LD output plus emitted robots/sitemap files, and verify direct refreshes on `/packages` and `/about-contact`.
- Stop if the production origin is unavailable.

#### P9-T06 — Final gate and handoff

- Depends on: P9-T05.
- Run:

```powershell
npm ls
npm run typecheck
npm run test
npm run test:coverage
npm run build
npm run test:e2e
```

- Every checkbox in `docs/ACCEPTANCE_CRITERIA.md` must pass or be explicitly identified as an owner-content launch blocker. Technical, route, content, accessibility, and test failures cannot be waived.
- Update all documentation, report final versions/results/deployment steps/risks, and make no further changes without a new request.

### P10 — GitHub Push and Vercel Deployment

#### P10-T01 — Confirm Phase 9 approval

- Depends on: P9-T06 and explicit approval to begin Phase 10.
- Verify that every Phase 9 technical gate passed.
- Confirm that remaining issues are only documented owner-content items or accepted dependency warnings.
- Do not deploy if typecheck, tests, coverage, build, E2E, accessibility, or production SEO validation is failing.

#### P10-T02 — Run the final local gate

- Depends on: P10-T01.
- Run:

```powershell
npm ci
npm run typecheck
npm run test
npm run test:coverage
npm run build
npm run test:e2e
```

- Stop immediately if any command fails.

#### P10-T03 — Audit files before Git push

- Depends on: P10-T02.
- Verify that the following are excluded:
  - `node_modules/`
  - `dist/`
  - `coverage/`
  - `test-results/`
  - `playwright-report/`
  - `.env`
  - `.env.local`
  - `.env.production`
  - Vercel local metadata, including `.vercel/`
  - secrets
  - API keys
  - tokens
  - temporary files
- Keep `.env.example`.
- Follow `docs/ASSET_INVENTORY.md` for whether reference mockups and screenshots should be committed.

#### P10-T04 — Connect the GitHub repository

- Depends on: P10-T03.
- Repository: `https://github.com/potatsukki/yhans-catering-services`.
- Owner: `potatsukki`.
- Repository name: `yhans-catering-services`.
- Default and production branch: `main`.
- The repository is currently empty.
- Use the existing repository only.
- Do not create another repository.
- Do not create a pull request.
- Do not force-push.

#### P10-T05 — Create and push the initial production commit

- Depends on: P10-T04.
- Initialize Git only if necessary.
- Ensure `origin` points to `https://github.com/potatsukki/yhans-catering-services.git`.
- Review `git status` and `git diff --stat`.
- Stage approved project files.
- Commit message: `feat: launch Yhan's Catering Services website`.
- Push to `origin/main`.
- Verify the remote commit exists.

#### P10-T06 — Create or connect the Vercel project

- Depends on: P10-T05.
- Use the connected Vercel plugin.
- Project name: `yhans-catering-services`.
- Connect `potatsukki/yhans-catering-services`.
- Production branch: `main`.
- Framework: Vite.
- Root directory: repository root.
- Install command: `npm ci`.
- Build command: `npm run build`.
- Output directory: `dist`.
- Use the Node version compatible with `.nvmrc` and `package.json`.
- Do not create a duplicate Vercel project if one is already connected to this repository.

#### P10-T07 — Configure VITE_SITE_URL

- Depends on: P10-T06.
- Retrieve the real production HTTPS origin assigned by Vercel.
- Do not guess or hard-code a provisional domain.
- Set `VITE_SITE_URL` in the Vercel Production environment.
- The value must:
  - begin with `https://`;
  - contain no path;
  - contain no trailing slash.
- Use the exact assigned production origin.

#### P10-T08 — Trigger production deployment

- Depends on: P10-T07.
- Deploy the `main` branch through the connected Vercel project.
- Wait for the deployment result.
- If deployment fails:
  - inspect the logs;
  - fix only the smallest root cause;
  - rerun the full local gate;
  - commit and push the fix;
  - redeploy.
- Do not disable TypeScript checks, tests, accessibility checks, or `VITE_SITE_URL` validation.

#### P10-T09 — Verify the deployed website

- Depends on: P10-T08.
- Check:
  - `/`
  - `/packages`
  - `/about-contact`
  - `/robots.txt`
  - `/sitemap.xml`
- Verify:
  - all routes load;
  - direct refresh works on `/packages`;
  - direct refresh works on `/about-contact`;
  - no route returns an unexpected 404;
  - canonical URLs use the final Vercel origin;
  - Open Graph URLs use the final Vercel origin;
  - LocalBusiness JSON-LD uses only confirmed information;
  - `sitemap.xml` uses the final origin;
  - `robots.txt` loads;
  - logo and local assets load;
  - Facebook links are correct;
  - phone links are correct;
  - email links are correct;
  - there are no browser console errors;
  - there is no mobile horizontal overflow.

#### P10-T10 — Record production deployment

- Depends on: P10-T09.
- Update:
  - `docs/DECISIONS.md`
  - `docs/PROGRESS.md`
  - `README.md`
- Record:
  - GitHub repository URL;
  - production branch;
  - Git commit SHA;
  - Vercel project name;
  - production URL;
  - `VITE_SITE_URL`;
  - deployment date;
  - final validation results;
  - placeholder assets still pending;
  - owner confirmations still pending;
  - known dependency or audit warnings.
- Commit message: `docs: record production deployment`.
- Push the documentation commit to `main` and verify the resulting Vercel deployment succeeds.

#### P10-T11 — Phase 10 final report

- Depends on: P10-T10.
- Report:
  - GitHub repository URL;
  - pushed branch;
  - commit SHAs;
  - Vercel project name;
  - final production URL;
  - configured `VITE_SITE_URL`;
  - deployment status;
  - commands executed;
  - final test results;
  - production route checks;
  - pending owner-content items;
  - remaining security or dependency warnings.
- Stop after the report; do not make further production changes without a new request.

## Prohibited changes

- No backend, API, database, authentication, admin area, account system, CMS, booking engine, checkout, payment processing, or website inquiry form.
- No additional main routes, alternate router, alternate package manager, alternate deployment target, or alternate framework.
- No beta, RC, canary, preview, or nightly dependencies.
- No TypeScript downgrade, hidden test skip, weakened assertion, unexplained suppression, or disabled accessibility rule.
- No Bootstrap, generic UI kit, heavy component library, CSS-in-JS, or speculative state management.
- No duplicated business content in components.
- No invented prices, inclusions, menus, limits, fees, policies, claims, rankings, testimonials, ratings, discounts, or partner terms.
- No bank, GCash, DTI, or BIR account/registration numbers.
- No production use or cropping of the full-page mockups, original UI screenshot, or Facebook screenshot.
- No claim that a generated image is a real event, customer, venue, or completed Yhan's project.
- No regular-package estimator.
- No silent phase combination.
- No Phase 10 execution before P9-T06 passes and explicit approval is received.
- No duplicate GitHub repository, duplicate Vercel project, pull request, or force-push for the initial production launch.
- No guessed or provisional production origin in `VITE_SITE_URL`.

## Stop conditions

Stop and report without starting dependent work if:

- Stable TypeScript is not 7.x.
- A required dependency is prerelease-only or has an unresolved TypeScript 7 incompatibility.
- Canonical root-level reference assets are unavailable at the start of Phase 2.
- Written source documents contradict each other on a public business fact.
- Completion would require inventing owner information.
- A generated image remains unsafe or misleading after two corrected attempts.
- Typecheck, tests, build, E2E, or required accessibility checks fail.
- Serious or critical axe violations remain.
- Direct Vercel route refresh cannot be made reliable.
- A production build lacks a valid HTTPS `VITE_SITE_URL`.
- Phase 9 has not passed or Phase 10 has not received explicit approval.
- The Git remote or Vercel project does not match the approved repository and project identifiers.
- Secrets, local environment files, generated validation directories, or Vercel local metadata would be included in the push.
- Existing user changes overlap required files and cannot be preserved.
- A fix would expand the approved product scope.

## Failure handling

1. Keep the failure inside the active phase and do not begin dependent tasks.
2. Record the failing command, concise error, affected files, and attempted correction in `docs/PROGRESS.md`.
3. Fix the smallest root cause, rerun the targeted check, then rerun the complete phase gate.
4. Never mask failures with skips, long arbitrary waits, relaxed assertions, TypeScript suppression, disabled accessibility rules, or dependency downgrades.
5. For dependency failures, recheck official stable dist-tags and compatibility documentation; record the decision.
6. For content uncertainty, omit the claim and request owner confirmation if the documented section cannot otherwise be completed.
7. For image failures, retain `ResponsiveImage` fallback behavior and regenerate only the affected placeholder.
8. For E2E flakiness, reproduce in isolation and replace timing assumptions with observable conditions.
9. Missing `VITE_SITE_URL` may use localhost during development but blocks production validation and deployment.
10. Every phase report must name exactly one next phase.

## Final acceptance rule

The website is deployment-ready only when all commands in P9-T06 pass, every applicable pre-deployment checkbox in `docs/ACCEPTANCE_CRITERIA.md` is satisfied, and Phase 9 receives explicit approval. Production launch is complete only when P10-T01 through P10-T11 pass, the approved GitHub and Vercel targets are verified, direct production route refresh works, production SEO uses the assigned HTTPS origin, and all temporary assets or owner confirmations are explicitly disclosed.

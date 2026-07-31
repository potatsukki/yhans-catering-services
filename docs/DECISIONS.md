# Decisions Log

## D-001 — Source precedence

- Status: Approved.
- `docs/CONTENT_SOURCE_OF_TRUTH.md` controls facts; `docs/ARCHITECTURE.md` controls technical behavior; mockups plus `docs/DESIGN_SYSTEM.md` control presentation; `docs/ACCEPTANCE_CRITERIA.md` controls release.
- Mockup text never overrides written sources.

## D-002 — Product boundary

- Status: Approved.
- Static three-page React marketing website plus a not-found fallback.
- No backend, authentication, database, dashboard, CMS, booking engine, checkout, payment processing, customer account, or website inquiry form.
- Conversion actions use Facebook, email, and phone/Viber links.

## D-003 — Canonical reference paths

- Status: Approved.
- Use `reference/logo/`, `reference/mockups/`, and `reference/screenshots/` in all planning and implementation documentation.
- `reference/screenshots/facebook-page.jpg` is evidence only and prohibited from production use.

## D-004 — Stable package versions verified and installed on 2026-07-31

- Status: Approved for Phase 2, subject to recheck if implementation starts later.
- Node available during discovery: `22.19.0`.
- npm available during discovery: `10.9.3`.
- TypeScript: `7.0.2`.
- React: `19.2.8`.
- React DOM: `19.2.8`.
- Vite: `8.2.0`.
- `@vitejs/plugin-react`: `6.0.5`.
- Tailwind CSS: `4.3.3`.
- `@tailwindcss/vite`: `4.3.3`.
- React Router DOM: `7.18.2`.
- Vitest: `4.1.10`.
- Playwright: `1.62.1`.
- React Testing Library: `16.3.2`.
- `@testing-library/jest-dom`: `7.0.0`.
- `@testing-library/user-event`: `14.6.1`.
- `@fontsource/inter`: `5.3.0`.
- `@fontsource/cormorant-garamond`: `5.3.0`.
- `@fontsource/great-vibes`: `5.3.0`.
- `@types/node`: `26.1.2`.
- `@types/react`: `19.2.18`.
- `@types/react-dom`: `19.2.4`.
- `@vitest/coverage-v8`: `4.1.10`.
- jsdom: `29.0.1`.
- `@axe-core/playwright`: `4.12.1`.
- All listed releases resolved from stable npm versions; no prerelease was selected.
- TypeScript 7 remains the main compiler and must not be downgraded.

## D-005 — Placeholder photography

- Status: Approved.
- Use AI-generated local prototype imagery under `src/assets/images/placeholders/`.
- Treat every generated asset as temporary and replaceable.
- Do not present synthetic images as real Yhan's events, customers, venues, or completed work.
- Record every placeholder in `docs/ASSET_INVENTORY.md` and `docs/PROGRESS.md`.

## D-006 — Canonical production origin

- Status: Approved.
- Use `VITE_SITE_URL` for canonical URLs, sitemap, robots references, Open Graph URLs, and JSON-LD.
- Development may fall back to localhost.
- Vercel production validation must fail if the value is missing, relative, or not HTTPS.
- Do not hard-code a provisional Vercel URL or custom domain.

## D-007 — Styling and fonts

- Status: Approved.
- Use Tailwind's official Vite integration and CSS-first theme tokens.
- Use Inter for body/control text, Cormorant Garamond for display headings, and Great Vibes sparingly for accents.
- No Bootstrap, generic UI kit, heavy component library, CSS-in-JS, or unnecessary design-system dependency.

## D-008 — Linting compatibility

- Status: Deferred.
- Do not add a linter by default. Add one only after verifying stable TypeScript 7 compatibility.
- CI omits lint when no compatible linter is configured.

## D-009 — Content centralization

- Status: Approved.
- All business facts, navigation, packages, services, events, booking steps, CTAs, and asset references live in typed data modules.
- Page and section components consume data and must not duplicate business content.

## D-010 — Phase execution

- Status: Approved.
- Follow P1 through P10 sequentially from `docs/LUNA_EXECUTION_PLAN.md`.
- Each phase requires its exact validation gate, documentation update, report, and stop.

## D-011 — Node-compatible jsdom pin

- Status: Approved for Phase 2.
- The first `npm install` resolution selected `jsdom@30.0.1`, which warned that the available Node `22.19.0` runtime was below jsdom 30's declared `^22.22.2` minimum.
- Pin `jsdom@29.0.1`, the latest stable Node-22-compatible release verified for this scaffold. Keep TypeScript 7 and all other approved stable versions unchanged.
- npm reports two high-severity audit findings after installation. Do not run a forced audit fix or silently change the approved dependency set; investigate and resolve before release if required.

## D-012 — Phase 2 route smoke expectation

- Status: Approved.
- The `/packages` Phase 2 placeholder page uses the exact heading `Packages & Services`; the Playwright smoke test asserts that heading rather than inventing a shortened label.

## D-013 — React Router audit risk retained for Phase 3

- Status: Risk accepted temporarily; release blocker remains.
- `npm audit --json` reports two high-severity advisories through the pinned `react-router-dom@7.18.2` and its `react-router` dependency: `GHSA-qwww-vcr4-c8h2` (RSC Mode CSRF bypass allowing action execution before a 400 response), affecting `react-router` `>=7.12.0 <8.3.0`.
- npm reports `react-router-dom@7.11.0` as the available fix, which is outside the approved pinned dependency decision and would be a downgrade/breaking compatibility change. No forced, breaking, or unplanned dependency change was made during Phase 3.
- Reassess the advisory before production release; do not run `npm audit fix --force`.

## D-014 — Shared foundation boundary

- Status: Approved for Phase 3.
- Phase 3 adds only reusable layout/UI primitives, route metadata behavior, header/mobile navigation, footer, image fallback, custom SVG icons, and their tests. The three page bodies remain minimal placeholders until Phase 4 onward.

## D-015 — Home page content and placeholder boundary

- Status: Approved for Phase 4.
- Home sections consume centralized typed data and use the approved mockup order without adding Packages or About page content.
- Pork Menudo is the only Home highlight marked `Best seller`; Beef Caldereta is presented without a sales-ranking claim.
- Generated event/gallery images remain temporary and are paired with a neutral replacement disclosure. No event names, customer names, venues, dates, testimonials, or ratings are invented.
- Home emits the confirmed LocalBusiness JSON-LD block once; route metadata continues to come from the shared centralized metadata behavior.
- Home quote and Facebook CTAs reuse the typed navigation CTA definitions rather than duplicating business URLs in page components.

## D-016 — Packages page pricing and estimator boundary

- Status: Approved for Phase 5.
- Regular Packages 01–03 remain fixed ₱30,000 packages good for 50 guests; no per-head, serving-staff, or additional-head price is published.
- Grazing packages remain ₱1,000 per guest with a 50-guest minimum and confirmed tables-and-chairs inclusion. The estimator clamps input to 50–600 and labels totals as estimates.
- Only Pork Menudo in Grazing Package B receives the `Best seller` marker. Food trays expose no price, and additional services remain partner-arranged with no partner pricing.

## D-017 — Phase 5 task numbering discrepancy

- Status: Noted.
- The current `docs/LUNA_EXECUTION_PLAN.md` contains P5-T01 through P5-T06 only; no P5-T07 or P5-T08 definitions are present. Phase 5 followed every documented task and ran the documented P5-T06 gate without inventing additional work.

## D-018 — Phase 6 task numbering discrepancy

- Status: Noted.
- The current `docs/LUNA_EXECUTION_PLAN.md` contains P6-T01 through P6-T05 only; no P6-T06 or P6-T07 definitions are present. Phase 6 followed every documented task and executed the documented P6-T05 validation gate requested as P6-T07, without inventing additional scope or rebuilding Phase 5. The P5-T07/P5-T08 inconsistency remains documentation-only as recorded in D-017.

## D-019 — Phase 7 task numbering discrepancy

- Status: Noted.
- The current `docs/LUNA_EXECUTION_PLAN.md` contains P7-T01 through P7-T05 only; no P7-T06 definition is present. Phase 7 followed every documented task and executed the documented P7-T05 validation gate requested as P7-T06, without inventing undocumented scope.

## D-020 — Phase 7 CTA contrast correction

- Status: Approved for Phase 7.
- Axe identified serious CTA text-contrast violations caused by inherited text colors. `ButtonLink` now applies the approved cream and burgundy text tokens with important utilities for primary, secondary, and tertiary variants. This is a presentation/accessibility correction only; no factual content, architecture, dependency, or route behavior changed.

## D-021 — Phase 8 task numbering discrepancy

- Status: Noted.
- The current `docs/LUNA_EXECUTION_PLAN.md` contains P8-T01 through P8-T05 only; no P8-T06, P8-T07, or P8-T08 definitions are present. Phase 8 completed all documented tasks and executed the documented P8-T05 gate requested as P8-T08, without inventing undocumented scope.

## D-022 — Phase 8 coverage and CI configuration

- Status: Approved for Phase 8.
- Vitest uses the V8 provider with thresholds of 75% statements, 65% branches, 75% functions, and 75% lines. GitHub Actions uses `.nvmrc`, npm caching, `npm ci`, typecheck, unit tests, coverage, build, Chromium installation, and Playwright. The Playwright report is uploaded only when the E2E step fails; no unapproved lint step or dependency change was added.

## D-023 — Phase 10 deployment authorization gate

- Status: Authorized on 2026-08-01 after the complete Phase 9 gate passed.
- Deployment may begin only after every P9-T06 technical gate passes, remaining issues are limited to documented owner-content items or accepted dependency warnings, and explicit approval to execute Phase 10 is received.
- The approved GitHub target is the existing empty repository `https://github.com/potatsukki/yhans-catering-services` on `main`; do not create another repository, open a pull request, or force-push.
- The approved Vercel target is one project named `yhans-catering-services`, connected to `potatsukki/yhans-catering-services` with `main` as the production branch. Use the real assigned HTTPS origin for `VITE_SITE_URL`; never guess a provisional domain.
- The user explicitly approved Phase 10 execution. Direct initial publication to `main` remains the approved exception to the GitHub publishing skill's usual feature-branch/PR flow because the execution plan expressly prohibits a pull request for this empty-repository launch.

## D-024 — Phase 8 revalidation after Phase 10 planning

- Status: Approved for Phase 8 documentation.
- The already-complete Phase 8 implementation was rechecked and its full six-command validation gate was rerun after Phase 10 was added to the plan. All checks passed without implementation or dependency changes.
- D-021 remains authoritative for the requested P8-T01-through-P8-T08 label mismatch: only P8-T01 through P8-T05 are defined, and no undocumented tasks were invented.
- Revalidating Phase 8 does not advance Phase 9 or authorize Phase 10. D-023 remains in force, and Phase 10 stays pending until P9-T06 passes and explicit approval is received.

## D-025 — Resolve the Vite native-config warning

- Status: Approved for Phase 9.
- The two local imports in `vite.config.ts` use explicit `.ts` extensions. `tsconfig.node.json` already enables `allowImportingTsExtensions`, so this removes the Vite warning without changing runtime behavior, application architecture, or dependencies.

## D-026 — Phase 9 production-origin stop condition

- Status: Resolved by explicit user-approved sequencing amendment.
- P9-T01 through P9-T04 passed before the production-origin dependency was reached. The user then expressly authorized creation of the single planned Vercel project to obtain its assigned origin before the GitHub push.
- The assigned origin is `https://yhans-catering-services.vercel.app`. P9-T05 and the full P9-T06 gate passed against that origin; no provisional domain was guessed.

## D-027 — Vercel production-origin resolution

- Status: Approved.
- An explicit `VITE_SITE_URL` remains the highest-priority production override. On Vercel, the build may use the platform-provided `VERCEL_PROJECT_PRODUCTION_URL`, exposed to Vite as `VITE_VERCEL_PROJECT_PRODUCTION_URL`, when the explicit override is absent.
- Both paths use the same HTTPS-origin validation and feed canonical, Open Graph, JSON-LD, robots, and sitemap output.

## D-028 — Production image optimization

- Status: Approved for Phase 9.
- The fifteen generated temporary placeholder PNGs were replaced by same-dimension WebP equivalents and the superseded PNG files were removed after verification. This changes transport size and format only; all temporary-image disclosures and replacement requirements remain.
- `reference/logo/yhans-logo.png` and `src/assets/brand/yhans-logo.png` remain byte-identical. `public/favicon.png` is a correctly proportioned 512×171 optimized derivative of the official logo.

## D-029 — GitHub authorization stop condition

- Status: Resolved on 2026-08-01 with owner approval.
- The approved repository was empty and correctly identified, but the active GitHub CLI account `sean-camara` initially had only `READ` permission. The authenticated `potatsukki` owner account sent a repository collaborator invitation, and `sean-camara` accepted it through the existing GitHub CLI session.
- The target now reports `viewerPermission: WRITE`. The repository, owner, and branch remain exactly as approved; no alternate repository or access-control bypass was used.

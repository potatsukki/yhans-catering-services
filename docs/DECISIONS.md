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
- The `/packages` Phase 2 placeholder page uses the exact heading `Menu`; the Playwright smoke test asserts that heading rather than inventing a shortened label.

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

- Status: Superseded as the final production target by D-030.
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

## D-030 — Final Vercel team and production target

- Status: Approved by explicit user direction on 2026-08-01.
- The final launch target is the Git-connected project `yhans-catering-services` in the `potatsukki-7878s-projects` Vercel team, connected to `potatsukki/yhans-catering-services` on production branch `main`.
- The final assigned production origin and production `VITE_SITE_URL` are `https://yhans-catering-services-eight.vercel.app`.
- This supersedes the earlier `seans-projects-4f512072/yhans-catering-services` project as the deployment target. That earlier project was retained without deletion or transfer because no such change was authorized.

## D-031 — Mockup-aligned visual density refinement

- Status: Approved by the owner's direct visual-refinement request on 2026-08-01.
- Use the generated mockups' 1180px editorial density, shallower image crops, compact warm-border cards, split desktop package layouts, stronger hero/header proportions, shallow CTA bands, and structured footer columns as the shared presentation target.
- Preserve the existing semantic structure, centralized confirmed content, responsive stacking, reduced-motion behavior, and tested interactive-size requirements. Visual similarity never overrides factual correctness or accessibility.
- The final visual audit estimates an overall 88% mockup match after the owner's targeted follow-up. Remaining differences are documented in `docs/VISUAL_AUDIT_REPORT.md` and are primarily approved-content and temporary-asset constraints.

## D-032 — Owner-directed hero, package-card, and estimator follow-up

- Status: Approved by direct visual feedback on 2026-08-01.
- The Home buffet image fills the hero background behind a cream readability gradient; the headline uses a smaller responsive maximum so it no longer dominates the initial viewport.
- The regular-package inclusions heading is centered above its list, grazing package cards use image-first stacked composition, and the footer quote action remains compact and single-line without reducing its accessible target size.
- The optional grazing estimator is no longer rendered on the Packages route. Confirmed grazing pricing, the 50-guest minimum, and direct-confirmation wording remain visible; the calculation modules remain isolated and tested rather than being destructively removed.

## D-033 — Owner-directed hero parity, motion, and testimonial safeguards

- Status: Approved by direct visual feedback on 2026-08-01.
-- Menu and About & Contact use the same full-background buffet-image hero treatment as Home, with route-specific confirmed copy protected by a cream contrast gradient.
- The header animates out while scrolling down and returns while scrolling up or when keyboard focus enters it. Section reveal motion uses translation only, not opacity, so text and controls retain compliant contrast throughout the animation. All new motion respects the existing reduced-motion preference.
- The Home page includes four testimonial placeholders because no customer quotations, names, or ratings have been approved. Every card explicitly says that approved customer feedback will be added and remains pending owner approval. Real testimonials must replace these only after the owner supplies and approves them.
- The About final CTA exposes only the Facebook message action because the removed Request a Quote action used the same Facebook destination. No contact channel or confirmed business fact was removed.

## D-034 — Owner-directed CTA deduplication and occasion marquee

- Status: Approved by direct visual feedback on 2026-08-01.
-- The Home hero now exposes `View Menu` and one `Message Us on Facebook` action; the former Request a Quote action used the same Facebook destination and was relabeled instead of retaining two duplicate Facebook controls.
-- The Menu final CTA now exposes only `Message Us on Facebook` for the same deduplication reason. Header and footer navigation retain their existing Request a Quote links because the owner comments targeted the page CTA bands, not global navigation.
- Home occasions use a single-line, slow left-to-right marquee that pauses on hover or focus. A duplicate visual track makes the loop seamless, is hidden from assistive technology, and becomes a static horizontally scrollable row when reduced motion is requested.
- The visible grazing-card Best Seller badge is suppressed at the owner's direction. The confirmed Pork Menudo best-seller fact remains unchanged in centralized package data and in the approved Home Popular Choices presentation.

## D-035 — Owner-directed mobile content density and horizontal scrollers

- Status: Approved by direct visual feedback on 2026-08-01.
- On mobile, the Home hero no longer places an opaque cream card over the buffet photograph. A transparent content wrapper and lighter directional gradient preserve text contrast while allowing the image to remain visible.
- Services and testimonial placeholders use native horizontal scrolling with snap points below the desktop breakpoint. Desktop retains the approved four-column grids. These regions do not auto-scroll, preserving predictable touch, keyboard, and reduced-motion behavior.
- Service image icon overlays were removed so the temporary photographs remain unobstructed. Popular Choices uses two columns on mobile, and occasion cards use reduced mobile dimensions while retaining the continuous marquee behavior.
- The Home final CTA now exposes only `Message Us on Facebook`; its removed Request a Quote action used the same Facebook destination. The global header and footer navigation remain unchanged because the owner comment targeted the Home CTA band.

## D-036 — Owner-directed Packages and About mobile layout refinement

- Status: Approved by direct visual feedback on 2026-08-01.
- The Packages and About & Contact mobile heroes use transparent content wrappers over lighter cream-to-transparent image gradients so the buffet photograph remains visible while confirmed headings and descriptions retain readable contrast.
- Regular Catering Packages, Packed Meals, and the Booking Process use native horizontal snap scrollers on mobile. Grazing packages, grazing inclusions, additional services, and About highlight cards use compact two-column mobile grids. Desktop layouts remain unchanged at their existing breakpoints.
- What We Cater uses the same slow, seamless left-to-right marquee pattern as Home occasions. It pauses on hover, keyboard focus, or an active touch hold; reduced-motion mode disables automatic movement and leaves a manually scrollable row.
- These changes reduce mobile page length without removing confirmed content. No business fact, price, menu item, contact detail, route, dependency, global architecture, or desktop presentation was changed.

## D-037 — Owner-directed grazing scroller and scrollbar refinement

- Status: Approved by direct visual feedback on 2026-08-01.
- Grazing package cards use a single-card horizontal snap scroller on mobile instead of the cramped two-column presentation. Large-screen grid behavior is retained.
- Regular package inclusions use two columns at the smallest breakpoint to use the card width efficiently while retaining four columns on large screens.
- The document scrollbar and all internal horizontal card scrollers use a rounded burgundy thumb on a cream track. Native scrolling behavior, keyboard access, touch interaction, and reduced-motion behavior are unchanged.

## D-038 — Owner-supplied About photography and founder profile

- Status: Approved by direct owner request and supplied assets on 2026-08-01.
- The temporary About story photograph is replaced by the owner-supplied Yhan's Catering Services crew photograph. A separate founder feature uses the owner-supplied portrait of Marianne P. Natanawan in chef uniform. Neither authentic image is labeled as sample imagery.
- Marianne's profile identifies her by the confirmed name and public role `Chef / Proprietor`. Its inspiring narrative is limited to confirmed or newly owner-supplied facts: the 2010 start, simple setup, limited equipment, humble beginnings, hard work, hands-on experience, continuous investment, and her leadership of the business's professional growth.
- No awards, rankings, celebrity claim, exact investment figure, culinary credential, customer claim, or unsupported biographical detail was added.
- Booking-step numbers are anchored at the top-left of each card instead of centered above the icon, improving the visual sequence in the horizontal mobile scroller.

## D-039 — Owner-supplied customer profiles and grazing-inclusions redesign

- Status: Approved by direct owner request on 2026-08-01; the pending-feedback restriction is superseded by D-040.
- The Testimonials section may display the four owner-supplied profile names and event categories: Glydel Anne Dabu — School Event; Yhen Natanawan — BPO Company; Jonathan Camara — Wedding; and Alexandra Alarcon — Birthday Celebration.
- Because no testimonial quotations were supplied, every profile retains neutral pending-feedback wording and a visible `Pending feedback approval` label. No quote, rating, endorsement, outcome, or event detail was invented.
- Grazing-table inclusions retain the confirmed centralized item lists and accessible Accordion behavior. Their presentation now uses custom category icons, item counts, decorated card surfaces, check-mark item pills, and a balanced responsive composition.
- The shared Accordion accepts optional button and panel class extensions so this richer treatment does not duplicate or replace its accessible state behavior.

## D-040 — Owner-approved feedback and tablet presentation refinement

- Status: Approved by direct owner request on 2026-08-01.
- The owner authorized complete feedback wording for the four named customer profiles. The exact published wording is recorded in `docs/CONTENT_SOURCE_OF_TRUTH.md`; pending labels and initial-letter profile icons are removed. Dates, venues, ratings, and additional event details remain prohibited unless confirmed.
- Home, Packages, and About hero content wrappers remain transparent at tablet widths. The prior tablet-only cream surface, padding, shadow, and backdrop blur are removed while the shared readability gradients remain.
- Regular package inclusions use a split burgundy-and-cream feature panel with a concise confirmed-package explanation and seven individual inclusion tiles. The centralized inclusion list remains unchanged.
- Dessert and savory grazing items use three-column mobile grids to reduce excess vertical length. Accordion semantics and every confirmed item remain unchanged.

## D-041 — Compositor-safe motion and Latin-only font delivery

- Status: Approved by direct owner performance request on 2026-08-01.
- Continuous marquee movement, section reveals, the scroll-aware header, and the mobile-menu entrance use compositor-friendly transforms. Animation timing remains browser-driven, allowing the browser to synchronize with 60 Hz, 90 Hz, or 120 Hz displays without a fixed JavaScript frame interval.
- Permanent GPU promotion is limited to the continuously moving marquee and the single scroll-aware header. Large page sections are not permanently promoted, avoiding excessive GPU memory use.
- The sticky header uses an opaque cream surface instead of backdrop blur, removing an expensive continuously resampled effect while scrolling. Reduced-motion behavior remains unchanged.
- Bundled font imports are restricted to the Latin subsets required by the site's confirmed English content. This reduced production CSS from 18.33 KB gzip to 9.08 KB gzip without changing typography or dependencies.

## D-042 — Initial refresh state and responsive scrollbar visibility

- Status: Approved by direct owner request on 2026-08-01.
- `index.html` provides a small branded `Preparing your celebration…` status indicator before the React bundle has loaded. It uses a transform-only spinner and honors `prefers-reduced-motion`; React replaces it as soon as the application mounts.
- The burgundy document scrollbar remains visible on desktop and laptop screens. On mobile and tablet widths below 1024px, browser scrollbars are visually hidden while native touch, wheel, keyboard, and programmatic scrolling remain available.
- Internal horizontal card scrollers remain visually scrollbar-free at every width, retaining their native swipe and snap behavior. This supersedes the mobile/tablet portion of D-037's internal-scrollbar appearance only.

## D-043 — Location map and availability-controlled food-tasting requests

- Status: Approved by direct owner request on 2026-08-01.
- The About & Contact route adds a `Where to Find Us` section after Direct Contact and before Helpful Information. It uses the owner-supplied Google Maps embed coordinates and official Google Maps page URL; no JavaScript Maps API, API key, map dependency, geolocation request, calendar, form, or reservation system is used.
- Address, hours, coordinates, map URLs, visit note, food-tasting wording, Facebook URL, and call action are centralized in `LOCATION_DETAILS`.
- Food tasting is presented only as a complimentary request for selected items, subject to availability. Marianne P. Natanawan arranges and confirms the final schedule; visitors cannot choose or reserve a tasting date or time.
- The duplicate Footer `Request a Quote` link is removed because it points to the same Facebook destination as existing inquiry actions.

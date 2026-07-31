# Acceptance Criteria

## General

- [ ] The project uses TypeScript 7 stable as the main compiler.
- [ ] React, Vite, Tailwind CSS, Vitest, and Playwright use latest stable releases available at installation.
- [ ] No beta, RC, canary, preview, or nightly dependencies are installed.
- [ ] The site has exactly three main public pages.
- [ ] Direct route refresh works on Vercel.
- [ ] The official logo is used without distortion.
- [ ] Generated mockups are followed closely without copying the original reference exactly.
- [ ] No backend, login, dashboard, database, booking engine, or online checkout is created.
- [ ] There is no website inquiry form.

## Content correctness

- [ ] Business name is Yhan's Catering Services.
- [ ] Established year is 2010.
- [ ] Tagline is “Making Every Celebration Delicious.”
- [ ] Contact details match `docs/CONTENT_SOURCE_OF_TRUTH.md`.
- [ ] Hours are daily 8:00 AM–7:00 PM.
- [ ] Service areas include Quezon City, Caloocan, and Manila.
- [ ] Payment methods show Cash, Bank Transfer, and GCash.
- [ ] DTI and BIR registration is stated without exposing registration numbers.
- [ ] Guest capacity is shown as 50–600.
- [ ] All three regular packages show ₱30,000 and good for 50 guests.
- [ ] Regular packages are not described as ₱600 per head.
- [ ] No unconfirmed additional-head price is displayed.
- [ ] All four grazing packages show ₱1,000 per guest and minimum 50 guests.
- [ ] Grazing package menus match the content source exactly.
- [ ] Food-pack pricing is ₱250–₱300 per pack.
- [ ] No food-tray price is invented.
- [ ] Cancellation and rescheduling rules are described as contract-based.
- [ ] The 70% down payment and final payment three days before the event are shown correctly.
- [ ] No fake customer names, testimonials, or ratings are published.

## Home page

- [ ] Hero includes headline, supporting copy, buffet/event image, and three CTAs.
- [ ] Events section includes Weddings, Debuts, Baptisms, Graduations, Seminars, Corporate Events, and Family Gatherings.
- [ ] Services section includes Full Catering, Grazing Tables, Food Trays, and Packed Meals.
- [ ] Best-seller section includes Pork Menudo and Grazing Table.
- [ ] Any Pork Caldereta claim is reviewed against approved content before publication.
- [ ] “Why Choose Yhan's?” includes trusted since 2010 and professional presentation.
- [ ] Recent events use clearly documented placeholder images until real assets are approved.
- [ ] Final CTA and footer match the overall design.

## Packages page

- [ ] Regular packages are presented first.
- [ ] Confirmed regular inclusions are clearly grouped.
- [ ] Serving staff is not listed as confirmed unless later approved.
- [ ] Grazing package pricing and minimum are prominent.
- [ ] Grazing inclusions are readable on mobile.
- [ ] Packed meals show breakfast, lunch, and dinner availability.
- [ ] Breakfast and lunch examples match the source content.
- [ ] Food-tray section asks users to request the current menu.
- [ ] Additional services are labeled as partner-arranged.
- [ ] No partner pricing is invented.
- [ ] Optional grazing estimator calculates `guests × 1000`.

## About & Contact page

- [ ] About story is concise and based only on confirmed facts.
- [ ] Highlight cards include 2010, private/corporate events, 50–600 guests, and DTI/BIR.
- [ ] “What We Cater” includes Inductions.
- [ ] Farther-location wording does not include invented fees.
- [ ] Booking process contains five correct steps.
- [ ] Contact cards support Facebook, email, and phone actions.
- [ ] Contact details are readable on mobile.
- [ ] FAQ/info blocks do not create policies that were not supplied.

## Responsive design

- [ ] No horizontal overflow at 360px, 375px, or 390px.
- [ ] Header navigation works with keyboard and touch.
- [ ] All buttons are comfortably tappable.
- [ ] Package cards stack cleanly.
- [ ] Prices and package labels remain readable.
- [ ] Footer columns stack without overlap.
- [ ] Large decorative elements do not cover content.
- [ ] Images retain correct aspect ratio.
- [ ] Text does not become smaller than practical reading size.

## Accessibility

- [ ] A skip link is available.
- [ ] Each route has one `h1`.
- [ ] Heading levels are logical.
- [ ] All images have correct alt handling.
- [ ] Decorative images and SVGs are hidden from assistive technology.
- [ ] Active route uses `aria-current`.
- [ ] Mobile menu exposes `aria-expanded`.
- [ ] Focus indicators are visible.
- [ ] Color contrast is acceptable.
- [ ] Reduced-motion preference is respected.
- [ ] Automated accessibility checks pass with no serious or critical violations.

## Testing

- [ ] Vitest is configured with jsdom.
- [ ] React Testing Library is configured.
- [ ] Content-data tests protect prices, capacities, and package lists.
- [ ] Guest estimator unit tests cover minimum, normal, and maximum values.
- [ ] Navigation and mobile-menu component tests exist.
- [ ] Playwright tests cover all routes.
- [ ] Playwright tests cover mobile navigation.
- [ ] Playwright verifies CTA href values.
- [ ] Playwright checks for horizontal overflow.
- [ ] Playwright catches console errors.
- [ ] CI runs typecheck, unit tests, build, and Playwright.

## Final quality

- [ ] `npm run typecheck` passes.
- [ ] `npm run test` passes.
- [ ] `npm run build` passes.
- [ ] `npm run test:e2e` passes.
- [ ] No console warnings or errors remain.
- [ ] README contains setup, scripts, content update instructions, asset replacement instructions, and deployment steps.
- [ ] `docs/PROGRESS.md` accurately describes completed and pending work.

## Phase 10 — GitHub Push and Vercel Deployment

- [ ] Phase 9 passed and received approval before deployment work began.
- [ ] The full local gate passed immediately before the initial push.
- [ ] No secrets, local environment files, Vercel local metadata, or generated validation directories were committed.
- [ ] Approved code was pushed to `potatsukki/yhans-catering-services` on `main`.
- [ ] No force-push or pull request was used.
- [ ] A Vercel project named `yhans-catering-services` is connected to `potatsukki/yhans-catering-services` with `main` as the production branch.
- [ ] `VITE_SITE_URL` uses the real assigned production HTTPS origin with no path or trailing slash.
- [ ] The production deployment succeeded.
- [ ] `/`, `/packages`, `/about-contact`, `/robots.txt`, and `/sitemap.xml` work in production.
- [ ] Direct refresh works on `/packages` and `/about-contact` without an unexpected 404.
- [ ] Canonical, Open Graph, JSON-LD, sitemap, and robots output use the final production origin and confirmed information.
- [ ] Production logo, local assets, Facebook links, phone links, and email links work.
- [ ] Production has no browser console errors or mobile horizontal overflow.
- [ ] Documentation records the final repository URL, production branch, commit SHAs, Vercel project, deployment URL, `VITE_SITE_URL`, deployment date, and validation results.
- [ ] Remaining placeholder assets and owner confirmations are clearly documented.
- [ ] Remaining security or dependency warnings are clearly documented.

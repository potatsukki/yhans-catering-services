# Phase 7 Prompt — Responsive, Accessibility, and Visual Refinement

Proceed after all three pages exist.

## Goal

Audit and refine the complete website across devices and interaction modes.

## Required viewport audit

Test at:

- 360×800
- 375×812
- 390×844
- 768×1024
- 1024×768
- 1440×900

## Responsive tasks

1. Remove all horizontal overflow.
2. Ensure the mobile header is compact and functional.
3. Make hero layouts readable without oversized images.
4. Stack or reflow service and package cards.
5. Keep prices visually prominent.
6. Convert dense grazing inclusions into mobile-friendly groups.
7. Make CTA buttons full-width where useful.
8. Make footer columns stack in a logical order.
9. Ensure decorative waves and flourishes never cover content.
10. Avoid fixed heights that clip translated or wrapped text.
11. Check browser zoom at 200%.
12. Check long email and address wrapping.

## Accessibility audit

1. Verify semantic landmarks.
2. Verify one `h1` per page.
3. Fix heading order.
4. Add or correct alt text.
5. Hide decorative SVGs with `aria-hidden`.
6. Add `aria-current="page"` to active navigation.
7. Verify mobile-menu state and focus management.
8. Make all controls keyboard operable.
9. Add visible focus states.
10. Verify contrast of burgundy, gold, and cream combinations.
11. Respect reduced motion.
12. Make external-link behavior clear.
13. Ensure touch targets are at least approximately 44px.
14. Avoid relying only on color for “best seller” or active state.
15. Add accessible names to icon-only controls.

## Visual comparison

Compare each route against its attached mockup.

Refine:

- spacing;
- max widths;
- typography scale;
- image ratios;
- card border/shadow;
- section separators;
- CTA bands;
- footer balance.

Do not sacrifice usability for pixel matching.

## Automated checks

Add `@axe-core/playwright` if not already installed.

Create accessibility E2E checks for all three main routes.

Fail tests on serious or critical accessibility violations.

Add Playwright checks for:

- `document.documentElement.scrollWidth <= document.documentElement.clientWidth`;
- no page errors;
- no failed local asset requests;
- keyboard navigation through header and primary CTAs;
- mobile menu focus behavior.

Run all checks, update docs, report results, and stop.

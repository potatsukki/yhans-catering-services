# Phase 3 Prompt — Shared Layout and Design Foundation

Proceed only after the scaffold is stable.

## Goal

Build the reusable visual foundation used by all three pages.

## Build these shared components

### Layout

- `SkipLink`
- `Header`
- `MobileNavigation`
- `SiteLayout`
- `Footer`
- `ScrollToTop` or router scroll restoration

### UI primitives

- `Container`
- `SectionHeading`
- `DecorativeDivider`
- `ButtonLink`
- `ExternalLink`
- `ResponsiveImage`
- `Badge`
- `Price`
- reusable custom SVG icon components

## Header requirements

Desktop:

- official logo on the left;
- links: Home, Menu, About & Contact;
- active underline;
- burgundy Request a Quote button;
- layout visually close to the mockups.

Mobile:

- logo;
- accessible menu button;
- menu panel;
- active route indication;
- CTA;
- Escape support;
- close after route selection;
- prevent body scroll while open.

## Footer requirements

Include:

- logo;
- business name;
- tagline;
- Facebook follow link;
- both phone numbers;
- email;
- full address;
- daily 8:00 AM–7:00 PM hours;
- quick links;
- service areas;
- payment methods;
- dynamic current year.

Do not use 2024 from the image mockups. Generate the current year dynamically.

## Visual rules

- implement theme tokens;
- install and configure selected self-hosted fonts;
- cream background;
- burgundy primary actions;
- gold accents;
- rounded cards;
- subtle shadows;
- custom line icons;
- visible focus states;
- reduced-motion support.

## Tests

Vitest / React Testing Library:

- header renders all navigation links;
- active route receives correct state;
- mobile menu opens and closes;
- Escape closes mobile menu;
- external CTA has safe attributes;
- footer renders confirmed business information.

Playwright:

- desktop navigation works;
- mobile navigation works at 375px width;
- no console errors on navigation.

## Do not build page-specific sections yet

The pages may still contain simple placeholder content inside the shared layout.

Run all checks, update the documentation, report results, and stop.

# Design System

## Design target

The attached generated Home, Packages & Services, and About & Contact mockups are the main visual target.

The original reference image is inspiration only.

Aim for a close implementation of:

- section order;
- content density;
- card proportions;
- rounded shapes;
- header and footer treatment;
- burgundy and gold brand palette;
- decorative dividers;
- warm catering photography;
- premium but approachable tone.

Do not force pixel-perfect dimensions when that harms responsiveness or accessibility.

## Brand palette

Use CSS custom properties and Tailwind theme tokens.

Suggested starting tokens:

```css
--color-burgundy-950: #4a0711;
--color-burgundy-900: #620816;
--color-burgundy-800: #7b0d1e;
--color-burgundy-700: #94152a;

--color-gold-600: #d79d17;
--color-gold-500: #efb82e;
--color-gold-400: #f5ca52;
--color-gold-200: #f9e6a8;

--color-cream-50: #fffdf8;
--color-cream-100: #fff8ec;
--color-cream-200: #faefd9;
--color-cream-300: #eeddbf;

--color-ink-900: #351b17;
--color-ink-700: #5f4540;
--color-ink-500: #846d67;

--color-success: #397543;
--color-focus: #246bfd;
```

Adjust slightly after comparing with the attached mockups, but preserve the warm cream, burgundy, and gold identity.

## Typography

Use self-hosted npm font packages when practical.

Recommended:

- Display headings: `Cormorant Garamond`, 600–700
- Body and controls: `Inter`, 400–700
- Script accent: `Great Vibes` or `Allura`, used sparingly

Fallbacks must be present.

Do not use script fonts for:

- body paragraphs;
- navigation;
- prices;
- important instructions;
- mobile buttons.

## Type scale

Use fluid sizing with `clamp()` where helpful.

Suggested:

- Hero: 2.6rem to 5.2rem
- Page title: 2.3rem to 4.4rem
- Section title: 1.8rem to 2.8rem
- Card title: 1.15rem to 1.45rem
- Body: 1rem to 1.125rem
- Small text: never below 0.8125rem on mobile

## Layout

- Maximum content width: 1180–1240px
- Desktop horizontal padding: 32–48px
- Tablet padding: 24–32px
- Mobile padding: 16–20px
- Section spacing: 64–104px desktop, 44–72px mobile
- Card radius: 16–22px
- Button radius: 10–14px
- Use subtle borders and restrained shadows
- Avoid excessive glassmorphism

## Header

Desktop:

- logo left;
- navigation right;
- active route underline;
- prominent burgundy CTA;
- light cream background;
- sticky header allowed if it remains compact.

Mobile:

- logo remains readable;
- accessible menu button;
- slide-down or sheet-style menu;
- close on navigation, Escape, or outside click;
- prevent background scroll while open.

## Buttons

Primary:

- burgundy background;
- cream or white text;
- strong hover and focus state.

Secondary:

- gold background;
- dark burgundy text.

Tertiary:

- light surface;
- burgundy border or text.

All interactive targets should be at least 44px tall on touch devices.

## Cards

Cards should use:

- cream or white surface;
- subtle warm border;
- small shadow;
- image with consistent aspect ratio;
- burgundy title;
- readable body;
- no cramped text.

Package prices must be visually prominent.

## Decorative elements

Allowed:

- thin gold lines;
- small symmetric flourishes;
- subtle pattern in CTA bands;
- curved gold separators;
- simple custom SVG line icons.

Do not let decoration compete with content.

## Icons

Prefer custom inline SVG icons or a small project-owned icon component set.

Style:

- burgundy stroke;
- rounded line caps;
- simple consistent geometry;
- gold accent only where helpful.

Do not use emoji as production icons.

## Images

- use `object-fit: cover` for photography;
- use `object-fit: contain` for the official logo;
- never stretch the logo;
- lazy-load below-the-fold images;
- provide width and height or aspect-ratio to reduce layout shift;
- prefer AVIF or WebP when local conversion is practical;
- provide a safe fallback image component.

## Motion

Use subtle transitions only:

- 150–250ms;
- small hover lift;
- button color change;
- gentle image scale up to approximately 1.02.

Respect `prefers-reduced-motion`.

## Responsive behavior

Required viewport checks:

- 360×800
- 375×812
- 390×844
- 768×1024
- 1024×768
- 1440×900

No horizontal page scrolling.

On mobile:

- package grids stack;
- dense inclusion lists become grouped accordions or readable stacked lists;
- CTA buttons may become full width;
- hero image must not overpower the text;
- footer columns stack cleanly;
- tables must not require zooming.

## Accessibility

- semantic landmarks;
- one `h1` per route;
- logical heading order;
- visible keyboard focus;
- descriptive link labels;
- sufficient color contrast;
- meaningful image alt text;
- decorative SVGs hidden from screen readers;
- active navigation uses `aria-current="page"`;
- mobile menu uses correct expanded state;
- no information conveyed only by color.

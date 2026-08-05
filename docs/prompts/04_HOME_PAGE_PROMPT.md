# Phase 4 Prompt — Implement the Home Page

Proceed after the shared foundation is complete.

## Visual source

Use the attached generated Home page mockup as the primary visual target.

Preserve:

- overall section order;
- warm cream/burgundy/gold treatment;
- hero composition;
- icon-card row;
- service cards;
- best-seller cards;
- split “Why Choose Yhan's?” area;
- recent-events strip;
- burgundy bottom CTA.

Adapt it responsibly for mobile.

## Required sections

### 1. Hero

Content:

- H1: `Making Every Celebration Delicious`
- Supporting copy:
  `Dependable catering, grazing tables, food trays, and packed meals for special occasions, business functions, and group events.`
-- Buttons:
  - View Menu → `/packages`
  - Request a Quote → Facebook
  - Message Us on Facebook → Facebook
- Hero image: tasteful placeholder buffet/event photo
- Use the logo in the header, not as a giant hero watermark

### 2. Catering for Every Occasion

Cards:

- Weddings
- Debuts
- Baptisms
- Graduations
- Seminars
- Corporate Events
- Family Gatherings

Use consistent custom SVG line icons.

### 3. Our Services

Cards:

- Full Catering
- Grazing Tables
- Food Trays
- Packed Meals

Descriptions must remain factual and avoid unconfirmed inclusions.

Suggested copy:

- Full Catering:
  `Complete food packages with buffet setup, tables, chairs, drinks, and confirmed package inclusions.`
- Grazing Tables:
  `Styled grazing-table packages for celebrations and special events.`
- Food Trays:
  `Food trays for parties, offices, and group meals. Request the current menu and prices.`
- Packed Meals:
  `Breakfast, lunch, and dinner food packs for businesses, meetings, seminars, and group orders.`

### 4. Best Sellers / Popular Choices

Confirmed safe highlights:

- Pork Menudo — explicitly marked best seller in Grazing Package B
- Grazing Table
- Menudo / Beef Caldereta may be visually featured as popular menu choices

Do not publish “Pork Caldereta” as a confirmed best seller unless it is explicitly marked as a general popular dish rather than a factual sales ranking.

### 5. Why Choose Yhan's?

Use:

- Trusted since 2010
- Professional presentation
- Improved equipment and hygiene standards
- Flexible package options
- DTI and BIR registered
- Private and corporate event capability

Avoid exaggerated claims such as “number one,” “best in Quezon City,” or guaranteed satisfaction.

### 6. Recent Events

Use documented placeholder images only.

Do not invent event names or customer captions.

Use neutral alt text such as:

- `Sample buffet setup`
- `Sample grazing-table presentation`
- `Sample decorated reception venue`

### 7. Final CTA band

Text:

- `Let's Make Your Next Event Delicious & Memorable`

Buttons:

- Request a Quote
- Message Us on Facebook

### 8. Footer

Use the shared footer.

## SEO

Set route-specific metadata:

- Title:
  `Yhan's Catering Services | Catering in Quezon City`
- Description:
  mention full catering, grazing tables, food trays, packed meals, and direct inquiries.

Use only confirmed facts in structured data.

## Tests

Vitest:

- hero CTAs;
- service cards;
- event cards;
- confirmed business claims;
- no fake testimonials.

Playwright:

- Home loads;
- hero is visible;
-- View Menu navigates correctly;
- Facebook CTA has correct destination;
- desktop and mobile layout do not overflow;
- no broken images;
- no console errors.

Run checks, update docs, report results, and stop.

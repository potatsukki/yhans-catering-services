# Phase 6 Prompt — Implement About & Contact

Proceed only after the Packages page passes.

## Visual source

Use the attached generated About & Contact mockup as the primary visual target.

Correct any generated-image text using `docs/CONTENT_SOURCE_OF_TRUTH.md`.

## Required sections

### 1. Page hero

- H1: `About & Contact`
- Supporting text:
  `Get to know the story behind Yhan's Catering Services and how to reach us.`
- Warm catering image
- Active About & Contact navigation state

### 2. Our Story

Heading:

- `Serving Celebrations Since 2010`

Copy:

`Established in 2010, Yhan's Catering Services started with a simple setup and limited equipment. Through years of experience, hard work, and continuous investment, the business grew into a more professional catering service with improved equipment, presentation, hygiene standards, and event setup. Today, Yhan's Catering Services serves private celebrations, business functions, and group events with dependable food and service.`

Do not mention a specific monetary investment.

### 3. Highlight cards

- Established in 2010
- Trusted for Private & Corporate Events
- Guest Capacity: 50–600
- DTI & BIR Registered

Do not expose registration numbers.

### 4. What We Cater

- Weddings
- Debuts
- Baptisms
- Graduations
- Seminars
- Inductions
- Corporate Events
- Family Gatherings

### 5. Service Areas

- Quezon City
- Caloocan
- Manila
- Nearby Metro Manila areas

Use:

`Farther locations may be accommodated. Additional arrangements are discussed directly based on the location and event requirements.`

Do not show transport or accommodation prices.

### 6. Booking Process

Five steps:

1. Inquire via Facebook, phone, Viber, or email.
2. Discuss event date, location, guest count, package, and requirements.
3. Confirm details and sign the catering contract.
4. Pay 70% down payment to reserve the event date.
5. Settle the remaining balance three days before the event.

Policy note:

`Cancellation, rescheduling, refund, and other booking conditions are governed by the signed catering contract.`

### 7. Contact Us

Create action-oriented contact cards.

#### Owner

- Marianne P. Natanawan
- Chef / Proprietor

#### Phone / Viber

- 0956 675 5148
- 0967 119 5792

#### Email

- marianne03natanawan@gmail.com

#### Facebook

- Yhan's Catering Service Official
- correct Facebook destination from centralized data

#### Address

- Block 19, Lot 11, Dahlia Extension Street
- BIR Village, West Fairview
- Quezon City 1118, Philippines

#### Hours

- Daily
- 8:00 AM–7:00 PM

#### Payment

- Cash
- Bank Transfer
- GCash

There is no contact form.

### 8. Helpful information / FAQ cards

Use only confirmed, safe items:

#### Direct Inquiries

`Message us on Facebook or contact us by phone, Viber, or email for availability and event details.`

#### Custom Quotations

`Quotations are based on the chosen package, guest count, location, and event requirements.`

#### Add-ons and Partners

`Styling, sound systems, hosts, photographers, videographers, and other event services may be arranged through trusted partners.`

#### Corporate Orders

`DTI and BIR documentation may be provided when required for large business or corporate food orders.`

### 9. Final CTA

- `Ready to plan your event?`
- `Let's make it Delicious & Memorable.`
- Message Us on Facebook
- Call Us Today

### 10. Footer

Use shared footer.

## Tests

Vitest:

- story contains 2010;
- highlight cards;
- booking steps;
- 70% down payment;
- balance three days before event;
- all contact links;
- no contact form;
- no invented policy.

Playwright:

- page loads;
- phone link has correct `tel:` value;
- email link has correct `mailto:`;
- Facebook link is correct;
- mobile contact cards remain usable;
- no overflow;
- no console errors.

Run checks, update docs, report results, and stop.

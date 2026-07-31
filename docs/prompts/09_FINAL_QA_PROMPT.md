# Phase 9 Prompt — Final QA and Production Readiness

This is the final phase.

## Goal

Audit the repository as if it is about to be deployed publicly.

## Content audit

Compare every visible fact against `docs/CONTENT_SOURCE_OF_TRUTH.md`.

Specifically verify:

- business name;
- owner;
- phones;
- email;
- address;
- hours;
- Facebook;
- service areas;
- payment methods;
- established year;
- DTI/BIR wording;
- 50–600 capacity;
- regular package prices and menus;
- regular inclusions;
- grazing prices, minimum, menus, and inclusions;
- food-pack price and samples;
- food-tray no-price rule;
- booking deposit and balance timing;
- contract-based policy wording;
- partner-arranged services.

Remove any invented claims.

## Visual audit

Open all three pages at desktop and mobile sizes.

Compare with the attached mockups.

Fix:

- inconsistent spacing;
- misaligned cards;
- weak hierarchy;
- inconsistent icon sizes;
- overly small text;
- poor image crops;
- awkward mobile stacking;
- broken decorative elements;
- footer inconsistencies.

## Technical audit

Run:

```bash
npm ls
npm run typecheck
npm run test
npm run test:coverage
npm run build
npm run test:e2e
```

Check:

- no pre-release dependencies;
- TypeScript 7 is the main compiler;
- no console errors;
- no TypeScript suppression comments without explanation;
- no unused placeholder code;
- no secrets;
- no large unoptimized accidental files;
- no broken links;
- no broken images;
- direct route refresh works;
- metadata is route-specific;
- sitemap and robots are valid;
- JSON-LD contains only confirmed facts.

## Placeholder audit

Create a final list in `docs/PROGRESS.md` of all assets or content that still need replacement before public launch:

- real event photos;
- real food photos;
- approved testimonials;
- final food-tray menu and prices;
- pending package details;
- other owner confirmations.

Do not hide pending items.

## README

Ensure README explains:

- project purpose;
- tech stack;
- setup;
- scripts;
- content architecture;
- how to update packages;
- how to replace images;
- how to change contact details;
- deployment.

## Final response

Provide:

1. concise architecture summary;
2. files changed;
3. final dependency versions;
4. test results;
5. build result;
6. known pending business content;
7. exact Vercel deployment steps;
8. any risks.

Do not make further code changes after the final report unless requested.

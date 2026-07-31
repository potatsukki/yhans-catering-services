# Phase 2 Prompt — Scaffold the Project

Proceed only after Phase 1 is complete.

## Goal

Create the technical foundation without building the full page designs.

## Required stack

Use the latest stable releases verified in Phase 1:

- TypeScript 7
- React
- React DOM
- Vite
- Tailwind CSS
- React Router
- Vitest
- React Testing Library
- Playwright

Do not use pre-release packages.

## Tasks

1. Scaffold a Vite React TypeScript application in the current repository.
2. Keep TypeScript 7 as the main compiler.
3. Configure Tailwind CSS using the current official Vite integration.
4. Add React Router with these routes:
   - `/`
   - `/packages`
   - `/about-contact`
   - fallback not-found route
5. Add the recommended folder structure from `docs/ARCHITECTURE.md`.
6. Create minimal placeholder pages containing only the route name and one heading.
7. Configure:
   - Vitest with jsdom;
   - React Testing Library;
   - Playwright;
   - path aliases if they improve imports;
   - Vercel SPA rewrites;
   - npm scripts;
   - Node engine requirement.
8. Add a basic global stylesheet with:
   - reset/base styles;
   - design tokens from `docs/DESIGN_SYSTEM.md`;
   - font setup;
   - focus style;
   - reduced-motion handling.
9. Add the official logo to the proposed asset path.
10. Create typed content files and enter all confirmed business and package content from `docs/CONTENT_SOURCE_OF_TRUTH.md`.
11. Do not build complex components or final sections yet.
12. Add data-validation unit tests for:
   - three regular packages;
   - regular package price of ₱30,000;
   - regular capacity of 50;
   - four grazing packages;
   - grazing price of ₱1,000 per guest;
   - grazing minimum of 50;
   - valid phone, email, and Facebook CTA constants.
13. Add a minimal Playwright smoke test that loads all three routes.
14. Run:
   - install;
   - typecheck;
   - unit tests;
   - build;
   - Playwright smoke test.

## Technical rules

- Strict TypeScript.
- Avoid `any`.
- No non-null assertions unless clearly justified.
- No hard-coded business content inside page components.
- No UI library.
- No Bootstrap.
- No backend.
- No form.
- No fake reviews.
- No copied production imagery from the Facebook screenshot.

## Completion

Update `docs/PROGRESS.md` and `docs/DECISIONS.md`.

Report:

- installed versions;
- project structure;
- files changed;
- commands run;
- test/build results;
- unresolved compatibility issues.

Then stop. Wait for Phase 3.

# Phase 1 Prompt — Inspect References and Establish the Plan

You are working on a new website for **Yhan's Catering Services**.

I have attached:

- the official business logo;
- an original catering website UI reference;
- a generated Home page mockup;
- a generated Packages & Services page mockup;
- a generated About & Contact page mockup;
- a Facebook page screenshot for business identity and contact reference;
- this project prompt pack.

## Your task in this phase

Do not implement the website yet.

1. Inspect every attached image carefully.
2. Read:
   - `docs/PROJECT_BRIEF.md`
   - `docs/CONTENT_SOURCE_OF_TRUTH.md`
   - `docs/DESIGN_SYSTEM.md`
   - `docs/ARCHITECTURE.md`
   - `docs/ACCEPTANCE_CRITERIA.md`
3. Identify:
   - repeated layout patterns;
   - typography hierarchy;
   - colors;
   - card styles;
   - section order;
   - navigation behavior;
   - desktop-to-mobile risks;
   - placeholder images that will need replacement later.
4. Create or update:
   - `docs/DECISIONS.md`
   - `docs/PROGRESS.md`
   - `docs/IMPLEMENTATION_PLAN.md`
   - `docs/ASSET_INVENTORY.md`
5. In `docs/IMPLEMENTATION_PLAN.md`, break work into the same phases defined by this prompt pack.
6. In `docs/ASSET_INVENTORY.md`, list:
   - each attached asset;
   - whether it is an official asset, mockup, source screenshot, or placeholder;
   - proposed destination path;
   - whether it can appear on the production site.
7. Check the current npm stable dist-tags for:
   - TypeScript;
   - React;
   - React DOM;
   - Vite;
   - Tailwind CSS;
   - `@tailwindcss/vite`;
   - Vitest;
   - Playwright.
8. Record the resolved stable versions in `docs/DECISIONS.md`.
9. Reject any beta, RC, canary, preview, or nightly package.
10. Confirm that TypeScript 7 stable will remain the main compiler.

## Important constraints

- Do not start coding.
- Do not invent missing package details.
- Do not use the Facebook screenshot as a direct website visual asset.
- Do not copy the original reference exactly.
- The generated three-page mockups are the primary visual target.
- The site has no backend and no website inquiry form.

## Required response

Report:

1. What you understood from the images.
2. The exact `.md` files created or updated.
3. The stable package versions found.
4. Any contradictions or uncertainties.
5. The proposed implementation sequence.

Then stop. Wait for the Phase 2 prompt.

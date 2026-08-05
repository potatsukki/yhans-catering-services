# Yhan's Catering Services — Codex Build Pack

## What to attach to Codex

Attach the following visual files together with this prompt pack:

1. The official Yhan's Catering Services logo.
2. The original two-page UI reference provided by the client.
3. The generated Home page mockup.
4. The generated Menu page mockup.
5. The generated About & Contact page mockup.
6. The Facebook page screenshot, only as a reference for the business identity and contact details.

The three generated page mockups are the main visual source of truth. The original UI reference is inspiration only. Do not copy it pixel-for-pixel.

## How to use this pack

Run the phase prompts in order. Do not ask Codex to build the whole site in one pass.

1. `01_DISCOVERY_AND_DOCS_PROMPT.md`
2. `02_SCAFFOLD_PROMPT.md`
3. `03_SHARED_FOUNDATION_PROMPT.md`
4. `04_HOME_PAGE_PROMPT.md`
5. `05_PACKAGES_PAGE_PROMPT.md`
6. `06_ABOUT_CONTACT_PAGE_PROMPT.md`
7. `07_RESPONSIVE_ACCESSIBILITY_PROMPT.md`
8. `08_TESTING_AND_CI_PROMPT.md`
9. `09_FINAL_QA_PROMPT.md`

Keep these reference documents under `docs/`:

- `docs/PROJECT_BRIEF.md`
- `docs/CONTENT_SOURCE_OF_TRUTH.md`
- `docs/DESIGN_SYSTEM.md`
- `docs/ARCHITECTURE.md`
- `docs/ACCEPTANCE_CRITERIA.md`
- `docs/DECISIONS.md`
- `docs/PROGRESS.md`

## Non-negotiable workflow

At the end of every phase, Codex must:

1. Run the checks required by that phase.
2. Update `docs/PROGRESS.md`.
3. Record significant implementation decisions in `docs/DECISIONS.md`.
4. Stop and report:
   - files changed;
   - commands executed;
   - test results;
   - remaining issues;
   - the exact next phase to run.

Do not combine phases unless the user explicitly asks.

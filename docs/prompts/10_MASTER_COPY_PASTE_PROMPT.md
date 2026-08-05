# Master Copy-Paste Prompt for Codex

You are the lead frontend engineer for a production-quality three-page website for **Yhan's Catering Services**.

I attached:

- the official Yhan's Catering Services logo;
- an original UI reference;
- generated mockups for Home, Menu, and About & Contact;
- a Facebook page screenshot for identity/contact reference;
- a set of project `.md` documents.

Read all attached files before making changes.

The generated three-page mockups are the main visual source of truth. The original reference is inspiration only. Implement an original website that is visually close to the generated mockups, not a direct copy of another site.

## Required technology

Use the latest stable releases at installation time:

- TypeScript 7 stable as the main compiler;
- React stable;
- React DOM stable;
- Vite stable;
- Tailwind CSS stable using the official Vite integration;
- React Router stable;
- Vitest stable;
- React Testing Library stable;
- Playwright stable.

Do not install beta, RC, canary, preview, or nightly packages.

Before installation, run npm dist-tag checks and record resolved versions in `docs/DECISIONS.md`.

If a linting package has not yet adopted the TypeScript 7 compiler API, do not downgrade the main TypeScript compiler. Use a compatible lint strategy and document it.

## Required workflow

Do not build the whole site in one pass.

Follow these phase files in order:

1. `01_DISCOVERY_AND_DOCS_PROMPT.md`
2. `02_SCAFFOLD_PROMPT.md`
3. `03_SHARED_FOUNDATION_PROMPT.md`
4. `04_HOME_PAGE_PROMPT.md`
5. `05_PACKAGES_PAGE_PROMPT.md`
6. `06_ABOUT_CONTACT_PAGE_PROMPT.md`
7. `07_RESPONSIVE_ACCESSIBILITY_PROMPT.md`
8. `08_TESTING_AND_CI_PROMPT.md`
9. `09_FINAL_QA_PROMPT.md`

For the current run, execute **only Phase 1**.

At the end of each phase:

- run the required checks;
- update `docs/PROGRESS.md`;
- update `docs/DECISIONS.md`;
- report files changed, commands, tests, issues, and next phase;
- stop and wait.

## Core product rules

- Three routes: Home, Menu, About & Contact.
- No backend.
- No authentication.
- No database.
- No admin dashboard.
- No customer account.
- No checkout.
- No website inquiry form.
- Calls to action go directly to Facebook, email, or phone.
- Use centralized typed content data.
- Do not invent business facts.
- Do not invent package prices.
- Do not invent cancellation rules.
- Do not create fake testimonials or ratings.
- Placeholder images must be easy to replace.
- The site must be mobile-friendly, accessible, SEO-ready, tested, and deployable to Vercel.

Begin with Phase 1 only.

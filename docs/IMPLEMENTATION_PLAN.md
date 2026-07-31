# Implementation Plan

`docs/LUNA_EXECUTION_PLAN.md` is the decision-complete execution authority. This file is the compact phase index and must not diverge from it.

## Ordered phases

| Phase | Deliverable | Dependency | Gate |
|---|---|---|---|
| P1 | Discovery documents, asset inventory, stable version record | None | Documentation reviewed; TypeScript 7 stable confirmed |
| P2 | Vite/React scaffold, typed content, placeholder assets, route smoke tests | P1 | Typecheck, content tests, build, Playwright smoke pass |
| P3 | Shared layout, navigation, footer, UI primitives, metadata | P2 | Shared unit tests and desktop/mobile navigation E2E pass |
| P4 | Home page | P3 | Home unit/E2E checks and Home acceptance criteria pass |
| P5 | Packages and Services page plus grazing estimator | P4 | Package/estimator unit/E2E checks and Packages criteria pass |
| P6 | About and Contact page | P5 | Contact/content unit/E2E checks and About criteria pass |
| P7 | Responsive, accessibility, and visual refinement | P6 | Required viewports, 200% zoom, axe, overflow, and keyboard checks pass |
| P8 | Complete tests, coverage, CI, and README | P7 | CI-equivalent local command set passes |
| P9 | Final content, asset, visual, dependency, SEO, and production-readiness audit | P8 | Full acceptance checklist and production validation pass |
| P10 | GitHub push, Vercel deployment, production verification, and deployment record | P9 approval | Final local gate, repository audit, production route/SEO verification, and documentation deployment pass |

## Phase boundaries

- Complete only one phase per execution run unless the user explicitly authorizes otherwise.
- At each gate, update `docs/DECISIONS.md` and `docs/PROGRESS.md`, report files/commands/results/issues, and stop.
- A failed gate blocks the next phase.
- Phase 10 requires explicit approval after P9-T06 passes; planning Phase 10 does not authorize a push or deployment.
- Exact task IDs, file names, component names, tests, commands, stop conditions, and recovery rules are in `docs/LUNA_EXECUTION_PLAN.md`.

## Phase 2 prerequisites

- The canonical paths under `reference/` must exist and contain the six inventoried files.
- Stable versions recorded in `docs/DECISIONS.md` must be rechecked if implementation begins on a later date.
- No unresolved factual issue may be filled by inference.
- Production deployment remains blocked until a valid HTTPS `VITE_SITE_URL` is provided.

## Validation ladder

Use targeted tests while developing a task, then run the exact phase gate. The final local sequence is:

```powershell
npm ls
npm run typecheck
npm run test
npm run test:coverage
npm run build
npm run test:e2e
```

Do not replace a failing command with a weaker command. Do not proceed while a required check is red.

Immediately before the Phase 10 push, run:

```powershell
npm ci
npm run typecheck
npm run test
npm run test:coverage
npm run build
npm run test:e2e
```

After that gate, audit tracked files and approved assets before connecting `potatsukki/yhans-catering-services`, pushing `main`, and configuring the single Vercel project.

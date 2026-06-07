# Project State

Last updated: 2026-06-07

FixNote is a new static, offline-first public-space report helper for international, non-country-specific use.

Public repository: <https://github.com/lalishka/fixnote>

Planned live demo URL: <https://lalishka.github.io/fixnote/>

## Current Scope

- Single-page web app in `index.html`.
- Report generation logic in `src/reportBuilder.js`.
- Browser interaction in `src/app.js`.
- Styling in `src/styles.css`.
- Static SVG mark in `assets/fixnote-mark.svg`.
- Node smoke tests in `tests/reportBuilder.test.mjs`.
- Maintainer-readiness check in `scripts/check-maintainer-readiness.mjs`.
- Contributor, security, issue, and pull request templates for a basic OSS maintenance workflow.
- Public OSS maintenance story and limitations in `docs/OSS_MAINTENANCE.md`.
- GitHub Actions CI workflow in `.github/workflows/ci.yml`.
- GitHub Pages deployment workflow in `.github/workflows/pages.yml`.

## Verified

- `npm test` passes: 5 report-builder tests.
- Playwright browser smoke-check loaded `http://localhost:4173` with zero console errors after the favicon fix.
- Desktop viewport `1365x900` was visually checked: form, generated report, labels, and copy button are visible with no obvious overlap.
- Mobile viewport `390x844` was visually checked at top and scrolled positions: form controls, copy button, and generated report are readable with no obvious overlap.
- Form input updates the generated report, and evidence checkbox state appears in the output.
- 2026-06-07 browser smoke refresh: Playwright loaded `http://localhost:4173`, console had 0 errors and 0 warnings, desktop and mobile screenshots were captured, and location/details/evidence updates appeared in the generated report.
- GitHub public repository has been created and pushed on branch `main`.
- GitHub topics are configured: `civic-tech`, `offline`, `accessibility`, `community-tools`, `public-good`.
- `npm run check` verifies maintainer entrypoints, required docs, templates, and package script safety.
- CI and GitHub Pages workflow files have been added as manual-dispatch workflows.
- GitHub-hosted Actions did not start on the first auto-trigger attempt because GitHub reported an account billing lock. Local `npm test`, `npm run check`, and Playwright browser smoke checks pass.
- README includes a local Playwright screenshot at `assets/fixnote-demo.png`.

## Not Yet Done

- GitHub Actions account lock must be resolved before CI/Pages can run on GitHub-hosted runners.
- GitHub Pages workflow has been added, but live deployment must be confirmed after GitHub Actions can run.
- First GitHub release/tag has not been created yet.
- No translations are included yet.
- No country-specific, city-specific, or government-service integrations are included.
- No full accessibility audit beyond semantic labels, keyboard-focus styling, responsive layout, and browser smoke-check has been completed.
- No external maintainer adoption, npm downloads, or real pull request volume has been established yet.

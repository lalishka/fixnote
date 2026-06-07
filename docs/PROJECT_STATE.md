# Project State

Last updated: 2026-06-07

FixNote is a new static, offline-first public-space report helper for international, non-country-specific use.

Public repository: <https://github.com/lalishka/fixnote>

Live demo URL: <https://lalishka.github.io/fixnote/>

## Current Scope

- Single-page web app in `index.html`.
- Report generation logic in `src/reportBuilder.js`.
- Browser interaction in `src/app.js`.
- Styling in `src/styles.css`.
- PWA manifest in `manifest.webmanifest`.
- Offline cache service worker in `service-worker.js`.
- Static SVG mark in `assets/fixnote-mark.svg`.
- Node smoke tests in `tests/reportBuilder.test.mjs`.
- Maintainer-readiness check in `scripts/check-maintainer-readiness.mjs`.
- Contributor, security, issue, and pull request templates for a basic OSS maintenance workflow.
- Accessibility baseline and checklist in `ACCESSIBILITY.md`.
- Print report workflow and print CSS.
- Public OSS maintenance story and limitations in `docs/OSS_MAINTENANCE.md`.
- GitHub Actions CI workflow in `.github/workflows/ci.yml`.
- GitHub Pages deployment workflow in `.github/workflows/pages.yml`.

## Verified

- `npm test` passes: 6 report-builder tests.
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
- First release/tag: `v0.1.0`, based on local tests, maintainer-readiness check, and browser smoke evidence.
- GitHub Pages legacy branch deployment is enabled from `main` root and built successfully.
- Live GitHub Pages smoke check passed at `https://lalishka.github.io/fixnote/`: page returns 200, CSS/JS/assets return 200, page title is `FixNote`, snapshot shows the form and generated report, and console has 0 errors and 0 warnings.
- Accessibility baseline document added with current coverage, manual release checklist, known gaps, and next work.
- Printable report mode implemented with a print button and print stylesheet.
- PWA/offline install readiness implemented with a web app manifest and service worker cache for static assets.
- 2026-06-07 local PWA/print smoke: manifest returns 200, service worker registers at localhost scope, Print report calls `window.print`, desktop/mobile snapshots show Copy and Print buttons, and console has 0 errors and 0 warnings.
- 2026-06-07 live Pages PWA/print smoke: `manifest.webmanifest` and `service-worker.js` return 200, service worker registers at `https://lalishka.github.io/fixnote/`, Print report button is visible, page title is `FixNote`, and console has 0 errors and 0 warnings.
- Public roadmap issues #1-#5 are open for accessibility audit, printable output, PWA/offline install review, translation readiness, and issue category review.

## Not Yet Done

- GitHub Actions account lock must be resolved before CI can run on GitHub-hosted runners.
- No translations are included yet.
- No country-specific, city-specific, or government-service integrations are included.
- No full WCAG/screen-reader accessibility audit beyond semantic labels, keyboard-focus styling, responsive layout, accessibility checklist, and browser smoke-check has been completed.
- No external maintainer adoption, npm downloads, or real pull request volume has been established yet.

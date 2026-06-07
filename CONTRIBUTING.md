# Contributing to FixNote

FixNote is a small civic-tech project. Contributions should keep the app simple, private, offline-first, and useful across countries.

## Good First Contributions

- Improve plain-language report wording.
- Add tests for report generation edge cases.
- Improve accessibility labels, keyboard flow, or focus states.
- Improve documentation or release checklists.
- Suggest country-neutral issue types that fit public-space reporting.

## Before Opening a Pull Request

1. Read `README.md` and `docs/PROJECT_STATE.md`.
2. Keep the app static: no backend, accounts, tracking, paid APIs, or remote runtime dependencies.
3. Run:

```bash
npm test
npm run check
```

4. If the change affects product behavior, update the matching document in `docs/`.
5. For UI changes, verify desktop and mobile layouts manually.

## Project Boundaries

- Do not add country-specific legal, municipal, or government-service assumptions without a documented reason.
- Do not add analytics, location tracking, or external APIs by default.
- Do not store report text outside the browser.
- Do not use destructive file commands in project scripts.


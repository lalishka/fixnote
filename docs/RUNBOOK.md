# Runbook

## Add a New Issue Type

1. Add the option to `index.html`.
2. Add the matching label to `issueLabels` in `src/reportBuilder.js`.
3. Add or update a test in `tests/reportBuilder.test.mjs`.
4. Run `npm test`.
5. Update `docs/PROJECT_STATE.md` if the feature changes project scope.

## Prepare a GitHub Release

1. Run `npm test`.
2. Run the app locally with `npm run dev`.
3. Verify desktop and mobile layouts in a browser.
4. Update `docs/PROJECT_STATE.md` with verified and unverified status.
5. Check that `README.md` still describes the current app.

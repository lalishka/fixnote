# Runbook

## Add a New Issue Type

1. Add the option to `index.html`.
2. Add the matching label to `issueLabels` in `src/reportBuilder.js`.
3. Add or update a test in `tests/reportBuilder.test.mjs`.
4. Run `npm test`.
5. Check print output if the issue type changes report length or wording.
6. Update `docs/PROJECT_STATE.md` if the feature changes project scope.

## Triage Roadmap Issues

1. Keep public roadmap issues concrete and tied to a verifiable change or decision.
2. Do not create placeholder issues only to inflate activity.
3. When an issue changes product behavior, update the relevant docs in the same pull request or commit.
4. Close issues only after code/docs and checks are complete.

## Prepare a GitHub Release

1. Run `npm test`.
2. Run `npm run check`.
3. Run the app locally with `npm run dev`.
4. Verify desktop and mobile layouts in a browser.
5. Update `docs/PROJECT_STATE.md` with verified and unverified status.
6. Check that `README.md` still describes the current app.
7. Check that `CONTRIBUTING.md`, `SECURITY.md`, and `.github/` templates still match the workflow.
8. Run the checklist in `ACCESSIBILITY.md` for UI or report-output changes.
9. Verify live Pages after pushing static/PWA changes.
10. Tag the release, push the tag, and create the GitHub release only after the local checks pass.

## Maintainer Readiness Check

Run:

```bash
npm run check
```

The check verifies required contributor/security/docs/template files and rejects destructive commands in `package.json` scripts.

## GitHub Pages

GitHub Pages is currently enabled as a legacy branch deployment from `main` root.

Live URL:

```text
https://lalishka.github.io/fixnote/
```

After changing static app files:

1. Push to `main`.
2. Wait for GitHub Pages to rebuild from the branch.
3. Open the live URL and verify the page is not blank.
4. Confirm CSS, JS, and SVG assets return 200.
5. Update `docs/PROJECT_STATE.md` with the deployment result.

## PWA and Offline Cache

The service worker caches only static app assets. It must not cache user report text or send report text to a remote endpoint.

After changing `manifest.webmanifest`, `service-worker.js`, or static asset paths:

1. Run `npm test`.
2. Run `npm run check`.
3. Verify the app in a browser.
4. Verify live Pages asset requests return 200 after deployment.
5. Update `docs/PROJECT_STATE.md` with verified and unverified status.

## Enable Automatic CI Later

The CI workflow file is currently manual-dispatch only because GitHub reported an account billing lock when automatic push workflows first ran.

After the account blocker is resolved:

1. Change `ci.yml` to run on `push` and `pull_request`.
2. Push the change and confirm the CI workflow completes successfully.

# Runbook

## Add a New Issue Type

1. Add the option to `index.html`.
2. Add the matching label to `issueLabels` in `src/reportBuilder.js`.
3. Add or update a test in `tests/reportBuilder.test.mjs`.
4. Run `npm test`.
5. Update `docs/PROJECT_STATE.md` if the feature changes project scope.

## Prepare a GitHub Release

1. Run `npm test`.
2. Run `npm run check`.
3. Run the app locally with `npm run dev`.
4. Verify desktop and mobile layouts in a browser.
5. Update `docs/PROJECT_STATE.md` with verified and unverified status.
6. Check that `README.md` still describes the current app.
7. Check that `CONTRIBUTING.md`, `SECURITY.md`, and `.github/` templates still match the workflow.
8. Tag the release, push the tag, and create the GitHub release only after the local checks pass.

## Maintainer Readiness Check

Run:

```bash
npm run check
```

The check verifies required contributor/security/docs/template files and rejects destructive commands in `package.json` scripts.

## GitHub Pages

The Pages workflow deploys the static repository root from `main` when manually dispatched.

Expected live URL:

```text
https://lalishka.github.io/fixnote/
```

After changing Pages workflow or static app files:

1. Resolve any GitHub account/repository Actions blockers.
2. Trigger the `Pages` workflow manually.
3. Wait for the `Pages` workflow to complete.
4. Open the live URL and verify the page is not blank.
5. Update `docs/PROJECT_STATE.md` with the deployment result.

## Enable Automatic CI Later

The workflow files are currently manual-dispatch only because GitHub reported an account billing lock when automatic push workflows first ran.

After the account blocker is resolved:

1. Change `ci.yml` to run on `push` and `pull_request`.
2. Change `pages.yml` to run on `push` to `main` if automatic Pages deploys are desired.
3. Push the change and confirm both workflows complete successfully.

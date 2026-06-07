# Testing

## Required Before Release

Run:

```bash
npm test
npm run check
```

Manually verify in a browser:

- the page is not blank;
- form fields update the generated report;
- the generated report has a subject, details, impact, requested action, and evidence line;
- the copy button either copies text or shows a manual-copy fallback;
- the print button opens print flow and the print stylesheet hides editing controls;
- layout works at desktop and mobile widths;
- text does not overlap or overflow important controls.

## Current Automated Coverage

- Report builder creates structured output.
- Missing fields get visible placeholders.
- Unknown issue types fall back to a stable label.
- User-entered whitespace is normalized before output.
- Unknown evidence values are ignored instead of leaking into the generated report.
- Printable report output keeps required report sections.
- Maintainer-readiness check validates required docs, templates, and package script safety.
- GitHub Actions CI workflow exists and runs `npm test` plus `npm run check` when manually dispatched. Automatic GitHub-hosted execution is blocked until the account Actions issue is resolved.

## Current Manual Browser Evidence

Last checked: 2026-06-07

- URL: `http://localhost:4173`
- Tool: local Playwright CLI wrapper.
- Desktop viewport: `1365x900`.
- Mobile viewport: `390x844`.
- Console after favicon fix: 0 errors, 0 warnings.
- 2026-06-07 refresh: location/details fields and Photo evidence checkbox updated the generated report in browser.
- 2026-06-07 PWA/print smoke: `manifest.webmanifest` returned 200, service worker registered locally, Print report triggered `window.print`, desktop/mobile snapshots showed Copy and Print buttons, and console had 0 errors and 0 warnings.
- 2026-06-07 live Pages PWA/print smoke: `manifest.webmanifest` and `service-worker.js` returned 200, service worker registered at `https://lalishka.github.io/fixnote/`, Print report button was visible, and console had 0 errors and 0 warnings.
- Local screenshots were saved under `.playwright-cli/` and are ignored by Git.

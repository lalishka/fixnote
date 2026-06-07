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
- layout works at desktop and mobile widths;
- text does not overlap or overflow important controls.

## Current Automated Coverage

- Report builder creates structured output.
- Missing fields get visible placeholders.
- Unknown issue types fall back to a stable label.
- User-entered whitespace is normalized before output.
- Unknown evidence values are ignored instead of leaking into the generated report.
- Maintainer-readiness check validates required docs, templates, and package script safety.

## Current Manual Browser Evidence

Last checked: 2026-06-07

- URL: `http://localhost:4173`
- Tool: local Playwright CLI wrapper.
- Desktop viewport: `1365x900`.
- Mobile viewport: `390x844`.
- Console after favicon fix: 0 errors, 0 warnings.
- Local screenshots were saved under `output/playwright/` and are ignored by Git.

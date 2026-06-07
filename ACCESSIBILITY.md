# Accessibility

FixNote is intended for public-good civic reporting, so accessibility is part of the project scope rather than a polish task.

## Current Accessibility Baseline

The current app includes:

- semantic page regions for the introduction, report builder, and generated report;
- visible labels for form fields;
- native form controls for selects, text fields, textarea, checkboxes, and button actions;
- keyboard-focus styling;
- responsive desktop and mobile layouts;
- browser smoke checks for visible form controls and generated output;
- local-only report generation with no required account, tracking, or remote API.

## Manual Review Checklist

Before a release that changes UI or report output, check:

- page title is meaningful;
- all interactive controls have visible labels or accessible names;
- keyboard users can reach form fields, checkboxes, and the copy button;
- focus state is visible;
- generated report updates after keyboard input;
- generated report remains readable on mobile;
- text does not overlap or overflow controls;
- color contrast is readable in normal and focus states;
- copy status is announced through the existing live region;
- no report text is sent to a remote service.

## Known Gaps

- No full WCAG audit has been completed yet.
- No screen reader transcript has been captured yet.
- No automated accessibility tooling is installed.
- No multilingual accessibility review has been done because the app is English-only in the first version.

## Next Accessibility Work

- Run a screen reader smoke pass.
- Add a high-contrast review.
- Add printable output checks.
- Add automated accessibility checks only after evaluating whether a new dependency is justified.

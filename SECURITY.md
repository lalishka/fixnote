# Security Policy

FixNote is a static offline-first web app. It has no backend, account system, database, analytics, or external runtime API calls in the first version.

## Supported Version

The current public `main` branch is the supported development version.

## Reporting Security or Privacy Issues

Open a GitHub issue if the report does not contain sensitive personal data.

If the issue includes private location details, private contact data, or a suspected secret, avoid posting that data publicly. Describe the risk at a high level and ask for a private contact path.

## Current Security Boundaries

- Report text is generated locally in the browser.
- No report data is sent to a server by the app.
- Clipboard use is limited to the browser copy action.
- No third-party JavaScript is loaded at runtime.


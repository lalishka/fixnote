# FixNote

FixNote is a small offline web app that helps people write clear public-space issue reports for municipal teams, campus facilities, building managers, NGOs, and community groups.

It turns messy notes about problems like broken streetlights, potholes, trash, blocked sidewalks, unsafe crossings, and accessibility barriers into a concise report with:

- a short subject line;
- a structured description;
- impact and urgency wording;
- an evidence checklist;
- a copy-ready message.

The project is intentionally not country-specific. It has no backend, accounts, tracking, paid APIs, or external runtime dependencies.

Public repository: <https://github.com/lalishka/fixnote>

## Why

Many public-space reports fail because the message is vague, missing location details, or does not explain the impact. FixNote helps residents, students, tenants, volunteers, and community organizers send cleaner reports without needing to know official wording for any specific country.

## Use Locally

Open `index.html` directly in a browser, or run a local server:

```bash
npm run dev
```

Then open `http://localhost:4173`.

## Verify

```bash
npm test
```

The test suite validates the report generation logic with Node's built-in test runner.

## Documentation

Start with [docs/README.md](docs/README.md).

## License

MIT

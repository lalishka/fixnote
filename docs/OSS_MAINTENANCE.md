# OSS Maintenance Plan

FixNote is an early-stage civic-tech/public-good OSS project. It is not yet a critical or widely used dependency, and it does not yet have package download metrics or real pull request volume.

The project is being prepared for responsible open-source maintenance before broader adoption.

## Current Public Signals

- Public repository: <https://github.com/lalishka/fixnote>
- Live demo: <https://lalishka.github.io/fixnote/>
- License: MIT.
- First release: `v0.1.0`.
- Topics: `civic-tech`, `offline`, `accessibility`, `community-tools`, `public-good`.
- Current scope: static offline-first browser app with no backend, accounts, tracking, paid APIs, or remote runtime dependencies.

## Why It Matters

Public-space issues often go unresolved because reports are vague, missing impact details, or hard to submit clearly. FixNote helps residents, students, tenants, volunteers, and community groups turn messy notes into structured, actionable reports.

The project is intentionally country-neutral so it can be reused by municipalities, campuses, building managers, NGOs, neighborhood groups, and civic volunteers.

## Maintainer Responsibilities Added Early

FixNote now includes a small maintainer baseline:

- contributor guidelines;
- security and privacy reporting policy;
- accessibility baseline and review checklist;
- issue and pull request templates;
- release and testing runbooks;
- manual-dispatch GitHub Actions CI and Pages deployment workflows;
- automated maintainer-readiness check;
- tests for report-generation behavior and edge cases;
- print report workflow;
- PWA manifest and static-asset service worker.

The public roadmap is tracked in GitHub issues:

- #1 Accessibility audit checklist and screen reader smoke pass
- #4 Translation readiness without country-specific assumptions
- #5 Review public-space issue categories

Closed roadmap work:

- #2 Printable report output mode
- #3 PWA/offline install readiness review

## How Codex/API Credits Would Help

Codex and API credits would be used for practical OSS maintenance work:

- generating and reviewing test cases;
- checking accessibility and offline-first edge cases;
- improving documentation and release notes;
- summarizing issues and proposed changes;
- building small QA scripts for maintainer-readiness checks;
- reviewing privacy and security-sensitive changes before release.

## Honest Limitations

- The project is early and does not yet have external adoption.
- GitHub Actions CI is prepared but blocked until GitHub-hosted Actions can run for the repository account.
- No full WCAG or screen-reader audit has been completed yet.
- No full accessibility audit has been completed yet.
- No country-specific reporting integrations are included.

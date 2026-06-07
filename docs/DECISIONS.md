# Decisions

## Static App, No Backend

FixNote stays static for the first version.

Reason: the app does not need accounts, storage, or location services to create value. A static app is cheaper to host, safer for privacy, easier to fork, and easier to run offline.

## International, Non-Country-Specific Scope

FixNote must not assume Russian, US, EU, or any other national public-service workflow.

Reason: the project should be useful as a neutral public-good GitHub project for many contexts: municipalities, campuses, building management, NGOs, neighborhood groups, and volunteer teams.

## No External APIs

The first version does not connect to municipal reporting systems, maps, geocoding, AI services, analytics, or clipboard fallbacks that require remote code.

Reason: civic reporting often contains sensitive location and personal context. Keeping all text in the browser makes the privacy model simple.

## Plain-Language Output

Generated reports use direct, non-legalistic wording.

Reason: the goal is to help residents send clearer reports, not to imitate a lawyer, escalate conflict, or imply guaranteed service response.

## Maintainer-Readiness Baseline

FixNote includes a small maintainer-readiness check and repository templates before it has a large contributor community.

Reason: the project is public-good OSS, so contributors and future maintainers need clear safety boundaries early: privacy limits, country-neutral scope, no destructive scripts, and repeatable checks.

## PWA and Print Support

FixNote includes a web app manifest, service worker, and print stylesheet.

Reason: public-space reporting often happens in low-connectivity or offline contexts, and some users need to submit reports in person or attach a printed/PDF copy. The service worker caches only static assets and must not store user report text.

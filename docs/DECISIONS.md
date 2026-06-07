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

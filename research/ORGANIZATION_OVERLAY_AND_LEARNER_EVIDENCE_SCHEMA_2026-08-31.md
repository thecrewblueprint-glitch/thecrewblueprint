# Organization Overlay and Learner Evidence Architecture

**Prepared:** 2026-08-31  
**Status:** Static architecture baseline; no account/backend implementation implied

## Purpose

The Crew Blueprint core should stay transferable across employers, venues, production companies, labor providers, rental shops, schools, and workforce programs. Organization-specific requirements belong in a separate overlay so the general curriculum does not silently become employer authorization.

## Three-layer model

### Layer A — Crew Blueprint core

Transferable vocabulary, mental models, bounded ordinary field skills, systems literacy, professional practice, career navigation, and knowledge assessment.

### Layer B — Organization overlay

An employer/venue/program can add its own:
- policy references;
- site/venue orientation;
- check-in/timekeeping/reporting rules;
- emergency/reporting contacts;
- equipment/model-specific training references;
- department procedures;
- observer/supervisor assignment;
- local jurisdiction/CBA/program requirements;
- authorization records controlled by the organization.

Layer B can add or narrow requirements. It cannot retroactively make a Crew Blueprint course an external certification or legal qualification.

### Layer C — Learner evidence

Keep these states distinct:

1. `exposed` — learner opened/received the material.
2. `knowledge_checked` — bounded knowledge assessment was completed.
3. `practice_attempted` — practice was attempted under the named conditions.
4. `observed_practice` — an identified observer recorded the named task/conditions.
5. `experience_self_reported` — learner reported work experience.
6. `experience_verified` — an external person/record verified the stated experience.
7. `organization_authorized` — an employer/venue/organization granted a defined authorization within its own scope.
8. `external_training_completed` — third-party training was completed.
9. `external_certification` — a named certifying body issued a credential.
10. `license_or_legal_qualification` — a competent legal/credential authority established the applicable status.

Never collapse these states into one generic "certified" badge.

## Minimal record fields

Any future account/backend implementation should be able to preserve:
- learner or subject identifier;
- evidence-state type;
- course/competency/task identifier;
- version of content or standard assessed;
- date/time;
- assessment result where applicable;
- conditions/equipment/model/site scope where relevant;
- observer/verifier/authority and organization where applicable;
- evidence/provenance reference;
- expiration/review date where applicable;
- supersession/revocation state;
- privacy/access-control classification.

## Organization overlay record fields

- organization identifier and display name;
- overlay version/effective date;
- applicable site/venue/business unit;
- linked Crew Blueprint competency/course;
- organization requirement text/reference;
- policy/manual/source version;
- required learner evidence state;
- responsible organization role;
- whether the item is information, training, observed practice, authorization, or external credential;
- review/expiry/supersession rules.

## Privacy/minimization rule

Do not collect identity, employment, credential, medical, accommodation, disciplinary, tax, or other sensitive data merely because the schema can represent a state. Future product implementation must collect only data needed for a defined purpose, define retention/access rules first, and update the privacy policy before data collection goes live.

## Product boundary

The current static GitHub Pages implementation does not provide accounts, server-side progress, verified learner identity, employer authorization, or persistent organization records. This architecture exists so a future backend can be built without corrupting the authority model.

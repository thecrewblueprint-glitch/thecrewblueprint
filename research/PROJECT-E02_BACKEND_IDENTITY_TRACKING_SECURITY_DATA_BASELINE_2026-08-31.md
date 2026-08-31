# PROJECT-E02 — Backend, Identity, Tracking, Security, and Data Requirements Baseline

**Prepared:** 2026-08-31  
**Status:** Requirements baseline; no implementation stack selected  
**Purpose:** Define what the future Crew Blueprint backend must be capable of supporting before choosing databases, authentication vendors, LMS frameworks, hosting patterns, or analytics architecture.

---

# 1. Controlling rule

The future backend should be designed from **evidence, user roles, privacy/security risk, learning-state semantics, and organization workflows** — not from whichever framework is easiest to deploy first.

This file defines requirements and reference standards. It does **not** select:

- database vendor;
- authentication provider;
- cloud host;
- analytics vendor;
- LMS vendor;
- payment processor;
- organization/tenant implementation;
- API framework.

---

# 2. Core data problem

Crew Blueprint already distinguishes multiple states that must never collapse into one generic `completed=true` flag:

1. lesson viewed / learner position;
2. knowledge check attempted/completed;
3. part/course knowledge completion;
4. skill prepared for field practice;
5. observed practice on named equipment/conditions;
6. employer/responsible-person authorization in a real context;
7. external credential/qualification/license evidence;
8. content/source/reviewer version under which the event occurred.

These are different evidence types with different owners and liability implications.

## Backend implication

The future record model must support **typed events and typed evidence**, not only course progress percentages.

---

# 3. Identity and authentication reference baseline

## NIST SP 800-63-4 family

NIST published the current Digital Identity Guidelines SP 800-63-4 family in 2025, covering identity proofing, authentication, authenticator management and federation.

Primary sources:

https://csrc.nist.gov/pubs/sp/800/63/4/final  
https://csrc.nist.gov/pubs/sp/800/63/a/4/final  
https://csrc.nist.gov/pubs/sp/800/63/b/4/final  
https://csrc.nist.gov/pubs/sp/800/63/c/4/final

### Crew Blueprint interpretation

Do **not** assume every learner account needs high-assurance identity proofing.

Instead, research the assurance required for each action:

- reading content;
- saving progress;
- receiving an educational completion record;
- submitting observed practice;
- acting as a reviewer;
- acting on behalf of an organization;
- verifying an external credential;
- making billing/admin changes;
- exporting employee/worker data.

Higher-risk actions may warrant stronger authentication, verification or organizational control than ordinary self-study.

## OWASP ASVS 5.0

OWASP ASVS 5.0.0 is the current stable Application Security Verification Standard and provides a structured baseline for verifying web-application technical security controls.

Source:  
https://owasp.org/www-project-application-security-verification-standard/

### Requirement

When backend implementation begins, security acceptance criteria should be versioned against an explicit ASVS release rather than vague statements such as “industry-standard security.”

---

# 4. Candidate account/role model — research hypothesis

The system may eventually require distinct actors such as:

- **Learner** — owns personal learning activity and controls appropriate sharing.
- **Observer / Reviewer** — records or reviews a bounded practice event.
- **Organization Manager** — assigns content and views organization-authorized records.
- **Instructor / Facilitator** — supports cohorts without automatically becoming an employer authorizer.
- **Content Reviewer / Practitioner** — reviews source/course accuracy; separate from learner assessment.
- **Administrator** — manages platform/configuration.
- **External Credential Verifier** — possible integration/process, not necessarily a human account role.

These are hypotheses. Primary buyer/user research must determine whether they are actually needed and whether roles should combine or remain separate.

## Critical rule

A reviewer recording `observed practice` must not automatically gain authority to issue `employer authorization` or `external qualification`.

Role permissions should reflect the evidence state they can legitimately create.

---

# 5. Organization / multi-tenant requirements to research

If organizational customers are validated, the backend may need:

- organization/workspace separation;
- learner membership in zero/one/multiple organizations;
- organization-specific content assignments;
- local-policy overlays that do not overwrite canonical Crew Blueprint content;
- roster import/export;
- manager/reporting roles;
- reviewer assignment;
- organization-owned observations vs learner-owned portable records;
- offboarding/retention rules;
- audit history;
- organization-specific consent/sharing rules;
- optional federation/SSO;
- data export and deletion workflows.

Do not build full multi-tenancy until buyer research verifies these requirements.

---

# 6. Learning-event and analytics interoperability baseline

## xAPI / Learning Record Store concept

The Advanced Distributed Learning ecosystem defines xAPI around capturing and communicating learner performance/activity through a Learning Record Store (LRS).

Reference:  
https://www.adlnet.gov/guides/tla/service-definitions/

## 1EdTech Caliper Analytics

Caliper Analytics provides a standardized vocabulary/model for capturing learning activities such as assessment, media, reading, sessions, feedback and tool use.

Source:  
https://www.1edtech.org/standards/caliper

## Crew Blueprint requirement

Do **not** adopt xAPI or Caliper automatically.

Instead, design Crew Blueprint's event vocabulary first, then evaluate interoperability standards against it.

Candidate events include:

- lesson_started;
- lesson_completed;
- question_answered;
- assessment_completed;
- source_panel_viewed;
- skill_practice_prepared;
- practice_observed;
- practice_rework_required;
- practice_stopped;
- external_credential_linked;
- content_version_changed;
- reviewer_disposition_recorded;
- organization_assignment_created;
- course_release_exposed;
- learner_feedback_submitted.

Each event should have a defined purpose before being collected.

---

# 7. Versioning and provenance requirements

Because course claims and sources will change, progress records must retain the version context.

Minimum future metadata should be able to answer:

- What exact course/lesson/block/question did the learner see?
- What content version was current?
- What source/review state supported it?
- Was the item later superseded or corrected?
- What equipment/context was used for observed practice?
- Who recorded the observation and under what role?
- Did a later organization authorization supersede/expire?
- What external credential/version/expiry was recorded?

## Architecture principle

**Never rewrite history merely because content changes.**

Current truth and historical learner evidence are different concerns.

---

# 8. Data minimization and purpose limitation

Do not collect data simply because it might be useful later.

For every field/event, record:

- purpose;
- owner/controller;
- who can see it;
- retention trigger;
- deletion/export behavior;
- sensitivity;
- whether it affects a learner-facing decision;
- whether it can be derived instead of stored.

Particularly sensitive future categories may include:

- real name/contact data;
- organization/employment relationship;
- skill/practice evaluations;
- credential identifiers;
- accessibility/accommodation information;
- payment/billing information;
- age/date-of-birth data;
- behavioral analytics.

Avoid storing unnecessary health, identity, demographic or employment data.

---

# 9. Age / youth privacy research boundary

The FTC finalized amendments to the Children's Online Privacy Protection Rule in 2025, strengthening requirements concerning collection/use/disclosure of children's personal information and parental control.

Source:  
https://www.ftc.gov/news-events/news/press-releases/2025/01/ftc-finalizes-changes-childrens-privacy-rule-limiting-companies-ability-monetize-kids-data

## Requirement

Before launching accounts broadly, determine the intended minimum learner age and applicable federal/state/international youth-privacy requirements.

Do not casually collect birth dates or create youth profiles before this research is complete.

The product may choose an age boundary, institution-mediated model, or other approach, but that is a later compliance/product decision.

---

# 10. Accessibility baseline

WCAG 2.2 is the current W3C Recommendation for web content accessibility and W3C recommends using the current version when developing/updating accessibility policy.

Source:  
https://www.w3.org/TR/WCAG22/

## Crew Blueprint requirements to carry into implementation

- semantic structure;
- keyboard operation;
- focus visibility and non-obscured focus;
- adequate target size;
- text alternatives for diagrams/images;
- captions/transcripts for instructional video/audio;
- avoid color-only meaning;
- readable contrast;
- accessible authentication;
- reflow/responsive behavior;
- error identification/recovery;
- text fallback for visual instruction.

Accessibility metadata already required by the content evidence matrix should feed the eventual product implementation rather than being recreated separately.

---

# 11. Cybersecurity governance baseline

## NIST Cybersecurity Framework 2.0

NIST CSF 2.0 provides a risk-management framework usable by organizations of any size.

Sources:

https://csrc.nist.gov/pubs/cswp/29/the-nist-cybersecurity-framework-csf-20/final  
https://csrc.nist.gov/pubs/sp/1300/final

NIST also published a 2026 draft aimed specifically at non-employer/small firms, relevant to the project's current scale.

Source:  
https://csrc.nist.gov/pubs/cswp/50/small-business-cybersecurity-non-employer-firms/ipd

## Requirement

Security planning should scale with the business but begin before sensitive learner/organization records exist.

Future controls should cover at minimum:

- asset/data inventory;
- access control;
- authentication/session security;
- secure development/review;
- dependency/supply-chain risk;
- backups/recovery;
- logging/monitoring;
- incident response;
- vulnerability management;
- secrets management;
- data retention/deletion;
- vendor risk.

---

# 12. Analytics ethics and product decision boundary

The platform should measure whether learning works, but analytics must not become surveillance by default.

Before collecting an event ask:

1. What decision will this event improve?
2. Can the same decision be made with less data?
3. Is this learner-facing, organization-facing or internal product research?
4. Is aggregation sufficient?
5. How long must it persist?
6. Could it be misinterpreted as job performance or employment evaluation?
7. Does the learner know it is collected?

## Important distinction

`Learner spent 18 minutes on lesson` is not equivalent to `learner understands the lesson`.

`Learner completed course` is not equivalent to `learner is authorized to perform the work`.

The backend schema should make these false equivalences difficult.

---

# 13. Minimum architecture capabilities before account launch

Do not require all enterprise features, but the first real account architecture should be able to support or migrate cleanly toward:

- stable user IDs;
- stable content/version IDs;
- typed learning events;
- separate practice/authorization/credential records;
- role-based access;
- consent/sharing metadata where needed;
- audit history for consequential writes;
- data export/deletion path;
- content supersession/version history;
- accessible authentication/UI;
- secure password/federated authentication patterns;
- backup/recovery;
- privacy/security logging that avoids unnecessary sensitive payloads.

---

# 14. Architecture decisions explicitly deferred

Do not yet decide:

- SQL vs document/event store;
- monolith vs services;
- custom auth vs managed identity;
- xAPI LRS vs native event store;
- Caliper implementation;
- SSO protocols/customer tiers;
- data warehouse/vendor;
- organization tenancy strategy;
- mobile app vs PWA;
- credential wallet/badging system.

Those decisions should follow validated workflow and scale requirements.

---

# 15. Research next steps

1. Map every currently imagined user role to legitimate evidence-writing permissions.
2. Conduct learner/buyer interviews before finalizing organization roles.
3. Create a data classification and retention matrix.
4. Create an event taxonomy tied to specific product/research decisions.
5. Research youth/privacy/state-law scope once target audience/geography is clearer.
6. Compare candidate architecture patterns against real requirements and expected scale/cost.
7. Threat-model the first authenticated architecture before implementation.
8. Define export/migration strategy so the product is not trapped in one vendor.

**Current conclusion:** The project is ready to research and design a real backend, but **not ready to choose the backend merely from current static-site structure**. Requirements, evidence semantics, privacy, security, accessibility and customer workflow must lead implementation.
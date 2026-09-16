# Issue #74 — Licensed Legal Review Packet

Status: pre-review packet. This is an implementation inventory for qualified counsel; it is not legal advice and does not represent the product as attorney-reviewed.

## 1. Product and operator

The Crew Blueprint is a live-production workforce education product operated as a brand of Deadhang Labor LLC. The current release target is a WordPress-hosted free learning product with Clerk-backed learner identity and server-side authorization.

Current learner model:
- signed out: approved public/sample surfaces;
- eligible authenticated learner: approved free ORIENT/SUPPORT curriculum;
- advanced OPERATE/DEEPEN-LEAD: unavailable at current launch;
- Production Atlas: unavailable as a learner tool at current launch.

Training completion is intended to represent education/assessed knowledge only. It must not be represented as establishing field experience, employer authorization, certification/licensure, qualified-person status, or practical competency where supervised evaluation is required.

## 2. Current public legal surfaces

Repository surfaces currently include:
- Privacy Policy
- Terms and Conditions
- Cookies Notice
- Accessibility Statement
- Limitation of Liability
- Affiliate Disclosure

These documents require counsel review against the actual production configuration. Their presence does not establish legal review.

## 3. Authentication and eligibility data flow

Expected production flow:

`visitor → WordPress public/sample surface → Clerk authentication/account creation → server-side WordPress Clerk/JWT verification → server-trusted adultEligibility/authorization decision → approved protected free learner route`

Controls requiring review:
- account creation uses an age-eligibility flow;
- under-18 registration is blocked by product policy;
- existing-account sign-in does not re-collect date of birth;
- raw date of birth should not be retained when an eligibility result is sufficient;
- application authorization must rely on server-trusted metadata/store, not client-editable metadata;
- production secrets remain server-side.

## 4. Learner records

Planned/present learner data classes may include:
- stable account identity;
- course/lesson completion;
- assessment/mastery state;
- competency state;
- curriculum/assessment version;
- pathway/role interests;
- entitlement/access state;
- optional public credential preferences in future.

Counsel decision needed:
- retention periods;
- account deletion consequences;
- data export/access expectations;
- deletion/anonymization of learning records;
- public credential consent/revocation model;
- treatment of historical/versioned assessment evidence.

## 5. Feedback/contact intake

Issue #73 defines a proposed server-side intake architecture. Expected private data may include:
- feedback/contact message;
- optional reply email;
- page/course/build provenance;
- server timestamp;
- durable submission ID/status;
- optional server-attached Clerk user ID when authenticated.

Counsel decision needed:
- retention/deletion period;
- privacy disclosure;
- user-submitted content rights and permission to incorporate feedback;
- handling of legal/privacy/accessibility requests;
- whether any additional consent language is required.

## 6. Third-party processor inventory to verify on production

Known/planned classes:
- WordPress/hosting provider — application hosting/runtime;
- Clerk — authentication/identity;
- GitHub — source/release engineering, not intended as private learner-data storage;
- AWS/S3/CloudFront or successor media infrastructure if activated — instructional media delivery;
- email/transactional messaging provider when feedback/contact intake is activated;
- analytics services only if actually present in the production runtime.

Do not finalize processor statements from repository intent alone. The final inventory must be captured from the real production network/cookie behavior and vendor configuration.

## 7. Media, intellectual property and provenance

The product may contain original text, diagrams, generated imagery, licensed/third-party references, cited source material, trademarks, and media generated through governed visual tooling.

Counsel review requested for:
- copyright/licensing treatment;
- generated-image rights and provenance records;
- third-party marks/logos;
- manufacturer references and links;
- citation/source use;
- user-submitted feedback rights;
- public repository licensing boundaries versus learner-facing content.

Manufacturer or external training should be linked/referenced rather than copied or repackaged where rights are not held.

## 8. Safety and training representations

The public product contains live-event production education, including safety awareness and bounded controlled-specialty material.

Required representation principle:
- education does not replace employer/site-specific training;
- education does not grant authorization for specialized work;
- controlled/high-risk subjects retain explicit qualification/authority boundaries;
- safety awareness necessary to recognize hazards, stop work, or escalate must not be hidden behind future paid access.

Counsel should review the adequacy and placement of disclaimers and limitation language without weakening the instructional safety model.

## 9. Employment and career representations

The long-term product may connect competency learning to employer/market information and possible employer recognition.

Current constraints:
- no guaranteed employment;
- no implied employer endorsement without documented permission;
- no claim that purchasing/completing training automatically creates preferred placement;
- Production Atlas remains separate market/work intelligence;
- any future recruiting/referral business model requires separate legal/business review before activation.

## 10. Accessibility

The repository contains an Accessibility Statement and automated structural accessibility validation. Manual production QA remains required.

Counsel should review:
- public accessibility representations;
- accessibility feedback/request process;
- whether stated conformance language accurately matches tested production behavior.

## 11. Geographic/audience scope

Current intended audience is adult learners. Product policy blocks under-18 account creation.

Before broader launch, owner/counsel should explicitly record:
- launch jurisdictions intentionally served;
- whether access is restricted by jurisdiction;
- applicable state privacy/consumer requirements;
- any international availability and resulting obligations.

Do not infer a nationwide or international compliance conclusion solely because the website is technically reachable there.

## 12. Questions for counsel

1. Are the Terms, Privacy, Cookies, Liability, Accessibility and Affiliate documents adequate for the actual production data flows?
2. Is the 18+ account policy and DOB-minimization approach sufficient for the intended audience and jurisdictions?
3. What retention, deletion and export rights/processes should apply to learner records?
4. What retention and consent terms should apply to feedback/contact submissions?
5. Are the training, safety, credential and employment disclaimers appropriately scoped and placed?
6. What rights language is required for user-submitted feedback that may influence curriculum revisions?
7. Are generated media, third-party marks, manufacturer references and repository/public-content licensing boundaries adequately handled?
8. What accessibility representations should the product make based on its actual testing process?
9. What governing-law, dispute, consumer-notice and contact provisions are appropriate?
10. What additional review is required before paid learning, employer-sponsored access, credentials, recruiting/referral services, or a contractor-network relationship is activated?

## 13. Evidence counsel should receive privately

Provide outside the public repository:
- production site URL and release/build identifier;
- screenshots or export of production Clerk settings relevant to data flow without exposing reusable secrets;
- actual production cookie/network inventory;
- processor/vendor list and applicable agreements/settings;
- learner data schema and retention configuration;
- feedback/contact data schema once implemented;
- current public legal documents;
- representative course safety/credential disclaimers;
- any private attorney communications.

## 14. Remaining gate

Issue #74 cannot be considered complete until appropriately licensed counsel has reviewed the actual production implementation/documents and resulting decisions have been translated into concrete implementation changes where necessary.

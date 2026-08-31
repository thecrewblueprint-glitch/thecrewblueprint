# MDQ-120–124 — Career, Employment, Qualification and Professional-Practice Evidence

**Prepared:** 2026-08-31  
**Status:** Source-grounded career/credential architecture; suitable for learner career mapping and future backend credential semantics  
**Depends on:** all department role architectures, sector-transfer packet, IATSE/OSHA/ETCP/AVIXA current sources  
**Purpose:** Give learners an accurate picture of how people enter, move through and document careers without confusing education, course completion, employer authorization, certification, licensing or union/local status.

---

# MDQ-120 — Entry routes and hiring ecosystem

## Entry channels

The live-event workforce has multiple entry routes rather than one canonical hiring pipeline:

- labor providers / staging companies;
- production vendors;
- venues / house crews;
- IATSE/local union referral or hiring systems;
- rental shops / warehouses;
- corporate AV providers;
- theatres / performing-arts organizations;
- festivals / event operators;
- touring vendors/production companies;
- educational/workforce programs;
- direct freelance/referral relationships.

## Transferable employability signals

Evidence across current stagehand/job/training sources consistently supports:

- reliability/attendance;
- safe work behavior;
- honest skill representation;
- communication;
- ability to take direction;
- task completion/report-back;
- department/system familiarity;
- references/reputation;
- availability and location/travel fit where applicable.

## Employment-status literacy

Crew Blueprint should teach the general distinction among employee, temporary worker, union referral, independent contractor and business/vendor relationships without deciding a worker's legal classification for them. Actual classification depends on facts and applicable law.

## Career system design implication

The future product should not assume “employment history” is one employer list. Workers may need to represent:

- companies/venues/locals/clients;
- gigs/calls/projects;
- departments/roles;
- dates/hours/experience evidence;
- references;
- credentials;
- observed-practice records;
- self-reported vs externally verified evidence.

**State:** `researched` → `draftable`.

---

# MDQ-121 — Union and collective-bargaining awareness

## Core learner concepts

Teach neutrally:

- IATSE is an international union with many local unions and crafts;
- local jurisdiction/referral/training practices can differ;
- collective bargaining agreements can govern rates, minimum calls, overtime, breaks, benefits and working conditions;
- touring contracts and local conditions can interact;
- union membership, permit/referral status and employer hiring systems are not nationally identical;
- learners should use the actual local/employer/contract information for their call.

## Current IATSE evidence

IATSE's touring guidance explicitly says working conditions vary by contract/tier and local conditions. Its local directory shows a large network of stagecraft locals across the U.S. and Canada, reinforcing that local variation is structural rather than exceptional.

The IATSE Training Trust Fund and International education programs also demonstrate that union career development includes craft, safety and leadership training rather than only job referral.

## Curriculum rule

Never write a local practice as “how IATSE works everywhere.”

**State:** `draftable` for orientation; local-specific advice requires current local evidence.

---

# MDQ-122 — Credential and training landscape

## Credential-state taxonomy

The product must distinguish:

1. **Education / course completion** — evidence someone completed learning.
2. **Awareness card / completion card** — evidence of a defined training program, not necessarily certification.
3. **Certification** — external body verifies knowledge/skills against a defined program/exam.
4. **Manufacturer/vendor certificate** — product/ecosystem-specific learning or verification.
5. **Employer qualification/authorization** — employer determines the worker may perform a particular task/context.
6. **License** — legal/regulatory authorization where required.
7. **Union/local referral/training status** — separate labor-system state.

No state should silently imply another.

## OSHA Outreach

Current OSHA guidance is explicit:

- 10-hour and 30-hour Outreach courses issue **course-completion cards**;
- they are **not OSHA certification or licensing**;
- the 10-hour program is aimed at basic hazard awareness;
- the 30-hour program is intended for supervisors/workers with some safety responsibility;
- Outreach does not satisfy employer training required by specific OSHA standards.

This wording should control Crew Blueprint references to OSHA cards.

## ETCP

ETCP provides specialist entertainment credentials including:

- Arena Rigger;
- Theatre Rigger;
- Entertainment Electrician;
- Portable Power Distribution Technician.

These target experienced workers and use eligibility requirements based primarily on experience. They are external specialist credentials, not beginner-course outcomes.

## AVIXA

AVIXA maintains professional AV credentials including CTS, CTS-D and CTS-I.

Current CTS-family certification is time-limited and requires continuing education/renewal; AVIXA states certification demonstrates audiovisual knowledge/skills but is not a guarantee of individual performance.

This is a useful model for Crew Blueprint's future credential UX: **show exact issuer, credential type, scope, issue/expiration status and verification source instead of one generic badge.**

## Manufacturer training

Manufacturer academies/certificates are valuable for console, network, processor, loudspeaker and other platform-specific skills but should remain clearly labeled vendor/product specific.

## Controlled equipment/task qualifications

MEWP, powered industrial equipment, fall-protection, electrical, rigging and other controlled-work training/authorization should remain external/employer-specific as applicable. Crew Blueprint can map these career requirements without serving as the operational qualification.

**State:** `requirements_ready` for credential semantics; source freshness remains ongoing.

---

# MDQ-123 — Career ladders and role-combination reality

## Core finding

There is no single industry ladder.

Career progression varies along independent dimensions:

- technical depth;
- equipment/system specialization;
- operation/programming;
- design/engineering;
- leadership;
- management/coordination;
- shop vs field;
- venue vs touring;
- generalist breadth;
- credentials/authorized work.

## Small-show vs large-show effect

Smaller productions frequently combine responsibilities. Larger productions often divide the same work among specialized departments and roles.

Therefore:

- combined-role experience is not automatically lower skill;
- a specialized role is not automatically management;
- a lead is not automatically the deepest technical specialist;
- a designer is not automatically the operational department head;
- moving sideways can be career growth.

## Career-map model

This supports the owner-facing **industry transit map**:

- lines = departments/role families;
- stations = meaningful responsibility/competency states;
- transfer stations = realistic lateral moves;
- bright path = completed/verified experience;
- muted = not yet evidenced;
- outward routes = plausible next paths;
- controlled gates = external qualification/authorization.

Final learner visualization can later be simplified without changing the underlying graph.

**State:** `architecture_ready` at conceptual graph level; exact role/station evidence continues to mature.

---

# MDQ-124 — Professional practice and sustainability

## Professional-practice families

- fatigue/schedule awareness;
- travel/readiness;
- clean handoffs;
- documentation habits;
- continuing education;
- source/manual/version literacy;
- tool/equipment care within assigned responsibility;
- damage reporting;
- professional communication;
- reputation/reference building;
- keeping credentials/current training organized.

## Continuing education

Current IATSE and AVIXA evidence supports ongoing education as a normal professional practice. AVIXA CTS renewals, for example, require continuing education over a three-year certification cycle.

## Sustainability

Curriculum should cover practical choices within job authority:

- reusable/maintained equipment and documentation;
- repair vs disposal where the responsible organization permits;
- battery/consumable management;
- e-waste/material disposal awareness;
- transport/logistics efficiency;
- energy use awareness;
- preserving equipment life;
- avoiding safety/reliability compromises in the name of sustainability.

## Career durability

Professional growth should be framed as:

**do ordinary work reliably → learn systems deeply → document experience → seek appropriate supervised opportunities/training → maintain current knowledge/credentials → choose technical, specialist, leadership, design or management directions as they fit.**

No callback, promotion or income outcome is guaranteed.

**State:** `draftable`.

---

# 6. Backend semantics resulting from this wave

Future profile records should distinguish:

- `learning_completion`;
- `knowledge_assessment`;
- `observed_practice`;
- `work_experience_self_reported`;
- `work_experience_verified`;
- `employer_authorization`;
- `external_training_completion`;
- `external_certification`;
- `license`;
- `union_local_or_referral_status` where there is a legitimate product need and lawful/user-consented basis.

Each external credential should support issuer, type, identifier only where appropriate, issue/expiration dates, verification status, scope and source rather than one generic “certified” boolean.

---

# 7. Current source ledger

## OSHA Outreach

- https://www.osha.gov/training/outreach/
- https://www.osha.gov/training/outreach/faq

Supports course-completion-card vs certification/license distinction and 10/30-hour program scope.

## ETCP

- https://etcp.esta.org/certify/certify.html

Supports specialist credential families and experience-based eligibility architecture.

## AVIXA

- https://www.avixa.org/training-certification/certification/certification-renewal
- https://www.avixa.org/training-certification/certification-prep/overview

Supports CTS-family credential/continuing-education structure.

## IATSE

- https://iatse.net/education/
- https://iatse.net/about/stagecraft/touring-2/
- current Training Trust Fund references through IATSE publications.

Supports union education, touring/local-condition variation and continuing craft/safety training.

---

# 8. Remaining evidence gaps

1. direct hiring-manager/labor-provider interviews;
2. local-union/referral-system sampling across markets;
3. credential demand/frequency in actual job postings;
4. willingness-to-pay/employer reimbursement for credentials;
5. manufacturer-training landscape by department;
6. state/local licensing/credential requirements only where product scope requires them;
7. learner interpretation testing for badge/status language;
8. privacy/legal review before storing employment/credential verification data;
9. claim-level MDQ-001 matrix.

---

# 9. Research-state decision

- **MDQ-120:** `researched` → `draftable`.
- **MDQ-121:** `researched` → `draftable` with local variation as a core rule.
- **MDQ-122:** `requirements_ready` for credential taxonomy/backend semantics.
- **MDQ-123:** `architecture_ready` for non-linear career graph.
- **MDQ-124:** `researched` → `draftable`.

Next: learning/evidence architecture MDQ-130–135, reconciled against ECQ rather than duplicated.
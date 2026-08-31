# Field-Practice Retroactive Backfill

**Prepared:** 2026-08-31  
**Status:** Active first-pass retrofit across the existing research corpus  
**Protocol:** `research/FIELD_PRACTICE_EVIDENCE_PROTOCOL_2026-08-31.md`  
**Matrix target:** `research/matrix/`

## Purpose

Retrofit the existing Crew Blueprint research corpus with public practitioner/community evidence so formal evidence explains **what controls the work** while field-practice evidence explains **how the work commonly happens**.

This pass applies retrospectively to the research already gathered across Stagehand, Field Skills, technical departments, production/coordination, specialties, sectors, career architecture and warehouse/rental-shop work.

Field-practice evidence is not permitted to override regulation, manufacturer instructions, employer/venue procedure, collective bargaining requirements, qualified-person status, certification/licensure, AHJ decisions or specialist authority gates.

## Evidence-stack rule

Mature operational claims should prefer this stack where available:

1. public practitioner/community observation identifies the field pattern;
2. independent practitioner/community evidence tests whether it repeats;
3. employer/union/job-role material tests whether the pattern appears in organized work;
4. official/manufacturer/standards evidence verifies any safety, technical or authority boundary;
5. the matrix records source strength, limits and conflicts;
6. practitioner review is reserved for unresolved or high-consequence field interpretation.

## Retroactive domain coverage

| Domain family | Field-practice questions being retrofitted | First-pass state |
|---|---|---|
| Stagehand / Foundation | check-in, assignment ownership, report-back, standby, call release, reliability, department boundaries | strong community/practitioner corroboration |
| Field Skills | case/cable/logistics habits, organization, prep/deprep, labels, handoff, equipment care | strong for behavior; model-specific physical procedure remains external |
| Warehouse / Rental Shop | pull/prep/QC/deprep, storage homes, cable organization, labeling, inventory, returns, career exposure | strong community pattern |
| Lighting | local-hand expectations, shop prep, labeling, documentation, system variability, support-vs-tech boundary | moderate/strong field pattern; power/rigging remain external |
| Audio | local-hand use, cable/case discipline, placed/preset equipment, prep/advance, system/RF boundaries | strong practitioner pattern; RF/system operations remain specialist |
| Video / LED | warehouse QC/prep, panel/product variability, stagehand-to-tech progression, crew/labor planning | moderate/strong; product assembly/configuration remains model/tech controlled |
| Staging / Scenic | material staging, system identification, shop/scene-shop workflow, support-vs-structural authority | moderate; structural/automation/powered work remains specialist |
| Rigging | career path, experience/mentorship, venue-specific knowledge, qualification culture | role/career context only; no operational rigging procedure imported |
| Electrics / Production Power | progression from stagehand/electric support to qualified roles, venue/system familiarity | role/career context only; energized/live-power procedure excluded |
| Backline / Props / Wardrobe | presets, performer/department ownership, case/trunk handling, separate craft identities | moderate; hazardous/special props stay outside general handling |
| Stage Management | prep, documentation, department check-ins, presets, show reports, operational coordination | strong practitioner pattern |
| Production Management | advance documents, current stage plots/input lists, local-crew communication, schedule/crew coordination | strong practitioner pattern |
| Venue / Event Operations | house-specific procedures, local knowledge, client/tour interface, continuity | moderate; venue policy remains local |
| Crew Leadership | small accountable groups, simple assignments, visibility, communication, crew welfare | strong practitioner pattern |
| Show Control / Special Systems | show-critical handoff, redundancy/prep culture, operator boundaries | context only; operational special-system procedure excluded |
| Sector overlays | touring, venue, theatre, festival, corporate, convention, warehouse differences | strong evidence of variation; no single universal route |
| Career / Professional | reliability/networking, shop-to-field progression, mentorship, production-company pathways | strong anecdotal/cross-source pattern; no guaranteed timeline |

## Cross-domain field patterns now supported

### FP-R01 — Assignment ownership beats performative busyness

Across stagehand/local-crew discussions, experienced workers repeatedly value completing the assigned task, reporting back, remaining findable and avoiding unauthorized self-assignment into another department.

**Matrix use:** Stagehand Foundation, operational call cycle, Department Support C1, Crew Leadership.

### FP-R02 — Organization is production performance

Touring and shop discussions repeatedly treat labels, case destinations, inventory, prep/deprep, documentation and predictable storage as production competence rather than clerical overhead.

**Matrix use:** Field Skills, warehouse/shop, Lighting/Audio/Video prep, Production Coordination.

### FP-R03 — New hands normally earn technical trust through bounded support

Public practitioner discussions repeatedly describe new hands starting with cases, cable/logistics, physical support and observation, then gaining deeper assignments through demonstrated reliability, shop exposure, mentorship or company opportunities.

**Matrix use:** career graph and C1-to-technician transitions. No universal timeline is asserted.

### FP-R04 — Current system/crew method beats remembered habit

Lighting, audio, LED and staging discussions repeatedly show that product/system configuration and local workflow vary. Transferable competence is recognizing the category, preserving the current system and following the responsible lead/technician/manufacturer rather than assuming the last method transfers.

**Matrix use:** all Department Support C1 routes and model-sensitive Field Skills.

### FP-R05 — Advance/prep quality reduces show-day friction

Production-manager, touring-tech and shop-prep discussions repeatedly emphasize current stage plots/input lists, labeling, inventory verification, preconfiguration/QC, crew counts and unresolved-question closure before show day.

**Matrix use:** Production Coordination, department leads, warehouse/shop, touring overlays.

### FP-R06 — House/local knowledge and tour/show knowledge are complementary

Practitioner discussions repeatedly distinguish the touring crew's knowledge of the show from local/house knowledge of the venue, systems and operational constraints.

**Matrix use:** venue operations, touring transfer, leads/supervisors, production management.

### FP-R07 — Career progression is networked and non-linear

Stagehand, lighting, audio and video discussions describe multiple routes: local calls, warehouse/shop work, production companies, mentoring, department invitations, venue roles and networking. No single educational ladder or fixed call count predicts progression.

**Matrix use:** owner career map and D-CAR. Remove fixed progression timelines unless supported in a named context.

## Safety-critical domains

### Rigging

Public practitioner material is used only to support:
- experienced/specialist career identity;
- importance of formal training, mentorship and venue-specific knowledge;
- non-linearity of progression;
- separation of general stagehand awareness from specialist authority.

It is **not** used to teach climbing, knots, hardware configuration, point building, hoist operation, calculations or overhead-work procedure.

### Electrics / Production Power

Public practitioner material is used only for:
- career progression and department-role architecture;
- support-versus-qualified-worker distinctions;
- importance of employer/site/system context.

It is **not** used to teach energized work, feeder/distro procedure, electrical testing, temporary-power design or troubleshooting.

### Structures / Automation / Special Systems

Community discussion may identify workflow and role boundaries. Manufacturer, engineering, qualified-person and venue/AHJ evidence remains controlling for technical procedure and acceptance.

## Matrix implementation

This retrofit uses three normalized layers:

1. `sources_field_practice_retrofit.jsonl` — public practitioner/community/trade evidence;
2. `content_field_practice_retrofit.jsonl` — bounded cross-domain field-practice claim families;
3. `support_edges_field_practice_retrofit.jsonl` — exact claim/source relationships and limitations.

Where an existing learner-facing or planned claim already exists, separate support edges may be attached directly to that content ID rather than duplicating the claim.

## Remaining retrofit work

This first pass establishes the cross-domain backbone. Continue during claim backfill by:

1. adding public field-practice evidence to each current C1/C2 route;
2. adding warehouse/shop evidence to D-SHP/D-LOG/D-CAR competencies;
3. adding lead/supervisor/production-management practitioner evidence;
4. adding theatre/festival/corporate/convention/touring variation evidence;
5. recording contradictory practices instead of forcing false consensus;
6. using public evidence to generate practitioner-review questions only after triangulation has failed.

## Completion criterion

A domain is retroactively field-practice-backfilled when:

- at least one field-practice question has been evaluated for each material workflow/role cluster;
- recurring conventions have independent corroboration or remain explicitly anecdotal;
- safety/authority implications are cross-checked against controlling evidence;
- SOURCE and SUPPORT_EDGE records exist in the master matrix;
- unresolved variations are visible as review items rather than hidden in prose.

This is a continuing evidence property of the matrix, not a one-time research phase.
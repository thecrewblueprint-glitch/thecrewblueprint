# MDQ-002 — Current Corpus-to-Matrix Backfill Method and Pilot

**Prepared:** 2026-08-31  
**Status:** Complete method + three-route pilot  
**Schema:** `MDQ-001_SOURCE_CITATION_CONTENT_MATRIX_SCHEMA_2026-08-31.md`  
**Pilot set:** Stagehand Fundamentals + Move a Road Case With a Partner + Lighting Production Flow

## Goal

Convert the existing research corpus and learner pages into the MDQ-001 matrix without pretending that a bibliography entry automatically supports every sentence on a page.

The backfill must preserve distinctions among:

- exact external fact;
- source-backed instruction;
- cross-source pattern;
- practitioner convention;
- employer/manufacturer-specific procedure;
- Crew Blueprint instructional framework;
- safety/authority boundary;
- question and answer rationale;
- visual depiction.

# 1. Backfill procedure

## Step A — freeze the route baseline

For each route being audited, record:

- Git commit/ref;
- public route/file;
- editable source-data file if generated;
- current publication state;
- MDQ-000 domain IDs;
- current learning tier from MDQ-003.

Do not matrix an archived copy as though it is current. Compatibility routes receive their own content IDs but point to the current canonical route.

## Step B — identify the canonical evidence packet

Use the corpus run log and build register rather than guessing from package numbers.

Priority order:

1. current rerun/current research packet;
2. active companion/boundary note;
3. original packet retained for lineage;
4. curriculum draft only as content history, never as independent evidence;
5. research synthesis only for orientation.

Known collisions must use semantic IDs, e.g. CBR-021-LTG-BOK versus CBR-021-SHF-AUDIT.

## Step C — segment learner content

Create content IDs for:

- course-level boundary/description;
- each lesson objective;
- factual or instructional claim families inside each block;
- each stop/authority statement;
- each knowledge question and rationale;
- each visual/caption;
- each practice/observation criterion.

A paragraph stays one claim only when all of its propositions have the same source set, applicability, authority owner and safety consequence.

## Step D — classify each claim before sourcing

Assign one MDQ-001 `content_classification`. This matters because different evidence is required:

- `external_fact` needs direct source support;
- `source_backed_instruction` needs a defensible evidence-to-instruction transformation;
- `cross_source_pattern` needs multiple sources or an explicit qualification;
- `practitioner_convention` needs identified practitioner/employer/local evidence;
- `manufacturer_or_model_procedure` must name the product/version;
- `crew_blueprint_framework` is allowed without pretending it is an industry standard;
- `safety_boundary` must identify the authority retained elsewhere.

## Step E — create source records once

Normalize source owner/title/URL/version/access/applicability. Do not create a new source ID every time OSHA 1910.37 appears.

## Step F — create support edges

For every claim, answer:

1. Which exact source supports it?
2. Directly, partially, or only as context?
3. What section/page/claim register is the locator?
4. What qualifier must stay with the learner wording?
5. Who owns the final decision in the field?

A claim with no external support is either:

- deliberately `crew_blueprint_framework`, or
- unresolved and enters the research queue.

It is never silently “supported” because a nearby source list looks credible.

## Step G — map questions through rationales

Every question maps:

`question → answer rationale → course claim(s) → support edge(s) → source(s)`.

If a distractor is dangerous because it violates an authority boundary, map that rationale to the boundary claim.

## Step H — map visuals independently

A visual needs:

- what claim/sequence it depicts;
- whether it is illustrative or model-specific;
- source lineage;
- owner/license;
- alt text/caption/transcript;
- qualified reviewer where safety-critical;
- replacement trigger.

An AI-generated image cannot upgrade an unresolved practice into verified field truth.

## Step I — discrepancy dispositions

Each claim ends in one of:

- `verified_current`;
- `verified_with_qualification`;
- `crew_blueprint_framework_clear`;
- `needs_primary_source`;
- `needs_practitioner`;
- `needs_model_or_jurisdiction_scope`;
- `revise_content`;
- `remove_or_replace`;
- `superseded`.

## Step J — route completion test

A route is matrix-backfilled when every substantive claim, question rationale, safety boundary and visual has a matrix disposition. Navigation copy does not require external evidence unless it makes a factual claim.

# 2. Pilot A — Stagehand Fundamentals

**Route:** `courses/stagehand-fundamentals.html`  
**Navigation:** `lms-dashboard.html`  
**Domains:** D-SHF primary; D-OUT/D-COM/D-CAR/D-TOOLS/D-LOG secondary  
**Evidence lineage:** Packages 14/14A, 15–20A, CBR-021-SHF-AUDIT, `02-source-master-map.md`  
**Architecture:** 10 modules / 34 lessons / four delivery parts  
**Pilot purpose:** Demonstrate claim-family backfill for a hand-written large course.

The authenticity audit already supplies a module-by-module claim register. The pilot converts that register into stable claim rows; the full site-wide backfill later expands these families to the exact current lesson/block IDs.

| Claim ID | Module | Learner-facing claim family | Classification | Primary evidence locator | Support | Required qualification / disposition |
|---|---:|---|---|---|---|---|
| CL-SHF-0001 | 1 | Stagehands unload/reload trucks, move cases and assist production departments | external_fact | CBR-021-SHF-AUDIT M1; employer postings | direct/corroborating | Titles/tasks vary by employer; verified_current |
| CL-SHF-0002 | 1 | Load-in, show call and load-out are distinct production phases | external_fact | CBR-021-SHF-AUDIT M1; IATSE/employers | direct | Exact staffing/process varies; verified_current |
| CL-SHF-0003 | 1 | Arena, theatre, convention and outdoor/festival environments create different workflow conditions | cross_source_pattern | CBR-021-SHF-AUDIT M1; Packages 01/03 | corroborating | Examples, not universal venue laws; verified_with_qualification |
| CL-SHF-0004 | 2 | Hazard recognition and stop-and-ask judgment are foundational safety behavior | source_backed_instruction | Packages 16/17; OSHA worker participation | direct/partial | Site reporting method varies; verified_current |
| CL-SHF-0005 | 2 | Near misses should be reported through the workplace process | source_backed_instruction | CBR-021-SHF-AUDIT M2; OSHA Recommended Practices | direct | Reporting mechanism employer/site-specific; verified_with_qualification |
| CL-SHF-0006 | 2 | Fatigue can increase work risk | external_fact | Packages 16/17; OSHA/ergonomics evidence | direct | Do not convert into a medical diagnosis; verified_current |
| CL-SHF-0007 | 3 | PPE selection depends on task hazards and employer/site requirements | external_fact | OSHA 1910 PPE standards; Package 16 | direct | No one universal kit; verified_current |
| CL-SHF-0008 | 3 | Show blacks are performance/role clothing convention, not PPE by default | cross_source_pattern | 20A + CBR-021-SHF-AUDIT M3 | corroborating | Role/employer-specific; verified_with_qualification |
| CL-SHF-0009 | 3 | Hard hats/hearing/eye protection apply when the relevant hazard requires them | external_fact | OSHA 1910.95/.133/.135 | direct | Applicable hazard/employer controls exact requirement; verified_current |
| CL-SHF-0010 | 4 | Stage left/right and upstage/downstage are established orientation terms | external_fact | Package 17 / theatre source map | direct | Sector transfer can vary in how often terminology is used; verified_current |
| CL-SHF-0011 | 4 | Exits, fire equipment and egress routes must remain clear | external_fact | OSHA 1910.37 / 1910.22 | direct | High safety criticality; verified_current |
| CL-SHF-0012 | 4 | Workers should stay alert to blind spots and moving equipment | source_backed_instruction | OSHA material-handling + employer evidence | direct/partial | Site traffic plan controls exact route; verified_current |
| CL-SHF-0013 | 5 | Load-in requires directed unloading, sorting and material movement | cross_source_pattern | Package 18 + employer/venue evidence | corroborating | Do not teach “back-to-front, one-row” as universal if current copy does; verify exact wording |
| CL-SHF-0014 | 5 | Case movement creates pinch/crush/sightline/route hazards | external_fact | OSHA material-handling; Package 18 | direct | High safety criticality; verified_current |
| CL-SHF-0015 | 5 | Public-area placement must preserve stable footing, clear path and egress | source_backed_instruction | OSHA 1910.22/.37 + 04A | direct | Venue/public-route owner controls final placement; verified_current |
| CL-SHF-0016 | 6 | Chain of command and assigned scope matter to production work | cross_source_pattern | IATSE/employer evidence; Packages 15/19 | corroborating | Exact titles/hierarchy vary; verified_with_qualification |
| CL-SHF-0017 | 6 | Listen, keep messages concise and confirm critical instructions | practitioner_convention | employer/union patterns | corroborating | Exact words are examples, not universal commands; verified_with_qualification |
| CL-SHF-0018 | 6 | “Copy,” “standing by,” and similar phrases are not universal nationwide vocabulary | safety_boundary | 20A + authenticity audit | direct to correction | Keep as examples only; verified_current |
| CL-SHF-0019 | 7 | New hands may assist departments but technical/show-critical decisions remain with responsible personnel | safety_boundary | Packages 07–11 + manufacturers/employers | direct/corroborating | Department-specific authority controls; verified_current |
| CL-SHF-0020 | 7 | Rigging/electrical/configuration/repair work is outside generic beginner permission | safety_boundary | Packages 04/07–11/21-LTG | direct | High/life-safety; verified_current |
| CL-SHF-0021 | 8 | Road cases use latches, handles, casters/brakes and labels as handling features | external_fact | equipment/manufacturer evidence; Package 20A | direct | Product designs vary; verified_current |
| CL-SHF-0022 | 8 | Damaged tools should be removed/reported rather than improvised with | source_backed_instruction | OSHA 1910.242 + Package 19/20 | direct | Employer process controls tagging/replacement; verified_current |
| CL-SHF-0023 | 8 | Team handling needs a clear path, coordinated communication and controlled set-down | source_backed_instruction | OSHA ergonomics/material handling | direct/partial | Crew size/method depends on load/conditions; verified_with_qualification |
| CL-SHF-0024 | 9 | Strike/load-out follows dependencies and lead direction | cross_source_pattern | Package 18/20; employer practice | corroborating | Exact pack sequence is production-specific; verified_with_qualification |
| CL-SHF-0025 | 9 | Fatigue, visibility and time pressure can increase load-out risk | external_fact | human factors/OSHA evidence | direct/partial | Do not claim load-out is always more dangerous; verified_with_qualification |
| CL-SHF-0026 | 9 | Final closeout commonly includes gear/accountability, cleanup, clear exits and damage reporting | practitioner_convention | employer/industry evidence | corroborating | Good practice, not one OSHA closeout checklist; verified_with_qualification |
| CL-SHF-0027 | 10 | Work can come through labor providers, venues, unions, referrals and direct employers | external_fact | Packages 01/03/19; employer/union evidence | direct/corroborating | Regional mix varies; verified_current |
| CL-SHF-0028 | 10 | Reliability, safe work and ease of direction contribute to callbacks/trust | cross_source_pattern | union/employer evidence | corroborating | Not a guaranteed hiring formula; verified_with_qualification |
| CL-SHF-0029 | 10 | Early-career “first 30 days” sequencing is a Crew Blueprint development framework | crew_blueprint_framework | CBR-021-SHF-AUDIT M10 | framing_only | Must never be labeled national probation/certification; framework_clear |
| CL-SHF-0030 | 10 | Education, observed practice, employer authorization and external credentials are separate states | safety_boundary | Package 06 + architecture audit | direct/internal framing | Preserve across all routes; verified_current |

### Fundamentals pilot finding

The route is **matrixable without flattening all content into “OSHA-backed.”** The most important correction pattern is qualification, not wholesale removal: local vocabulary, PPE specifics, early-career timelines and workflow details must remain visibly contextual.

# 3. Pilot B — Move a Road Case With a Partner

**Route:** `courses/field-skill-move-road-case-with-partner.html`  
**Source data:** `scripts/course-data-road-case.mjs`  
**Domains:** D-FLD primary; D-LOG secondary  
**Research:** Package 52  
**Tier:** Field Skill  
**Pilot purpose:** Demonstrate procedural + visual + practice-gate mapping.

| Claim ID | Claim | Class | Package-52 locator / source family | Support | Qualification / disposition |
|---|---|---|---|---|---|
| CL-FLD-RC-0001 | Inspect the case and route before movement | source_backed_instruction | Claim register 2–3; HSE/Rhino/IATSE/manufacturer | direct/corroborating | Exact checklist may expand by equipment; verified_current |
| CL-FLD-RC-0002 | Push rather than pull where conditions allow | source_backed_instruction | Claim 1; OSHA/HSE/CCOHS | direct | Not an absolute road-case rule; verified_with_qualification |
| CL-FLD-RC-0003 | Use additional people/mechanical help based on control and conditions, not one universal case-weight number | safety_boundary | Claim 4; HSE/OSHA | direct/partial | Crew/lead/site decides actual plan; verified_current |
| CL-FLD-RC-0004 | Move no faster than walking speed | source_backed_instruction | Claim 5; HSE/CCOHS | direct for comparable wheeled units | Conservative transfer to road cases; verified_with_qualification |
| CL-FLD-RC-0005 | Keep hands/feet/body out of pinch and crush paths | safety_boundary | Claim 6; IATSE Local 15 + industry safety | direct/corroborating | High criticality; verified_current |
| CL-FLD-RC-0006 | Stop before doors and assign door/case control rather than fighting both | source_backed_instruction | Claim 7; CCOHS | direct/partial | Exact role split may vary; verified_current |
| CL-FLD-RC-0007 | Ramps, slopes, dock plates and uneven surfaces change the task | safety_boundary | Claim 8; HSE/CCOHS | direct | Course flat-floor practice does not authorize ramp plan; verified_current |
| CL-FLD-RC-0008 | Caster layout changes steering behavior | external_fact | Claim 9; Penn Elcom + CCOHS | direct | Identify actual case; no universal leading end; verified_current |
| CL-FLD-RC-0009 | Agree on roles and a stop command before moving | cross_source_pattern | Claim 10 | corroborating | No universal word/spotter geometry; needs owner/practitioner review for local examples |
| CL-FLD-RC-0010 | Either mover may stop the movement under Crew Blueprint practice model | crew_blueprint_framework | Claim 10 instructional rule | framing_only/corroborating safety logic | Clearly label as teaching rule, not national standard |
| CL-FLD-RC-0011 | Stop if case/route/load/crew no longer matches controlled plan | safety_boundary | Package 52 stop-and-ask list | synthesized from direct evidence | High criticality; verified_current |
| CL-FLD-RC-0012 | Parking method depends on actual brake/chock/equipment and site direction | manufacturer_or_model_procedure | Package 52 claims 3/9 + course boundary | partial | Practitioner/equipment review remains |
| CL-FLD-RC-0013 | Observed practice proves only the named case/route/conditions, not standing authorization | safety_boundary | Package 52 course boundary + architecture model | direct/internal framing | verified_current |

### Questions and rationales

| Question ID | Correct rationale maps to | Matrix disposition |
|---|---|---|
| Q-FLD-RC-001 sightline blocked | CL-FLD-RC-0001/0003/0011 | supported |
| Q-FLD-RC-002 transition encountered | CL-FLD-RC-0007/0011 | supported |
| Q-FLD-RC-003 caster binds | CL-FLD-RC-0001/0008/0011 | supported |
| Q-FLD-RC-004 stop word | CL-FLD-RC-0009/0010 | supported as framework + pattern, not universal vocabulary |
| Q-FLD-RC-005 meaning of observed practice | CL-FLD-RC-0013 | supported |

### Visuals

| Media ID | Current asset | Depicts | Rights/model state | Disposition |
|---|---|---|---|---|
| V-FLD-RC-001 | `images/course-visuals/road-case-turn-threshold.jpg` | turn/threshold control | AI-generated illustrative visual; not exact manufacturer model | owner-review illustration; practitioner check before final release |
| V-FLD-RC-002 | `images/course-visuals/road-case-park-brake.jpg` | parking/brake concept | AI-generated illustrative visual | model/procedure qualifier required |
| V-FLD-RC-003 | `images/training/road-case-pre-move-inspection.jpg` | pre-move inspection | training visual | link to exact checklist claims and rights record during full matrix |

### Practice gate

Each checklist item receives an observation content ID later. The record must capture case, route, surface, transitions, partner, observer and result. The practice gate is **not** converted to employer authorization.

# 4. Pilot C — Lighting Production Flow

**Route:** `courses/pathway-lighting-02-production-flow.html`  
**Source data:** `scripts/course-data-lighting.mjs`  
**Domains:** D-LTG primary; D-SHC secondary  
**Research:** Package 12 + CBR-021-LTG-BOK for broader competency context  
**Tier:** Department Systems  
**Course boundary:** awareness/system context; no rigging, temporary-power, lift/fall-protection, network-configuration, console-programming, inspection or design authorization.

| Claim ID | Claim family | Class | Evidence locator | Support | Qualification / disposition |
|---|---|---|---|---|---|
| CL-LTG-PF-0001 | Lighting production turns creative intent into design, documentation, installation, testing, programming, operation and load-out | source_backed_instruction | Package 12 §§1–2; course lifecycle diagram | direct as packet synthesis | Crew Blueprint organizes as eight-stage teaching model; framework qualifier |
| CL-LTG-PF-0002 | The lighting console is only one part of the complete production system | source_backed_instruction | Package 12 §1 + system/interconnect sections | direct | verified_current |
| CL-LTG-PF-0003 | Advance work gathers venue/site, access, rigging, power, FOH, cable-route and schedule constraints | cross_source_pattern | Package 12 §2.1 | corroborating | Exact advance package varies by production; verified_with_qualification |
| CL-LTG-PF-0004 | Engineering/prep commonly creates plots, schedules, network/power/cable documents and prepared equipment | cross_source_pattern | Package 12 §2.2 | corroborating | Artifact ownership and exact set vary; verified_with_qualification |
| CL-LTG-PF-0005 | Load-in needs defined ownership for rigging, power, data, equipment and inspections | safety_boundary | Package 12 §2.3 + specialist evidence | direct/corroborating | Named qualified roles/employer/venue control responsibilities |
| CL-LTG-PF-0006 | Testing/commissioning precedes treating the system as show-ready | source_backed_instruction | Package 12 lifecycle/testing sections; BOK commissioning | direct/corroborating | Exact acceptance tests are system/role specific |
| CL-LTG-PF-0007 | Programming and live operation are downstream of an installed/tested system | source_backed_instruction | Package 12 lifecycle | direct | Workflow may iterate rather than be perfectly linear; qualify as process model |
| CL-LTG-PF-0008 | Ballrooms, arenas and festivals scale the same general workflow differently | cross_source_pattern | Package 12 operational-differences sections | corroborating | Not every show uses identical staffing or documentation |
| CL-LTG-PF-0009 | Standardize process while adapting implementation to venue/show conditions | crew_blueprint_framework | Package 12 governing principle | framing_only supported by workflow evidence | Do not label as an external standard |
| CL-LTG-PF-0010 | Systems understanding does not authorize restricted rigging/electrical/network/programming/design work | safety_boundary | current course boundary; Packages 21-LTG/ETCP/OSHA/ESTA | direct/corroborating | High criticality; verified_current |
| CL-LTG-PF-0011 | Temporary power responsibility belongs to qualified/assigned personnel, not a learner merely because they understand the diagram | safety_boundary | CBR-021-LTG-BOK electrical findings + ETCP | direct | life-safety/specialist; verified_current |
| CL-LTG-PF-0012 | Lighting control/network competence is a distinct specialist depth beyond recognizing system flow | safety_boundary | CBR-021-LTG-BOK network taxonomy | direct/corroborating | Course 2 may explain concepts without granting configuration authority |
| CL-LTG-PF-0013 | Documentation and revision/change control are part of professional system reliability | source_backed_instruction | Package 12 documentation/change sections; BOK | direct/corroborating | Exact document set/process varies |
| CL-LTG-PF-0014 | Load-out occurs only after the responsible departments release the affected equipment/work | safety_boundary | Package 12 lifecycle/strike + course practice gate | corroborating | Exact release call belongs to production hierarchy |

### Course-2 source records seeded by current data

- `S-HUNTINGTON-CONTROL-SYSTEMS-LIVE-ENTERTAINMENT` — contextual technical reference.
- `S-ESTA-TSP-PUBLISHED-STANDARDS` — official standards index; individual standards must receive separate source IDs when a claim relies on one.
- `S-ETCP-ELECTRICAL-EDUCATION-CERTIFICATION` — qualification/job-analysis context, not a universal operating manual.
- `S-USITT` — professional/education context; specific claims require specific documents.
- `S-OSHA` — organization root is not sufficient for direct claim support; full matrix must cite the actual standard/guidance page.

**Important pilot finding:** the current course’s source list contains several organization/root-level references. Those are acceptable learner discovery links but are **not claim-level citations**. The site-wide matrix must replace generic support edges with the exact ESTA/OSHA/ETCP/USITT document when a claim depends on it.

# 5. Pilot audit result

| Pilot | Result | Main issue discovered |
|---|---|---|
| Stagehand Fundamentals | Pass as backfillable | Several claims need visible context qualifiers rather than new research |
| Road Case Field Skill | Pass as backfillable | Strong claim register; field/model-specific communication/parking details remain practitioner gates |
| Lighting Production Flow | Pass as backfillable with citation refinement | Course-level source list is too broad for a final claim matrix; exact standards/documents need edge-level mapping |

The three route types therefore prove the schema can represent:

- large hand-written foundation curriculum;
- structured physical-task course with visuals and observation gate;
- generated department-systems course with broad technical sources.

# 6. Site-wide backfill execution order

1. **Foundation:** Stagehand Fundamentals + catalog/course-map claims.
2. **Six Field Skills:** because they have strong package-to-course lineage and clear practice gates.
3. **Five Department Support + five Department Systems courses:** map current source packets and identify generic bibliography links.
4. **Lighting/Video split lesson routes:** inherit canonical claims where identical; record route-specific wording separately.
5. **Seven Lead + two Supervisor courses.**
6. **Five Advanced/System Design + power awareness + production/coordination.**
7. **Seven resource pages.**
8. **Catalog/about/home substantive industry claims.**
9. **All visuals, questions, practice gates and source panels.**
10. Run unsupported/qualification/supersession/freshness views and feed gaps back to the MDQ/ECQ queues.

# 7. Automation-ready extraction rules

A later script may accelerate the backfill, but it must not decide evidence truth automatically.

Safe automation:

- enumerate routes/files;
- extract headings, paragraphs, list items, questions, captions and source URLs;
- assign deterministic structural IDs;
- detect identical/repeated text;
- link generated HTML to its source-data module;
- flag URLs and source labels;
- flag modal language such as `always`, `never`, `must`, `required`, `qualified`, `certified`, `authorized` for review;
- produce candidate claim segments.

Human/reasoned review remains required for:

- whether two sentences are one claim;
- support strength;
- applicability;
- source authority;
- safety/authority implications;
- practitioner conventions;
- contradictions;
- final disposition.

# 8. Definition of done

- [x] Repeatable backfill method defined.
- [x] Distinctions required by MDQ-002 are explicit.
- [x] Stagehand Fundamentals pilot is claim-family auditable across all ten modules.
- [x] Road Case pilot maps procedure, questions, visuals and practice boundary.
- [x] Lighting Production Flow pilot maps systems claims and exposes generic-source limitations.
- [x] Full-site execution order defined.
- [x] Automation boundary defined so extraction does not become fake source verification.

**MDQ-002 result:** complete as the backfill protocol and proof-of-model. The next matrix work is production backfill of all current routes, not redesign of the schema.
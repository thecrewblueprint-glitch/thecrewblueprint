# The Crew Blueprint — Canonical Cross-Domain Competency & Progression Graph

**Prepared:** 2026-08-31  
**Status:** Synthesis baseline — first canonical graph derived from MDQ-000–135 evidence  
**Purpose:** Convert the research corpus into one format-independent map of competencies, roles, transfer points, responsibility bands and external-authority gates. This is the data-model foundation for the owner-facing “everything map,” future learner maps, course linking, progress tracking and MDQ-001 source matrixing.

---

# 1. Graph rules

The graph separates five things that must not be collapsed:

1. **Competency** — knowledge, judgment, skill or workflow capability.
2. **Role** — a real-world work position that may require a bundle of competencies.
3. **Learning state** — what Crew Blueprint can record about learning/practice.
4. **Work experience** — what a worker reports or a third party verifies they have done.
5. **Authority / qualification** — what an employer, venue, credentialing body, license or AHJ allows the person to do.

A role is never treated as one single course-completion badge.

---

# 2. Stable graph ID families

Use:

- `CMP-CORE-*` — universal crew/work competencies;
- `CMP-FLD-*` — general Field Skills;
- `CMP-LTG-*` — Lighting;
- `CMP-AUD-*` — Audio;
- `CMP-VID-*` — Video/LED/Broadcast;
- `CMP-STG-*` — Staging/Scenic;
- `CMP-RIG-*` — Rigging awareness/body of knowledge;
- `CMP-ELC-*` — Electrics/Production Power awareness/body of knowledge;
- `CMP-BKL-*` — Backline;
- `CMP-PRP-*` — Props;
- `CMP-WRD-*` — Wardrobe;
- `CMP-SMG-*` — Stage Management;
- `CMP-PMG-*` — Production Management;
- `CMP-VOP-*` — Venue/Event Operations;
- `CMP-LEAD-*` — Crew/Labor Leadership;
- `CMP-SHC-*` — Show Control;
- `CMP-CAR-*` — Career/professional practice;
- `CMP-EVD-*` — learning/evidence/source literacy.

Role nodes use `ROLE-*`. External gates use `GATE-*`.

---

# 3. Universal crew foundation

These competencies sit underneath nearly every field path.

| ID | Competency | Responsibility baseline | Common downstream use |
|---|---|---|---|
| CMP-CORE-001 | Call readiness | R0–R1 | all work |
| CMP-CORE-002 | Safety/hazard recognition | R0–R5 | all work |
| CMP-CORE-003 | Jobsite/venue orientation | R0–R2 | all field work |
| CMP-CORE-004 | Chain-of-command recognition | R0–R5 | all work |
| CMP-CORE-005 | Assignment receipt/confirmation | R1–R5 | all work |
| CMP-CORE-006 | Clear work communication/readback | R1–R5 | all work |
| CMP-CORE-007 | Department ownership/boundaries | R0–R5 | all departments |
| CMP-CORE-008 | Task completion/handoff | R1–R5 | all work |
| CMP-CORE-009 | Report-back/reassignment | R1–R5 | all work |
| CMP-CORE-010 | Standby/break/release distinction | R0–R5 | live calls |
| CMP-CORE-011 | Load-in/load-out phase literacy | R0–R4 | field work |
| CMP-CORE-012 | Work-area organization/reset | R1–R4 | field/shop |
| CMP-CORE-013 | Documentation/version literacy | R0–R5 | technical/management paths |
| CMP-CORE-014 | Stop/escalate judgment | R0–R5 | all work |
| CMP-CORE-015 | Professional conduct/reliability | R0–R5 | career-wide |
| CMP-CORE-016 | Timekeeping/sign-out awareness | R0–R4 | employment workflow |
| CMP-CORE-017 | Sector/local-condition adaptability | R1–R5 | touring/venue/corporate/etc. |
| CMP-CORE-018 | Public/accessibility-route awareness | R0–R4 | venues/events/outdoor |

**Foundation convergence:** a learner should not have to relearn these from scratch in every department. Department courses inherit and contextualize them.

---

# 4. General Field Skills cluster

| ID | Competency | Typical state | Main transfer points |
|---|---|---|---|
| CMP-FLD-001 | Road-case movement/parking | T2 / R1 | every department, warehouse, logistics |
| CMP-FLD-002 | Team lift/carry/set-down | T2 / R1 | staging, scenic, shop, departments |
| CMP-FLD-003 | Cart/dolly/hand-truck movement | T2 / R1 | all logistics/material flow |
| CMP-FLD-004 | Cable coiling/staging | T2 / R1 | lighting/audio/video/comms |
| CMP-FLD-005 | Released-cable deployment/gathering | T2 / R1 | lighting/audio/video/comms |
| CMP-FLD-006 | Cable-route protection | T2 / R1 | public/event/department interfaces |
| CMP-FLD-007 | Case/boneyard/work-area organization | T2 / R1 | all departments |
| CMP-FLD-008 | Work-area reset/handoff | T2 / R1 | all departments |
| CMP-FLD-009 | Barricade support | T2 / R1 | events/public-area |
| CMP-FLD-010 | Pipe-and-drape support | T2 / R1 | corporate/theatre/event |
| CMP-FLD-011 | Ground-level soft-goods handling | T2 / R1 | scenic/theatre/wardrobe-adjacent |
| CMP-FLD-012 | Riser/deck component support | T2 / R1 | staging/corporate/venue |
| CMP-FLD-013 | Scenery/flat/wagon movement | T2 / R1 | scenic/theatre |
| CMP-FLD-014 | Ordinary hand-tool recognition/handoff | T2 / R1 | staging/shop/departments |
| CMP-FLD-015 | Jobsite tape/label/marking literacy | T2 / R1 | all departments |
| CMP-FLD-016 | Dock/ramp/trailer handoff awareness | T0/T2 / R0–R1 | logistics/touring/warehouse |
| CMP-FLD-017 | Ratchet-strap assigned-use awareness | T2 / R1 | logistics/context-specific |
| CMP-FLD-018 | Flatbed cargo-support awareness | T0/T2 / R0–R1 | logistics; load-lead authority external |

These are early-career/common work competencies. Context changes frequency and exact system, not seniority.

---

# 5. Lighting graph

## Support / technician spine

`CMP-LTG-001 Fixture recognition/handling support`  
→ `CMP-LTG-002 Lighting cable/data support`  
→ `CMP-LTG-003 Plot/schedule/patch literacy`  
→ `CMP-LTG-004 Fixture systems/optics/color literacy`  
→ `CMP-LTG-005 DMX/RDM/control fundamentals`  
→ `CMP-LTG-006 Lighting network/sACN systems literacy`

## Parallel branches

### Technician / systems

`CMP-LTG-007 Prep/QC/configuration/version control`  
→ `CMP-LTG-008 Systems troubleshooting reasoning`  
→ `ROLE-LTG-SYSTEMS-TECH`  
→ `ROLE-LTG-SYSTEMS-LEAD`

### Console / programmer

`CMP-LTG-009 Transferable console model`  
→ `CMP-LTG-010 Show-file/version/backup discipline`  
→ `CMP-LTG-011 Playback/effects/timecode concepts`  
→ `ROLE-LTG-PROGRAMMER`

### Followspot / tracking

`CMP-LTG-012 Followspot role/cue/communication systems`  
→ `ROLE-LTG-FOLLOWSPOT-OP`  
→ specialist tracking branch where externally assigned/trained.

### Design / previsualization

`CMP-LTG-013 Photometry/vision/color`  
→ `CMP-LTG-014 Plot/paperwork/data exchange`  
→ `CMP-LTG-015 GDTF/MVR/CAD/previs workflow`  
→ `ROLE-LTG-DESIGN-ASSIST`  
→ `ROLE-LTG-DESIGNER`

### Leadership

`CMP-LTG-016 Advance/vendor/labor/QC`  
→ `ROLE-LTG-CREW-LEAD` / `ROLE-LTG-HEAD`

### External gates

- `GATE-ELC-QUALIFIED` for energized production-power authority;
- `GATE-RIG-QUALIFIED` for overhead rigging/work at height;
- `GATE-FX-LASER` for regulated/specialist optical-effects authority.

---

# 6. Audio graph

## Support / stage-audio spine

`CMP-AUD-001 Source/mic/DI recognition`  
→ `CMP-AUD-002 Stage patch/input-list literacy`  
→ `CMP-AUD-003 Audio signal-flow mental model`  
→ `ROLE-AUD-STAGE-PATCH-TECH`

## Mix branch

`CMP-AUD-004 Console/routing/gain concepts`  
→ `CMP-AUD-005 Show-file/snapshot discipline`  
→ `ROLE-AUD-FOH-OP` **or** `ROLE-AUD-MONITOR-OP`

## System branch

`CMP-AUD-006 PA/acoustic fundamentals`  
→ `CMP-AUD-007 Prediction/measurement reasoning`  
→ `ROLE-AUD-SYSTEM-TECH`  
→ `ROLE-AUD-SYSTEM-LEAD/DESIGN`

## Network branch

`CMP-AUD-008 Audio-network/IP/clocking literacy`  
→ `CMP-AUD-009 AES67/Dante interoperability concepts`  
→ `ROLE-AUD-NETWORK-TECH`

## RF branch

`CMP-AUD-010 RF/wireless architecture awareness`  
→ `CMP-AUD-011 RF documentation/regulatory literacy`  
→ external/employer specialist path `ROLE-AUD-RF-TECH/COORDINATOR`

## Comms branch

`CMP-AUD-012 Partyline/matrix/wireless intercom architecture`  
→ `ROLE-AUD-COMMS-TECH`

## Leadership

`CMP-AUD-013 Advance/input/patch/network/RF/comms planning`  
→ `ROLE-AUD-HEAD/SYSTEM-LEAD`

---

# 7. Video / LED / Broadcast graph

## Support / signal spine

`CMP-VID-001 Video/LED equipment recognition`  
→ `CMP-VID-002 Signal-format/transport literacy`  
→ `CMP-VID-003 Routing/scaling/switching fundamentals`  
→ `ROLE-VID-TECH`

## LED branch

`CMP-VID-004 LED panel/processor architecture`  
→ `CMP-VID-005 Mapping/configuration/QC concepts`  
→ `ROLE-VID-LED-TECH`  
→ `ROLE-VID-LED-LEAD`

## Projection branch

`CMP-VID-006 Projection/lens/surface/environment concepts`  
→ `ROLE-VID-PROJECTION-TECH`

## Camera / broadcast branch

`CMP-VID-007 Camera/image/reference/comms concepts`  
→ `ROLE-VID-CAMERA-UTILITY`  
→ `ROLE-VID-CAMERA-OP`  
→ `ROLE-VID-CCU/SHADING` or engineering branches.

## Playback / media branch

`CMP-VID-008 Playback/media asset/version concepts`  
→ `CMP-VID-009 Media server/show-control/sync concepts`  
→ `ROLE-VID-PLAYBACK/MEDIA-OP`

## Network engineering branch

`CMP-VID-010 AV-over-IP / ST2110 / PTP literacy`  
→ `ROLE-VID-NETWORK/ENGINEER`  
→ `ROLE-VID-EIC`

## Leadership

`CMP-VID-011 Documentation/commissioning/QC/advance`  
→ `ROLE-VID-LEAD/EIC`

---

# 8. Staging / Carpentry / Scenic graph

## Support spine

`CMP-STG-001 Component/scenic-system recognition`  
→ `CMP-STG-002 Drawing/material/label literacy`  
→ `CMP-STG-003 Scenic movement / deck support`  
→ `ROLE-STG-SCENIC/STAGE-TECH`

## Carpenter/scenic branch

`CMP-STG-004 Scenic construction/material concepts`  
→ employer/tool-specific practice  
→ `ROLE-STG-CARPENTER/SCENIC-TECH`

## Portable-stage branch

`CMP-STG-005 Platform/deck/riser system literacy`  
→ model/manufacturer/employer practice  
→ `ROLE-STG-STAGING-TECH`

## Theatre/deck branch

`CMP-STG-006 Cue/preset/changeover scenic workflow`  
→ `ROLE-STG-DECK/CHANGEOVER-TECH`

## Shop branch

`CMP-STG-007 Shop-to-show/QC/document workflow`  
→ `ROLE-STG-SHOP-TECH`

## Leadership/design

`CMP-STG-008 Drawings/revisions/labor/vendor/QC planning`  
→ `ROLE-STG-LEAD-CARPENTER/SCENIC-LEAD`  
→ `ROLE-STG-TD/DESIGN` depending direction.

## External gate

`GATE-AUTOMATION-SPECIALIST` for stage-machinery operation/programming; structural/rigging/engineering authority remains external where applicable.

---

# 9. Rigging graph — controlled specialist field

## General learner route

`CMP-RIG-001 Rigging-zone/system recognition`  
→ `CMP-RIG-002 Hardware/category/identification literacy`  
→ `CMP-RIG-003 Load-path/force concept awareness`  
→ `CMP-RIG-004 Arena/theatre/touring workflow awareness`

This produces **knowledge/ground-support awareness only**.

## External career gate

`GATE-RIG-TRAINING/AUTH`  
→ employer/union/venue specialist training and documented experience  
→ external specialist roles such as arena/theatre rigging  
→ ETCP eligibility/certification where applicable  
→ head/house/tour rigging leadership.

Work-at-height, overhead attachment, hoist operation, calculations, inspection/signoff and rescue remain external-authority states.

---

# 10. Electrics / Production Power graph — controlled specialist field

## General/department interface route

`CMP-ELC-001 Electrical hazard/role recognition`  
→ `CMP-ELC-002 Electrical-theory conceptual literacy`  
→ `CMP-ELC-003 Distribution one-line/system-category literacy`  
→ `CMP-ELC-004 Codes/standards/AHJ authority literacy`  
→ `CMP-ELC-005 Power-quality/system symptom literacy`

## External career gate

`GATE-ELC-TRAINING/AUTH`  
→ employer/union/venue electrical training and supervised experience  
→ PPDT / Entertainment Electrician or local licensed/qualified pathways as applicable  
→ power lead/head-electrician/advanced systems roles.

Testing, connecting, energizing, generator configuration and live fault work remain external qualified-person responsibilities.

---

# 11. Backline / Props / Wardrobe graph

## Shared early support hub

`CMP-SPEC-001 Department ownership/preset/label awareness`  
→ `CMP-SPEC-002 Careful assigned handling`  
→ `CMP-SPEC-003 Tracking/reset/damage reporting`

Then split:

### Backline

`CMP-BKL-001 Instrument/backline family recognition`  
→ `CMP-BKL-002 Stage-plot/changeover/artist-tech interface`  
→ `ROLE-BKL-TECH`  
→ artist/instrument/rental/touring specializations.

### Props

`CMP-PRP-001 Preset/handoff/tracking workflow`  
→ `CMP-PRP-002 Maintenance/artisan/documentation concepts`  
→ `ROLE-PRP-RUN-CREW/TECH`  
→ `ROLE-PRP-HEAD/MASTER`.

Hazardous/special-effects props route through external controlled gates.

### Wardrobe

`CMP-WRD-001 Garment/label/preset/privacy awareness`  
→ dresser / laundry / stitcher branches  
→ `ROLE-WRD-TECH/TOURING-WARDROBE`  
→ `ROLE-WRD-HEAD/SUPERVISOR`.

---

# 12. Production / operations graph

## Stage Management line

`CMP-SMG-001 Stage-management communication/process literacy`  
→ `ROLE-SMG-SUPPORT`  
→ `ROLE-SMG-ASM`  
→ `ROLE-SMG-STAGE-MANAGER`.

## Production Management line

`CMP-PMG-001 Production documentation/scope/status tracking`  
→ `ROLE-PMG-PA/COORDINATOR`  
→ `CMP-PMG-002 Advance/vendor/labor/resource integration`  
→ `ROLE-PMG-PRODUCTION-MANAGER`.

## Venue/Event Operations line

`CMP-VOP-001 House/site/facility/system interface literacy`  
→ `ROLE-VOP-VENUE-CREW/COORDINATOR`  
→ `CMP-VOP-002 Event readiness/turnover/department coordination`  
→ `ROLE-VOP-OPS/PRODUCTION-MANAGER`.

## Crew/Labor Leadership line

`CMP-LEAD-001 Check-in/assignment/sequence leadership`  
→ `CMP-LEAD-002 performance/correction/handoff/timekeeping workflow`  
→ `ROLE-LEAD-CREW-LEAD/CHIEF`  
→ labor coordination/supervision and possible transfers to broader production management.

---

# 13. Show Control / special systems

## Show-control spine

`CMP-SHC-001 Cue-owner / destination-owner literacy`  
→ `CMP-SHC-002 Trigger/sync/interface concepts`  
→ `CMP-SHC-003 Show-file/change-control/fallback concepts`  
→ `ROLE-SHC-OP/PROGRAMMER/ENGINEER` where assigned.

## External controlled branches

- `GATE-AUTOMATION-SPECIALIST`
- `GATE-FX-ATMOSPHERIC`
- `GATE-FX-LASER`
- `GATE-FX-PYRO/FLAME/CRYO`

General courses remain awareness/interface only for hazardous systems.

---

# 14. Sector overlay nodes

Each competency can carry applicability tags rather than being duplicated:

- `SEC-TOURING-FESTIVAL`
- `SEC-VENUE-HOUSE`
- `SEC-CORPORATE-CONVENTION`
- `SEC-THEATRE-PERFORMING-ARTS`
- `SEC-WORSHIP`
- `SEC-FILM-TV-BROADCAST`
- `SEC-OUTDOOR-WEATHER`
- `SEC-RENTAL-SHOP`

For each `CMP`, record:

- transfers cleanly;
- transfers with terminology/workflow differences;
- role authority differs;
- specialist/local training needed;
- not commonly applicable.

---

# 15. Career / evidence nodes

## Career literacy

- `CMP-CAR-001 Hiring ecosystem literacy`
- `CMP-CAR-002 Union/local/CBA awareness`
- `CMP-CAR-003 Credential taxonomy`
- `CMP-CAR-004 Work-experience documentation`
- `CMP-CAR-005 Continuing education/currentness`
- `CMP-CAR-006 Professional handoff/reputation practices`

## Evidence literacy

- `CMP-EVD-001 Source/claim literacy`
- `CMP-EVD-002 Manufacturer/model/version awareness`
- `CMP-EVD-003 Authority-state literacy`
- `CMP-EVD-004 Self-report vs external verification distinction`
- `CMP-EVD-005 Content-version/freshness awareness`

---

# 16. Transfer stations — first canonical set

These are common graph edges, not guaranteed promotions:

- General Stagehand ↔ Warehouse/Rental Shop
- General Stagehand → Lighting Support
- General Stagehand → Audio Support
- General Stagehand → Video/LED Support
- General Stagehand → Staging/Scenic Support
- General Stagehand → Backline/Props/Wardrobe Support
- General Stagehand → Venue Crew
- Reliable General Hand → Crew Lead
- Crew Lead ↔ Production Coordinator pathway
- Warehouse Prep/QC → Department Technician paths
- Lighting Tech → Systems Tech / Programmer / Followspot / Lead / Design branches
- Audio Stage Tech → FOH / Monitor / System / Network / RF / Comms branches
- Video Tech → LED / Projection / Camera / Playback / Network / Lead branches
- Scenic Tech → Carpenter / Staging Systems / Deck / Shop / Lead / TD branches
- Technical department experience → Production Management / Venue Production transfer where broader coordination competencies are developed
- Stage Management ↔ Production Coordination transfer where scope expands, without treating roles as equivalent

---

# 17. Controlled gates — canonical set

| Gate ID | Meaning |
|---|---|
| GATE-RIG-TRAINING/AUTH | overhead rigging/work-at-height/hoist specialist authority external |
| GATE-ELC-TRAINING/AUTH | energized production-power/testing/connection qualified-person authority external |
| GATE-AUTOMATION-SPECIALIST | machinery operation/programming/maintenance external |
| GATE-MEWP/PIT | powered access/material-handling operation external employer training/authorization |
| GATE-FX-LASER | optical-hazard specialist/regulatory authority external |
| GATE-FX-PYRO/FLAME/CRYO | hazardous special-effects specialist/permit/AHJ authority external |
| GATE-DRIVER/CARGO | regulated driving/load acceptance responsibility external where applicable |

The visual career map should show these as gates rather than ordinary stations.

---

# 18. Learning-state overlay

Each competency node can display a separate learner evidence state:

- `not_started`
- `viewed`
- `knowledge_checked`
- `prepared_for_practice`
- `observed_practice`
- `externally_verified_experience`

Separate overlays may display:

- employer authorization;
- external credential;
- license;
- self-reported work experience.

Never reduce these to one color/value in the underlying data model, even if a future visualization combines them for simplicity.

---

# 19. Owner “everything map” projection

The owner-facing visualization can derive directly from this graph:

- **department lines** = role/competency families;
- **stations** = competency or role nodes;
- **transfer stations** = cross-domain edges;
- **controlled gates** = external authority nodes;
- **bright color** = chosen completed/evidenced overlay;
- **muted color** = not yet evidenced/not built depending selected map mode;
- **white route** = selected outward adjacency/path;
- filters switch between `personal experience`, `Crew Blueprint research`, `course coverage`, `publication state`, and later `learner progress`.

This is stronger than encoding “completed” directly into the graphic because the same map can answer different questions using different overlays.

---

# 20. Next graph-synthesis work

1. assign every current course/module/lesson to canonical `CMP` nodes;
2. assign every MDQ research package to `CMP` nodes;
3. identify duplicate/overlapping competencies;
4. record prerequisite vs adjacency vs role-bundle edges separately;
5. add source-strength/freshness summaries per competency;
6. map current website/build coverage;
7. create machine-readable graph data (`json`/`jsonl`) only after ID review;
8. use graph IDs as the bridge into MDQ-001 claim/source matrixing.

**Synthesis state:** first canonical cross-domain graph established; now ready for course/research coverage mapping.
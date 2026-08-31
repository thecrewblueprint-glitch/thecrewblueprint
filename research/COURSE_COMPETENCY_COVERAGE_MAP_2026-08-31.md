# The Crew Blueprint — Existing Course → Competency Coverage Map

**Prepared:** 2026-08-31  
**Status:** Synthesis baseline against current `main` learner-facing inventory  
**Inputs:** Stagehand Fundamentals, current C1/C2 pathways, Field Skills data, Expanded Curriculum Build Register, canonical competency graph  
**Purpose:** Separate **what the research supports** from **what the site actually teaches today**.

This is a coverage map, not a final course-architecture decision.

---

## 1. Coverage states

| State | Meaning |
|---|---|
| `built_strong` | Current learner-facing material substantially covers the competency family. |
| `built_partial` | Current material touches the competency but deeper/reorganized coverage is needed. |
| `research_only` | Evidence is sufficient or substantial, but no dedicated learner-facing course/lesson currently covers it well. |
| `planned_split` | Existing combined material should split at greater specialization depth. |
| `external_gate` | Crew Blueprint should map/teach awareness but not convert the controlled work into an internal qualification route. |

---

# 2. Stagehand Fundamentals → universal foundation

Current route: `courses/stagehand-fundamentals.html`  
Current architecture: 10 modules / 34 lessons.

| Competency | Current coverage | Current module/lesson family | Decision |
|---|---|---|---|
| CMP-CORE-001 Call readiness | built_strong | Modules 1/3 | preserve |
| CMP-CORE-002 Safety/hazard recognition | built_strong | Module 2 + 4.3 | preserve/cross-link |
| CMP-CORE-003 Jobsite orientation | built_strong | Module 4 | preserve |
| CMP-CORE-004 Chain of command | built_strong | 1.3 + Module 5 | preserve |
| CMP-CORE-005 Assignment receipt/confirmation | built_partial | 5.1/5.2 + load-in material | strengthen explicit assignment model |
| CMP-CORE-006 Clear communication/readback | built_strong | Module 5 | preserve/contextualize |
| CMP-CORE-007 Department ownership/boundaries | built_strong | Module 9 | preserve |
| CMP-CORE-008 Task completion/handoff | built_partial | 5.2, 6.4, 8.3 | strengthen explicit acceptance/handoff |
| CMP-CORE-009 Report-back/reassignment | built_partial | 5.2/5.3 | strengthen explicit next-work behavior |
| CMP-CORE-010 Standby/break/release distinction | research_only / thin live coverage | scattered call-shape material | new content required |
| CMP-CORE-011 Load-in/load-out literacy | built_strong | Modules 6/8 | preserve |
| CMP-CORE-012 Work-area organization/reset | built_partial | load-in/out/tools | strengthen from SFS-U04/U05 |
| CMP-CORE-013 Documentation/version literacy | built_partial | scattered | deepen in department/career layers |
| CMP-CORE-014 Stop/escalate judgment | built_strong | Modules 2/4/7/9 | preserve |
| CMP-CORE-015 Professional conduct/reliability | built_strong | 1.3, Module 5, Module 10 | preserve |
| CMP-CORE-016 Timekeeping/sign-out | research_only / thin live coverage | minimal | new bounded content required |
| CMP-CORE-017 Sector/local adaptability | built_partial | Modules 1/3/4/10 | add sector overlays later |
| CMP-CORE-018 Public/accessibility-route awareness | built_partial | jobsite/hazard content | add explicit public/accessibility route material |

**Fundamentals synthesis:** the course is not obsolete. It covers the foundation well but does not yet fully teach the entire operational call loop evidenced in SFS-O01–O08.

---

# 3. Field Skills — research depth versus current build

| Competency | Current course | State |
|---|---|---|
| CMP-FLD-001 Road-case movement | `field-skill-move-road-case-with-partner.html` | built_strong |
| CMP-FLD-002 Team lift/carry/set-down | none dedicated | research_only |
| CMP-FLD-003 Cart/dolly/hand-truck movement | none dedicated | research_only |
| CMP-FLD-004 Cable coiling/staging | `field-skill-over-under-cable-coiling.html` | built_strong |
| CMP-FLD-005 Released-cable deployment/gathering | none dedicated | research_only |
| CMP-FLD-006 Cable-route protection | `field-skill-cable-ramps-protectors.html` | built_strong |
| CMP-FLD-007 Case/boneyard/work-area organization | none dedicated | research_only |
| CMP-FLD-008 Work-area reset/handoff | none dedicated | research_only |
| CMP-FLD-009 Barricade support | `field-skill-barricade-setup.html` | built_strong |
| CMP-FLD-010 Pipe-and-drape support | none dedicated | research_only |
| CMP-FLD-011 Ground-level soft goods | none dedicated | research_only |
| CMP-FLD-012 Riser/deck component support | partial in staging/fundamentals | research_only as dedicated skill |
| CMP-FLD-013 Scenery/flat/wagon movement | partial in staging/fundamentals | research_only as dedicated skill |
| CMP-FLD-014 Hand-tool recognition/handoff | partial in Fundamentals Module 7 | built_partial |
| CMP-FLD-015 Tape/label/marking literacy | scattered | built_partial |
| CMP-FLD-016 Dock/ramp/trailer handoff | partial in load-in/out | built_partial |
| CMP-FLD-017 Ratchet-strap assigned use | `field-skill-ratchet-straps.html` | built_strong |
| CMP-FLD-018 Flatbed cargo-support awareness | `field-skill-flatbed-cargo-securement-support.html` | built_strong + external authority boundary |

**Field Skills gap:** the current site visibly teaches only part of the now-researched common early-career task universe. The largest content-build opportunity is CMP-FLD-002/003/005/007/008/010/011/012/013.

---

# 4. Department Course 1 / Course 2 coverage

## Lighting

- C1 **Supporting a Lighting Hang** → CMP-LTG-001/002 plus CORE boundaries: `built_strong` for support.
- C2 **Lighting Production Flow** → CMP-LTG-003–006 and partial 007–011: `built_partial` relative to the new deeper research.
- Major research-only depth: photometry/color/design data exchange, deep networking, shop/QC, specialist interfaces.

## Audio

- C1 **Supporting an Audio Load-In** → CMP-AUD-001/002 plus support boundaries: `built_strong`.
- C2 **Live Sound Systems** → CMP-AUD-003/004 and partial systems concepts: `built_partial`.
- Research-only/deeper branches: PA/acoustics/measurement, network/clock, RF, intercom, advanced console/show-file distinctions.

## Video / LED

- C1 **Supporting an LED Video Wall Build** → CMP-VID-001/004 support layer: `built_strong`.
- C2 **Large-Scale LED Video Systems** → CMP-VID-002–005: `built_partial` relative to full Video/LED/Broadcast domain.
- Research-only/deeper branches: projection, camera/broadcast, playback/media server, AV-over-IP/ST2110.

## Staging / Carpentry

- C1 **Supporting Staging & Carpentry** → CMP-STG-001–003: `built_strong` at support level.
- C2 **Modular Deck Systems** → CMP-STG-005 plus drawing/system interfaces: `built_partial` and model/manufacturer dependent.
- Research-only/deeper branches: scenic construction/materials, theatre deck/changeover, shop/QC, broader scenic drawings/revisions.

## Backline / Props / Wardrobe

- C1 **Supporting Backline, Props & Wardrobe** → CMP-SPEC-001–003: `built_strong` as shared gateway.
- C2 **Department Systems** → early systems overview: `built_partial`.
- Advanced architecture decision: `planned_split` into Backline, Props and Wardrobe technician/specialist paths rather than one combined advanced ladder.

---

# 5. Leadership / supervisor coverage

Current review builds:

- **Lead / Crew Chief Foundations** → CMP-LEAD-* shared leadership core: `built_strong` draft.
- **Lighting Lead** → CMP-LTG-016 + leadership interfaces: `built_strong` draft.
- **Audio Lead** → CMP-AUD-013: `built_strong` draft.
- **Video Lead** → CMP-VID-011 leadership layer: `built_strong` draft.
- **Staging / Carpentry Lead** → CMP-STG-008: `built_strong` draft.
- **Rigging Lead** → role/leadership knowledge beyond GATE-RIG: `built_partial`, practitioner/qualification gate mandatory.
- **Electrics Lead** → role/leadership knowledge beyond GATE-ELC: `built_partial`, qualified electrical review mandatory.
- **Predictive Hazard Recognition** → CORE-002/014 + supervisor reasoning: `built_strong` draft.
- **Event Operations & Production Coordination** → CMP-PMG/VOP/LEAD interfaces: `built_partial` relative to new MDQ-090–096 split.

Leadership material should not be forced above every specialist path. It is a parallel responsibility dimension.

---

# 6. Advanced / Course 3 coverage

| Existing course | Competency coverage | State |
|---|---|---|
| Lighting Control-System Design | CMP-LTG-006/008/010/014/015 plus architecture | built_partial-to-strong; portfolio/practitioner gate |
| Audio System & Network Architecture | CMP-AUD-006–009 plus design/system reasoning | built_partial-to-strong; portfolio/practitioner gate |
| Video Display-System Architecture | CMP-VID-004/005/010/011 | built_partial; broaden with camera/playback/projection/network evidence |
| Electrics System & Load-Planning Literacy | CMP-ELC-002–005 | built_strong conceptual; external authority gate remains |
| Staging / Carpentry Design Coordination | CMP-STG-008 + structural/interface literacy | built_strong conceptual; specialist authority remains external |
| Production Power Awareness | CMP-ELC-001/003/004/005 | built_strong awareness; no live-power authority |
| Production & Coordination Career Branch | CMP-SMG/PMG/VOP role comparison | built_partial; split into parallel role paths in future architecture |

---

# 7. Controlled-work domains

## Rigging

Current learner coverage consists of awareness/lead material and cross-domain boundaries. There is deliberately **no general novice physical rigging course**.

- CMP-RIG-001–004: `built_partial` through awareness, lead, Fundamentals and department interfaces.
- GATE-RIG-TRAINING/AUTH: `external_gate`.

## Electrics / Production Power

- CMP-ELC-001–005: substantial conceptual coverage through Production Power Awareness, Lighting, Electrics Lead and C3 load-planning material.
- GATE-ELC-TRAINING/AUTH: `external_gate`.

This is an intentional curriculum boundary, not a missing course defect.

---

# 8. Production / career / sector coverage

| Family | Current course state | Main gap |
|---|---|---|
| Stage Management | built_partial through career branch | dedicated role/path material |
| Production Management | built_partial through career branch/supervisor | dedicated role/path material |
| Venue/Event Operations | built_partial through career branch/supervisor | dedicated role/path material |
| Crew/Labor Leadership | built_strong draft | practitioner/field validation |
| Show Control | research_only / scattered interfaces | dedicated cross-department systems literacy resource |
| Touring/Festival overlay | built_partial across existing courses | explicit overlay/indexing |
| Venue/House overlay | built_partial | explicit overlay/indexing |
| Corporate/Convention overlay | built_partial | explicit overlay/indexing |
| Theatre overlay | built_partial | explicit overlay/indexing |
| Worship overlay | research_only mostly | dedicated transfer material |
| Film/TV/Broadcast overlay | research_only/partial | dedicated transfer material |
| Outdoor/Weather overlay | built_partial | explicit plan-following/weather/public-area material |
| Career/union/credential navigation | built_partial/strong across existing resources | normalization and freshness |

---

# 9. Highest-value build gaps revealed by the crosswalk

These are gaps where **research exists but learner-facing coverage does not yet match it**:

### Immediate Stagehand/common-work gaps

1. Team Lift / Carry / Set Down.
2. Cart / Dolly / Hand-Truck Movement.
3. Cable Deployment / Gathering.
4. Case / Boneyard Organization.
5. Work-Area Reset / Handoff.
6. Pipe-and-Drape Support.
7. Ground-Level Soft Goods.
8. Riser / Deck Component Support.
9. Scenery / Flat / Wagon Movement.
10. Arrival/check-in, standby/break/release and timekeeping content missing from the current Fundamentals experience.

### Department depth gaps

- Lighting: deeper fixture science, network/control, console/show-file, design/previs, shop/QC and specialist-interface material.
- Audio: PA/acoustics/measurement, audio networking/clocking, RF/comms and broader console/system branches.
- Video: projection, camera/broadcast, playback/media and AV-over-IP branches.
- Staging: scenic materials/construction, shop/QC and theatre/deck workflow.
- BPW: split technician paths.
- Production: dedicated Stage Management / Production Management / Venue Operations paths.
- Show control and sector overlays remain thin in learner-facing format.

---

# 10. Duplication / consolidation targets

The graph shows several concepts repeated across courses that should become shared dependencies rather than independently rewritten lessons:

- chain of command;
- assignment confirmation;
- stop/escalate;
- work-area reset/handoff;
- documentation/version/change control;
- cable handling fundamentals;
- network fundamentals;
- temporary-power authority boundaries;
- rigging/work-at-height boundaries;
- show-file/backup/version discipline;
- sector/local variation;
- lead delegation/QC/change control.

**Architecture implication:** later restructuring should reference shared competencies and contextualize them per department instead of maintaining conflicting duplicate explanations.

---

# 11. Overall coverage conclusion

The project is **research-ahead-of-course-build** in many areas now.

- Foundation: strong but operational-cycle gaps remain.
- Common physical Field Skills: evidence materially exceeds current course inventory.
- C1 pathways: relatively strong.
- C2 pathways: useful current foundation but materially narrower than new research.
- Lead/C3: substantive review builds exist, but validation remains open.
- Production/specialist/sector branches: research depth now exceeds learner-facing structure.
- Controlled work: intentionally stops at external qualification/authorization gates.

The next task is not to choose the final presentation. It is to attach stable content/course IDs and sources to this competency coverage so the later structure decision can be made from the complete evidence graph.
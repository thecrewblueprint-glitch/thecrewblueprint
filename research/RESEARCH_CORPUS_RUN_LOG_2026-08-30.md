# Research Corpus Run Log — 2026-08-30

**Run ID:** RQ-000-2026-08-30  
**Repository baseline read:** main at 6b8a441c21ac230112352dbe1936bd2d035e1b29  
**Scope:** Every one of the 60 Markdown files present in research/ before RESEARCH_QUEUE.md was added  
**Result:** Corpus read complete; classifications, collision crosswalk, stale-status reconciliation, rerun relationships, and course lineage recorded

## What “all 60” actually contained

The directory held 60 Markdown files, but they were not 60 pending research assignments.

| Corpus class | Count | Meaning |
|---|---:|---|
| Research packets | 43 | Evidence-bearing research already present |
| Research reruns | 3 | Newer evidence packets that revisit Packages 21–23 |
| Companion notes | 4 | Interpretation safeguards tied to parent packets |
| Curriculum drafts | 2 | Course-writing artifacts, not independent research |
| Source archives | 2 | Original content preserved for lineage |
| Legacy synthesis/workflow notes | 2 | Orientation and handoff instructions |
| Sourcing brief | 1 | The brief that led to later Fundamentals validation work |
| Legacy prompt tracker | 1 | Status was stale and is reconciled in this run |
| Source master map | 1 | Evidence crosswalk for ten Fundamentals gaps |
| Library guide | 1 | Source hierarchy and handoff guidance |
| **Total** | **60** | |

## Measured corpus

- **268,056 words** across all 60 files.
- **114,040 words** are in the two source archives.
- **154,016 words** are non-archival research, notes, drafts, and guidance.
- **125,259 words** are in the 46 research packets and reruns.
- **571 distinct cited URLs** across **172 source domains**.
- The per-file citation inventory contains 663 unique-within-file URL references across the 46 packets/reruns.

These are inventory measurements, not a claim that every URL remains live or that every cited claim has been independently revalidated on 2026-08-30.

## Run conclusion

The correct next action is **not** to regenerate 60 documents. Forty-six evidence packets/reruns already exist, and fourteen files serve other lineage, workflow, curriculum, or indexing roles. Regenerating all 60 by filename would duplicate work, blur source history, and treat drafts and archives as if they were unanswered research questions.

This run therefore:

1. opened and classified every file;
2. retained completed research;
3. identified the canonical current reruns;
4. reconciled the stale ten-prompt tracker;
5. established collision-free semantic keys for the three Package 21 subjects;
6. mapped the evidence to live and future course areas;
7. commissioned fresh work only for the five accepted Stagehand Field Skills gaps.

## Canonical identity and collision crosswalk

Historical filenames remain unchanged so Git history and inbound references are preserved. A bare package number is not a valid identifier where collisions exist; use the canonical key or full filename.

| Canonical key | Historical file | Current role |
|---|---|---|
| CBR-021-AUD-ORIGINAL | 21-audio-course-2-sound-engineering-console-basics.md | Complete original; Package 43 supersedes it for current curriculum handoff |
| CBR-021-LTG-BOK | 21-lighting-department-body-of-knowledge-gap-coverage-research.md | Active lighting body-of-knowledge evidence |
| CBR-021-SHF-AUDIT | 21-stagehand-fundamentals-authenticity-audit-and-bibliography.md | Active Fundamentals authenticity and bibliography evidence |
| CBR-043-AUD-RERUN | 43-audio-course-2-sound-engineering-console-basics-ca-001-rerun.md | Current Audio Course 2 handoff |
| CBR-044-STG-RERUN | 44-staging-carpentry-course-2-build-load-coordination-ca-002-rerun.md | Current Staging/Carpentry Course 2 handoff |
| CBR-045-BPW-RERUN | 45-backline-props-wardrobe-course-2-ownership-accountability-ca-003-rerun.md | Current Backline/Props/Wardrobe Course 2 handoff |

New packages begin at 46 and use unique numbers. Any later physical rename of the three Package 21 files should be a separate migration PR with an inbound-reference search.

## Prompt tracker reconciliation

The ten Stagehand Fundamentals prompts marked not_started in 01-source-research-prompts.md are represented in 02-source-master-map.md and reinforced by Packages 15–20A and the Fundamentals authenticity audit. This run changes those ten statuses to completed and points them to the master map. The assessment-design bonus is not falsely marked complete; it moves to RQ-100's assessment blueprint.

## Course-to-evidence lineage

| Course or program | Primary evidence lineage | Current decision |
|---|---|---|
| Stagehand Fundamentals | 14, 14A, 15–20A, CBR-021-SHF-AUDIT, 02 source map | Research foundation exists; RQ-100 should restructure without deleting source-backed content |
| Lighting Course 1 | 07, 12, 20A | Live; retain technician authority boundaries |
| Lighting Course 2 | 12, CBR-021-LTG-BOK | Live; use body-of-knowledge packet to locate future gaps |
| Video Course 1 | 08, 08A, 13 | Live; preserve model-specific handling differences |
| Video Course 2 | 13 and 13A | Live; curriculum draft is not a substitute for evidence |
| Audio Course 1 | 09 | Live |
| Audio Course 2 | CBR-043-AUD-RERUN; CBR-021-AUD-ORIGINAL for lineage | Live; Package 43 is current evidence handoff |
| Staging/Carpentry Course 1 | 10 | Live |
| Staging/Carpentry Course 2 | CBR-044-STG-RERUN; 22 for lineage | Live; Package 44 is current evidence handoff |
| Backline/Props/Wardrobe Course 1 | 11 and 11A | Live |
| Backline/Props/Wardrobe Course 2 | CBR-045-BPW-RERUN; 23 for lineage | Live; Package 45 is current evidence handoff |
| Lead/crew-chief layer | 24–32 | Research present; qualification and specialist-review gates remain |
| Course 3/system design | 33–39 | Research present; product build is deferred pending validation and demand |
| Strategic initiatives | 40–42 | Decision frameworks complete; operational data collection remains future work |
| Stagehand Field Skills | 20A partial support plus new Packages 46–50 | Fresh research created for the five accepted practical skills |

## Fresh research commissioned by this run

| Package | RQ item | Topic | State after this run |
|---|---|---|---|
| 46 | RQ-SFS-01 | Over-under cable coiling | Source packet complete; practitioner review required |
| 47 | RQ-SFS-02 | Ratchet straps | Source packet complete; practitioner review required |
| 48 | RQ-SFS-03 | Flatbed cargo-securement support | Source packet complete; driver/qualified load-lead review required |
| 49 | RQ-SFS-04 | Barricade setup | Source packet complete for model-specific teaching; barricade/venue-lead review required |
| 50 | RQ-SFS-05 | Cable ramps and protectors | Source packet complete; department/venue/accessibility review required |

## Per-file execution log

| # | File | Class | Words | Cited URLs | Run status | Decision / next action |
|---:|---|---|---:|---:|---|---|
| 1 | [00-NOTEBOOKLM-RESEARCH-SYNTHESIS-NOTES.md](00-NOTEBOOKLM-RESEARCH-SYNTHESIS-NOTES.md) | legacy synthesis | 2,535 | 0 | historical context | Retain; 00A supersedes its workflow instructions. |
| 2 | [00A-CLAUDE-HANDOFF-WORKFLOW-NOTE.md](00A-CLAUDE-HANDOFF-WORKFLOW-NOTE.md) | workflow note | 291 | 0 | current workflow note | Retain as current handoff guidance. |
| 3 | [00B-stagehand-fundamentals-sourcing-brief.md](00B-stagehand-fundamentals-sourcing-brief.md) | sourcing brief | 1,741 | 0 | brief fulfilled | Packages 15–20A, both Fundamentals audits, and the master map contain the resulting evidence. |
| 4 | [01-general-stagehand-career-levels-us-live-events.md](01-general-stagehand-career-levels-us-live-events.md) | research packet | 4,010 | 14 | complete research packet | Map to the named course or decision; refresh only when claims become time-sensitive or equipment-specific. |
| 5 | [01-source-research-prompts.md](01-source-research-prompts.md) | legacy tracker | 741 | 0 | stale tracker corrected in this run | Prompts 1–10 map to 02-source-master-map; assessment-design bonus moves to RQ-100. |
| 6 | [02-department-skill-progressions-us-live-events.md](02-department-skill-progressions-us-live-events.md) | research packet | 6,016 | 36 | complete research packet | Map to the named course or decision; refresh only when claims become time-sensitive or equipment-specific. |
| 7 | [02-source-master-map.md](02-source-master-map.md) | source map | 7,292 | 92 | active crosswalk | Canonical evidence map for the ten Fundamentals gap prompts. |
| 8 | [03-live-events-career-lanes-warehouse-touring-venue.md](03-live-events-career-lanes-warehouse-touring-venue.md) | research packet | 2,518 | 13 | complete research packet | Map to the named course or decision; refresh only when claims become time-sensitive or equipment-specific. |
| 9 | [04-safety-training-timing-crowd-weather-electrical-risk-assessment.md](04-safety-training-timing-crowd-weather-electrical-risk-assessment.md) | research packet | 2,628 | 18 | complete research packet | Map to the named course or decision; refresh only when claims become time-sensitive or equipment-specific. |
| 10 | [04A-note-stagehand-public-area-material-interaction-awareness.md](04A-note-stagehand-public-area-material-interaction-awareness.md) | companion note | 682 | 0 | active companion | Use with its parent evidence packet; not a stand-alone source pack. |
| 11 | [05-stage-management-and-cross-cutting-production-leadership.md](05-stage-management-and-cross-cutting-production-leadership.md) | research packet | 3,029 | 24 | complete research packet | Map to the named course or decision; refresh only when claims become time-sensitive or equipment-specific. |
| 12 | [06-training-certification-curriculum-progression-models.md](06-training-certification-curriculum-progression-models.md) | research packet | 4,027 | 27 | complete research packet | Map to the named course or decision; refresh only when claims become time-sensitive or equipment-specific. |
| 13 | [07-ground-hand-lighting-support.md](07-ground-hand-lighting-support.md) | research packet | 3,342 | 19 | complete research packet | Map to the named course or decision; refresh only when claims become time-sensitive or equipment-specific. |
| 14 | [08-ground-hand-video-wall-support.md](08-ground-hand-video-wall-support.md) | research packet | 2,545 | 19 | complete research packet | Map to the named course or decision; refresh only when claims become time-sensitive or equipment-specific. |
| 15 | [08A-note-led-wall-model-specific-handling-boundaries.md](08A-note-led-wall-model-specific-handling-boundaries.md) | companion note | 515 | 0 | active companion | Use with its parent evidence packet; not a stand-alone source pack. |
| 16 | [09-ground-hand-audio-support.md](09-ground-hand-audio-support.md) | research packet | 3,043 | 11 | complete research packet | Map to the named course or decision; refresh only when claims become time-sensitive or equipment-specific. |
| 17 | [10-ground-hand-staging-carpentry-support.md](10-ground-hand-staging-carpentry-support.md) | research packet | 2,445 | 17 | complete research packet | Map to the named course or decision; refresh only when claims become time-sensitive or equipment-specific. |
| 18 | [11-ground-hand-backline-props-wardrobe-support.md](11-ground-hand-backline-props-wardrobe-support.md) | research packet | 2,810 | 12 | complete research packet | Map to the named course or decision; refresh only when claims become time-sensitive or equipment-specific. |
| 19 | [11A-note-sensitive-show-items-and-performer-owned-gear.md](11A-note-sensitive-show-items-and-performer-owned-gear.md) | companion note | 659 | 0 | active companion | Use with its parent evidence packet; not a stand-alone source pack. |
| 20 | [12-lighting-production-flow-research-packet.md](12-lighting-production-flow-research-packet.md) | research packet | 3,590 | 14 | complete research packet | Map to the named course or decision; refresh only when claims become time-sensitive or equipment-specific. |
| 21 | [12A-lighting-production-flow-rough-draft-curriculum.md](12A-lighting-production-flow-rough-draft-curriculum.md) | curriculum draft | 4,318 | 0 | curriculum artifact | Retain as draft curriculum; do not count as independent evidence. |
| 22 | [13-led-video-systems-research-packet.md](13-led-video-systems-research-packet.md) | research packet | 4,698 | 4 | complete research packet | Map to the named course or decision; refresh only when claims become time-sensitive or equipment-specific. |
| 23 | [13A-led-video-systems-rough-draft-curriculum.md](13A-led-video-systems-rough-draft-curriculum.md) | curriculum draft | 6,016 | 0 | curriculum artifact | Retain as draft curriculum; do not count as independent evidence. |
| 24 | [14-stagehand-fundamentals-original-source.md](14-stagehand-fundamentals-original-source.md) | source archive | 109,938 | 0 | source archive | Preserve unchanged as lineage evidence. |
| 25 | [14A-stagehand-fundamentals-module-1-source.json.md](14A-stagehand-fundamentals-module-1-source.json.md) | source archive | 4,102 | 0 | source archive | Preserve unchanged as lineage evidence. |
| 26 | [15-stagehand-fundamentals-entry-level-role-validation.md](15-stagehand-fundamentals-entry-level-role-validation.md) | research packet | 3,190 | 23 | complete research packet | Map to the named course or decision; refresh only when claims become time-sensitive or equipment-specific. |
| 27 | [16-stagehand-fundamentals-safety-ppe-validation.md](16-stagehand-fundamentals-safety-ppe-validation.md) | research packet | 3,410 | 23 | complete research packet | Map to the named course or decision; refresh only when claims become time-sensitive or equipment-specific. |
| 28 | [17-stagehand-fundamentals-jobsite-hazard-awareness-validation.md](17-stagehand-fundamentals-jobsite-hazard-awareness-validation.md) | research packet | 4,194 | 18 | complete research packet | Map to the named course or decision; refresh only when claims become time-sensitive or equipment-specific. |
| 29 | [18-stagehand-fundamentals-load-in-load-out-validation.md](18-stagehand-fundamentals-load-in-load-out-validation.md) | research packet | 3,539 | 25 | complete research packet | Map to the named course or decision; refresh only when claims become time-sensitive or equipment-specific. |
| 30 | [19-stagehand-fundamentals-tools-handling-hiring-career-growth-validation.md](19-stagehand-fundamentals-tools-handling-hiring-career-growth-validation.md) | research packet | 2,908 | 18 | complete research packet | Map to the named course or decision; refresh only when claims become time-sensitive or equipment-specific. |
| 31 | [20-stagehand-fundamentals-gap-audit-and-supplemental-validation.md](20-stagehand-fundamentals-gap-audit-and-supplemental-validation.md) | research packet | 2,742 | 13 | complete research packet | Map to the named course or decision; refresh only when claims become time-sensitive or equipment-specific. |
| 32 | [20A-stagehand-fundamentals-gap-audit-addendum.md](20A-stagehand-fundamentals-gap-audit-addendum.md) | companion note | 2,054 | 20 | active companion | Use with its parent evidence packet; not a stand-alone source pack. |
| 33 | [21-audio-course-2-sound-engineering-console-basics.md](21-audio-course-2-sound-engineering-console-basics.md) | research packet | 3,771 | 13 | complete; superseded for handoff | Package 43 is the deeper current rerun; retain this original for lineage. |
| 34 | [21-lighting-department-body-of-knowledge-gap-coverage-research.md](21-lighting-department-body-of-knowledge-gap-coverage-research.md) | research packet | 7,373 | 45 | complete; active evidence | Canonical key CBR-021-LTG-BOK; preserve specialist boundaries. |
| 35 | [21-stagehand-fundamentals-authenticity-audit-and-bibliography.md](21-stagehand-fundamentals-authenticity-audit-and-bibliography.md) | research packet | 2,697 | 35 | complete; active evidence | Canonical key CBR-021-SHF-AUDIT; use for Fundamentals lineage. |
| 36 | [22-staging-carpentry-course-2-build-load-coordination.md](22-staging-carpentry-course-2-build-load-coordination.md) | research packet | 4,796 | 20 | complete; superseded for handoff | Package 44 is the deeper current rerun; retain this original for lineage. |
| 37 | [23-backline-props-wardrobe-course-2-ownership-accountability.md](23-backline-props-wardrobe-course-2-ownership-accountability.md) | research packet | 1,733 | 6 | complete; superseded for handoff | Package 45 is the deeper current rerun; retain this original for lineage. |
| 38 | [24-lead-crew-chief-cross-department-competency-framework.md](24-lead-crew-chief-cross-department-competency-framework.md) | research packet | 1,558 | 6 | complete research packet | Map to the named course or decision; refresh only when claims become time-sensitive or equipment-specific. |
| 39 | [25-lighting-lead-console-rig-authority.md](25-lighting-lead-console-rig-authority.md) | research packet | 1,475 | 10 | complete research packet | Map to the named course or decision; refresh only when claims become time-sensitive or equipment-specific. |
| 40 | [26-audio-lead-signal-path-troubleshooting-authority.md](26-audio-lead-signal-path-troubleshooting-authority.md) | research packet | 1,399 | 7 | complete research packet | Map to the named course or decision; refresh only when claims become time-sensitive or equipment-specific. |
| 41 | [27-video-lead-wall-integrity-display-authority.md](27-video-lead-wall-integrity-display-authority.md) | research packet | 1,513 | 9 | complete research packet | Map to the named course or decision; refresh only when claims become time-sensitive or equipment-specific. |
| 42 | [28-staging-carpentry-lead-build-authority-safety-inspection.md](28-staging-carpentry-lead-build-authority-safety-inspection.md) | research packet | 1,432 | 4 | complete research packet | Map to the named course or decision; refresh only when claims become time-sensitive or equipment-specific. |
| 43 | [29-rigging-lead-load-calculations-safety-verification.md](29-rigging-lead-load-calculations-safety-verification.md) | research packet | 1,268 | 5 | research present; specialist gate | Do not convert into qualification; qualified-rigger review required before curriculum. |
| 44 | [30-electrics-lead-power-authority-code-compliance.md](30-electrics-lead-power-authority-code-compliance.md) | research packet | 1,107 | 6 | complete research packet | Map to the named course or decision; refresh only when claims become time-sensitive or equipment-specific. |
| 45 | [31-predictive-hazard-recognition-supervisor-version.md](31-predictive-hazard-recognition-supervisor-version.md) | research packet | 1,087 | 4 | research complete | Perform lineage/reviewer check, then hand to curriculum rather than rerun. |
| 46 | [32-event-operations-supervisor-production-coordination.md](32-event-operations-supervisor-production-coordination.md) | research packet | 1,448 | 6 | complete research packet | Map to the named course or decision; refresh only when claims become time-sensitive or equipment-specific. |
| 47 | [33-lighting-course-3-system-design-optimization.md](33-lighting-course-3-system-design-optimization.md) | research packet | 1,151 | 5 | research present; future gated | Retain; build only after earlier-level validation and demand. |
| 48 | [34-audio-course-3-system-design-network-architecture.md](34-audio-course-3-system-design-network-architecture.md) | research packet | 1,025 | 8 | research present; future gated | Retain; build only after earlier-level validation and demand. |
| 49 | [35-video-course-3-wall-design-system-architecture.md](35-video-course-3-wall-design-system-architecture.md) | research packet | 949 | 5 | research present; future gated | Retain; build only after earlier-level validation and demand. |
| 50 | [36-electrics-course-3-system-design-load-planning.md](36-electrics-course-3-system-design-load-planning.md) | research packet | 1,041 | 6 | research present; future gated | Retain; build only after earlier-level validation and demand. |
| 51 | [37-staging-carpentry-course-3-build-design-automation.md](37-staging-carpentry-course-3-build-design-automation.md) | research packet | 1,027 | 4 | research present; future gated | Retain; build only after earlier-level validation and demand. |
| 52 | [38-electrics-department-category-power-systems-all-departments.md](38-electrics-department-category-power-systems-all-departments.md) | research packet | 1,364 | 6 | research present; future gated | Retain; build only after earlier-level validation and demand. |
| 53 | [39-production-department-category-stage-management-coordination.md](39-production-department-category-stage-management-coordination.md) | research packet | 1,171 | 5 | research present; future gated | Retain; build only after earlier-level validation and demand. |
| 54 | [40-si-t1-001-learner-employment-outcomes.md](40-si-t1-001-learner-employment-outcomes.md) | research packet | 1,289 | 5 | research complete; decision framework | Retain for strategic validation and measurement. |
| 55 | [41-si-t1-002-mobile-operations-iatse-outreach-sustainability.md](41-si-t1-002-mobile-operations-iatse-outreach-sustainability.md) | research packet | 1,325 | 5 | research complete; decision framework | Retain for strategic validation and measurement. |
| 56 | [42-si-t1-003-homes-for-hands-referral-network-scalability.md](42-si-t1-003-homes-for-hands-referral-network-scalability.md) | research packet | 1,575 | 6 | research complete; decision framework | Retain for strategic validation and measurement. |
| 57 | [43-audio-course-2-sound-engineering-console-basics-ca-001-rerun.md](43-audio-course-2-sound-engineering-console-basics-ca-001-rerun.md) | research rerun | 6,603 | 35 | complete; current handoff | Canonical current Audio Course 2 research. |
| 58 | [44-staging-carpentry-course-2-build-load-coordination-ca-002-rerun.md](44-staging-carpentry-course-2-build-load-coordination-ca-002-rerun.md) | research rerun | 5,474 | 30 | complete; current handoff | Canonical current Staging/Carpentry Course 2 research. |
| 59 | [45-backline-props-wardrobe-course-2-ownership-accountability-ca-003-rerun.md](45-backline-props-wardrobe-course-2-ownership-accountability-ca-003-rerun.md) | research rerun | 3,924 | 19 | complete; current handoff | Canonical current Backline/Props/Wardrobe Course 2 research. |
| 60 | [README.md](README.md) | library guide | 1,913 | 0 | library guide | Keep as source hierarchy; point to this registry and active queue. |

## Verification limits

- Every file was opened from main and classified from its actual contents.
- Counts were calculated from the retrieved repository text.
- The current-source refresh for Packages 46–50 used official government and manufacturer material.
- This run did not live-check all 571 historical URLs or re-adjudicate every historical claim.
- Research completion does not establish practical competence, employer authorization, legal compliance, specialist qualification, or external certification.
- Rigging, electrical, vehicle securement, crowd/public routing, and accessibility claims remain subject to the responsible qualified authority and applicable law, code, manufacturer instructions, employer procedure, and site rules.

## Next controlled actions

1. Practitioner review Packages 46–50.
2. Perform RQ-100 and produce the no-loss Fundamentals restructuring crosswalk.
3. Build the original visual system in RQ-200 from reviewed procedures.
4. Apply RQ-300's distinct learner states: knowledge completed, practice observed, employer/lead authorized, and external credential verified.
5. After this source-repository PR is accepted, synchronize the 50 Year Roadmap to point to this log and the active queue.

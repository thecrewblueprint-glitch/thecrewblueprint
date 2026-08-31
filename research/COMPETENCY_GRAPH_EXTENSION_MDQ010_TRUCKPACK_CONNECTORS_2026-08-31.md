# Competency Graph Extension — MDQ-010 Truck-Pack and Connector Recognition

**Prepared:** 2026-08-31  
**Status:** Canonical graph extension pending later consolidation into the main graph file  
**Parent graph:** `research/CROSS_DOMAIN_COMPETENCY_GRAPH_2026-08-31.md`  
**Correction source:** `research/MDQ-010A_REQUIRED_FAMILIES_AND_RISK_PRIORITY_CORRECTION_2026-08-31.md`

## Added competency nodes

### `CMP-FLD-019 — Truck-pack / case-orientation support`

**Learning baseline:** T2 Field Skill  
**Responsibility baseline:** R1 assigned support  
**Authority baseline:** A1 assigned support

Transferable capability:

- recognize that pack order, truck assignment, case orientation and destination may be deliberate;
- identify labels/order cues and preserve the responsible loader's sequence;
- stage/move cases under direction;
- report mismatches or uncertainty;
- return final placement/acceptance to the responsible loader/lead.

External boundaries:

- no regulated driving authority;
- no public-road cargo/load acceptance;
- no powered-equipment operation;
- no independent securement/load-distribution design.

Primary transfers:

`CMP-FLD-001 Road-case movement`  
`CMP-FLD-007 Case/boneyard organization`  
`CMP-FLD-016 Dock/ramp/trailer handoff awareness`  
→ `CMP-FLD-019 Truck-pack/case-orientation support`  
→ warehouse/logistics/touring role interfaces.

Where regulated cargo responsibility applies, route to `GATE-DRIVER/CARGO`.

### `CMP-FLD-020 — Basic non-energized connector recognition`

**Learning baseline:** T2 Field Skill / cross-department vocabulary  
**Responsibility baseline:** R0–R1  
**Authority baseline:** A0–A1

Transferable capability:

- visually recognize common connector families at basic vocabulary level;
- understand that similar-looking shells do not establish identical function/compatibility;
- use labels and current department direction rather than guessing signal/power use;
- stop rather than force an unfamiliar or non-seating connector;
- escalate identity, state, destination or compatibility questions to the responsible technician.

This node is **recognition literacy only**. It does not create authority to energize, connect temporary power, alter patching, configure systems, troubleshoot faults or perform specialist testing.

Primary transfer points:

- Lighting `CMP-LTG-002` cable/data support;
- Audio `CMP-AUD-001/002` source and stage-patch literacy;
- Video `CMP-VID-001/002` equipment/signal-transport literacy;
- Comms/show-control interfaces where assigned.

Electrical authority still routes through `GATE-ELC-TRAINING/AUTH`.

## Owner-map behavior

Until learner-facing routes are built, both nodes should render **muted** under the course/build overlay and **bright research** under a research-coverage overlay. Neither node should ever render as an external authorization credential.

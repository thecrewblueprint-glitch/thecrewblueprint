# Issue #61 independent blind-build protocol

**Date:** 2026-09-10  
**Experiment:** Claude Opus candidate vs OpenAI candidate vs Roadmapdev analysis  
**Goal:** compare independently reasoned product/build solutions against the same owner requirements and source evidence without allowing Roadmapdev's prior synthesis to prime either candidate.

---

## 1. What "blind" means here

A valid blind candidate may know:
- the owner's current product doctrine;
- the frozen V2, V4, and clean-sheet product states;
- the current canonical Crew Blueprint evidence/curriculum corpus;
- accepted post-#78 responsibility/access corrections;
- objective technical constraints;
- fresh external evidence it independently researches and logs.

A valid blind candidate may **not** know before freeze:
- Roadmapdev's recommendation or decision result;
- the prior PR #57 synthesis recommendation;
- the Roadmapdev-informed successor product conclusion in PR #72;
- generated successor architecture whose purpose is to embody that prior conclusion;
- another candidate's architecture, code, screenshots, research notes, scoring, or conclusions.

The point is not to pretend history did not happen. The point is to keep each candidate's **decision formation** independent enough to make the later comparison informative.

---

## 2. Important contamination note

The current long-running ChatGPT conversation has previously encountered Roadmapdev-derived Crew Blueprint architecture context. Therefore this exact conversation instance cannot truthfully be called a strict clean-room OpenAI blind evaluator.

For a **strict blind OpenAI candidate**, start a fresh OpenAI/ChatGPT Work or coding session and supply only:

1. Issue #61 after its 2026-09-10 reconciliation;
2. `research/integration/issue-61-blind-build-research-index-2026-09-10.md`;
3. `research/integration/issue-61-blind-build-source-map-2026-09-10.json`;
4. this protocol;
5. the repository access required by the packet.

Do not provide the fresh OpenAI session with this conversation history, Roadmapdev files, PR #57 recommendation material, PR #72, or the Claude candidate.

If the current ChatGPT instance is used anyway, label its result **Roadmapdev-withheld / prior-context-contaminated**, not strict blind.

---

## 3. Isolation model

Create separate branches/workspaces. Neither candidate branch may be based on the other candidate.

Recommended branch names:
- `experiment/blind-claude-opus-issue61-2026-09-10`
- `experiment/blind-openai-issue61-2026-09-10`

Neither branch is authorized for merge to `main` merely because the candidate finishes.

### Repository baseline
The packet itself was created from:
- `main` = `cd3ef36077535b41c7a405065c186c4af199b5ea`

However, current `main` already contains later successor/projection implementation influenced by prior synthesis. A candidate must not simply inherit its semantic architecture and call the result independent.

For product reasoning, use the frozen/reference states and allowed evidence map. Current `main` may be used after architecture freeze for repository mechanics, test harnesses, reusable non-semantic infrastructure, and integration compatibility.

---

## 4. Equal-input rule

Claude Opus and the strict-blind OpenAI session must receive the same:
- owner doctrine;
- frozen version refs;
- allowed research index;
- blind source map;
- required deliverables;
- evaluation criteria;
- time/scope constraints if the owner later imposes them.

If one candidate receives new material before freeze, either:
1. give the same material to the other candidate before its freeze; or
2. mark the comparison asymmetric and record the difference.

---

## 5. Candidate assignment

Each candidate must independently answer:

> Given the current owner doctrine and the preserved V2, V4, and clean-sheet Crew Blueprint evidence, what product architecture and implementation should become the next coherent Crew Blueprint build?

The candidate must not begin from the assumption that any existing version or prior synthesis is correct.

The candidate is expected to:
1. orient to authority and source boundaries;
2. inspect all three preserved versions;
3. inspect the current canonical curriculum/evidence necessary to understand scope;
4. reconcile #78/#79 responsibility/access doctrine;
5. identify useful elements, failures, duplication, and missing capabilities;
6. design its own coherent target architecture;
7. explain why its structure best serves zero-knowledge learners, working hands, technicians, and future employer/credential use;
8. produce the assigned build artifact without consulting sealed comparison material.

---

## 6. Required candidate outputs

Every candidate must leave the same artifact classes so later analysis is apples-to-apples.

### A. Candidate architecture report
Must include:
- one-paragraph product thesis;
- target audience segmentation;
- learner information architecture;
- zero-knowledge learner path;
- experienced-worker bypass/entry behavior;
- department/role/competency architecture;
- ORIENT / SUPPORT / OPERATE / DEEPEN-LEAD implementation;
- free/paid boundary treatment;
- safety/qualification boundaries;
- Field Skills treatment;
- Context Labs treatment;
- V2/V4/clean-sheet keep / adapt / reject decisions;
- course/lesson/assessment model;
- progress/account/entitlement architecture;
- credential/verification direction;
- Production Atlas boundary and bridge;
- employer-recognition boundary;
- visual/navigation system;
- publication/versioning/provenance strategy;
- build/deployment strategy;
- known risks and unresolved questions.

### B. Source/research log
Use the research index contract. Every material external research action must be logged.

### C. Decision/deviation register
For every major decision, record:
- decision;
- alternatives considered;
- evidence used;
- why selected;
- what existing version behavior is retained/rejected;
- whether it deviates from a current owner-reviewed artifact;
- reason for deviation.

### D. Implementation artifact
Candidate should produce a reviewable implementation rather than prose only.

Minimum useful implementation scope:
- home/front door;
- beginner learning route;
- experienced-worker route;
- curriculum/pathway discovery;
- at least one fully rendered foundation course shell;
- at least one representative department pathway showing free SUPPORT → paid OPERATE → DEEPEN distinction;
- Field Skills treatment;
- Context Lab treatment;
- sources/safety boundary;
- responsive navigation and footer;
- representative account/entitlement state design even if backend billing is not activated.

The implementation may use static/mock data for future account/payment states only if clearly labeled and if protected-content security is not falsely represented as complete.

### E. Validation report
Must include:
- links/routes checked;
- mobile/responsive checks;
- keyboard/accessibility checks;
- course/assessment state checks;
- safety/access classification checks;
- no-private-data checks;
- no sealed-source contamination check;
- any tests not completed.

### F. Freeze manifest
Record:
- candidate name/model;
- branch;
- commit SHA;
- freeze timestamp;
- source-map version;
- repository baseline;
- exact allowed research added after packet creation;
- attestation that sealed Roadmapdev comparison material and the competing candidate were not opened before freeze.

---

## 7. Claude Opus instruction block

Use the following as the controlling assignment in a **fresh Claude Opus / Claude Code session**.

> You are Candidate A in a blind architecture/build comparison for The Crew Blueprint. Your job is to independently design and implement the strongest coherent next version of this product from the allowed source evidence. Do not optimize for agreement with any previous AI analysis.
>
> Before making architecture decisions, read Issue #61, Issue #78, Issue #79, `research/integration/issue-61-blind-build-research-index-2026-09-10.md`, `research/integration/issue-61-blind-build-source-map-2026-09-10.json`, and `planning/issue-61-blind-build-protocol-2026-09-10.md`.
>
> You MUST obey the sealed-source rules. Do not open Roadmapdev Crew Blueprint decision/recommendation/analysis files, PR #57 recommendation material, PR #72, PR #76, PR #77, the prior generated successor architecture, or any OpenAI candidate branch/output before your candidate is frozen. If a link or file appears likely to contain the withheld prior synthesis, stop and log it as withheld instead of reading it.
>
> Treat V2, V4, and clean-sheet as reference products, not as answers. Inspect them directly. Reconcile them against the current owner doctrine, the canonical curriculum/evidence corpus, and accepted post-#78 responsibility/access artifacts. You may perform fresh research when necessary, but log every material research action and prefer primary/authoritative sources.
>
> Build a coherent product, not a visual mashup. You are free to conclude that one version should contribute more or less than expected if the evidence supports it. Do not assume the current #61 synthesis is correct merely because it is written there; #61's non-negotiable owner requirements and #78/#79 doctrine are controlling, while design choices should be independently derived.
>
> Work only on `experiment/blind-claude-opus-issue61-2026-09-10` or an equivalently isolated candidate branch. Do not merge to `main`. Preserve frozen references and history.
>
> Produce all required candidate outputs from this protocol, create a reviewable implementation, run available validations, and finish by writing the freeze manifest. Do not inspect Roadmapdev or the competing candidate after implementation but before freeze; freeze first. After the freeze commit is recorded, stop. Comparison happens later.

### Claude-specific anti-bias instructions
- Do not use Claude artifacts or previous Claude issue/PR prose as self-authority.
- Do not privilege code because Claude previously wrote it.
- Treat #71's Claude-generated audit as a defect input only; verify material claims against source before relying on them.
- Do not infer owner acceptance from merged historical Claude code when later owner doctrine conflicts.

---

## 8. OpenAI instruction block

Use the following as the controlling assignment in a **fresh OpenAI/ChatGPT session with repository tools**.

> You are Candidate B in a blind architecture/build comparison for The Crew Blueprint. Independently determine and implement the strongest coherent next version of the product from the allowed evidence. Your objective is not to agree with Roadmapdev, Claude, prior ChatGPT work, or an existing successor build.
>
> Read Issue #61, Issue #78, Issue #79, `research/integration/issue-61-blind-build-research-index-2026-09-10.md`, `research/integration/issue-61-blind-build-source-map-2026-09-10.json`, and `planning/issue-61-blind-build-protocol-2026-09-10.md` first.
>
> Do not access or summarize sealed comparison sources before freeze: Roadmapdev Crew Blueprint decision/recommendation/analysis material, PR #57 recommendation narrative, PR #72, PR #76, PR #77, prior generated successor architecture, or the Claude candidate branch/output. If search results expose snippets from a sealed source, do not use the substantive conclusion and record the accidental exposure in the freeze manifest.
>
> Inspect the frozen V2, V4, and clean-sheet products directly. Treat them as competing evidence/reference products. Use owner doctrine, canonical curriculum/evidence, accepted post-#78 responsibility/access artifacts, and independently logged fresh research to derive your architecture.
>
> Do not assume that V4 must be the shell, V2 must be the depth layer, or clean-sheet must be the journey layer. Those are hypotheses to test, not givens, except where the owner doctrine explicitly requires a behavior. Produce your own keep/adapt/reject matrix.
>
> Work only on `experiment/blind-openai-issue61-2026-09-10` or an equivalently isolated branch. Do not merge to `main`. Preserve history and frozen references.
>
> Produce all required candidate outputs, a reviewable implementation, validations, and a freeze manifest. Freeze the candidate before reading Roadmapdev or Claude output. Then stop for later comparison.

### OpenAI-specific anti-bias instructions
- Do not use prior ChatGPT summaries or memory as evidence.
- Verify repository facts from source.
- Do not treat previously merged OpenAI/Codex work as presumptively correct.
- Any accidental recollection of prior Roadmapdev conclusions must not be used as justification; decisions must be independently supported by allowed evidence in the candidate report.

---

## 9. Candidate implementation boundaries

Both candidates must preserve these hard boundaries:
- frozen history is immutable reference material;
- all 143 canonical identities remain traceable even if learner-facing presentation consolidates them;
- no personal/private research enters public artifacts;
- employer-demand evidence does not become technical/safety authority;
- safety awareness needed to recognize hazards/stop/escalate is not paywalled;
- online completion does not equal practical competence, authorization, qualification, certification, licensing, or union status;
- paid lesson bodies cannot ultimately depend on client-side hide/show security;
- Production Atlas remains the current work/employer/market intelligence authority;
- Deadhang commercial/contractor data remains outside the Crew Blueprint learner product;
- neither candidate may merge its experiment into `main`.

---

## 10. Research behavior during the blind build

Fresh research is permitted and sometimes required. It must not become a backdoor route to Roadmapdev's conclusion.

### Good fresh research
- current authoritative safety/regulatory/standard sources;
- primary employer role descriptions;
- manufacturer documentation;
- accessibility specifications/guidance;
- credential interoperability standards;
- learning/assessment research;
- secure content-delivery architecture documentation.

### Not permitted before freeze
- searching for Roadmapdev's recommendation in another location;
- using PR #72 or successor docs as a shortcut;
- reading the other candidate to borrow structure;
- asking another agent that has seen the sealed analysis to summarize what it recommended.

---

## 11. Stop condition

A candidate is complete when:
1. all required outputs exist;
2. its implementation is reviewable;
3. available validation has been run and limitations recorded;
4. its candidate branch has one identified freeze commit;
5. the freeze manifest exists;
6. no further candidate changes occur until the owner starts the comparison phase.

After freeze, do not quietly improve a candidate in response to learning the other candidate or Roadmapdev result. Any later revision must become a separate **post-comparison revision** so the original experiment remains inspectable.

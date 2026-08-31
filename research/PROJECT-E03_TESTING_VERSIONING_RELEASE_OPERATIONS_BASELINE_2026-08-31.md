# PROJECT-E03 — Testing, Versioning, and Release Operations Baseline

**Prepared:** 2026-08-31  
**Status:** Requirements baseline; no public release calendar committed  
**Purpose:** Define how Crew Blueprint should eventually test, version, release, measure, update, and supersede course material once the content evidence corpus and product infrastructure are mature enough.

---

# 1. Controlling principle

The project should not treat publication as a one-time event.

The future operating model should support:

> **Research → source/matrix review → draft → practitioner review → learner testing → controlled release → measurement → correction/enhancement → versioned rerelease**

This allows content to be released in deliberate waves while deeper infrastructure, research and validation continue behind it.

The current project is **not yet at the point of setting dates**. First define evidence thresholds and release mechanics.

---

# 2. Separate content maturity from release state

Use distinct dimensions.

## Evidence maturity

Existing master progression:

`mapped → researched → draftable → drafted → matrixed → practitioner_reviewed → learner_validated → publication_ready`

## Product release state

Recommended future state vocabulary:

- `internal_research`
- `internal_draft`
- `owner_review`
- `limited_test`
- `pilot_release`
- `public_current`
- `public_deprecated`
- `withdrawn`
- `superseded`

A course can be technically public while still labeled as owner-review/unaudited during the build phase, but the eventual production backend should make release state explicit and machine-readable.

---

# 3. Version identity requirement

Every consequential learner-facing artifact should eventually have a stable identity and version context.

At minimum:

- course/resource ID;
- module/lesson/block ID;
- version or revision ID;
- effective/release date;
- source/review baseline;
- supersedes/superseded-by relationship;
- safety-critical change indicator;
- change summary;
- whether previous learner completion remains valid educational evidence;
- whether reassessment/review is recommended or required.

Do not overwrite old learner history when content changes.

---

# 4. Change classes

Not every edit should trigger the same release process.

## Class A — cosmetic / presentation

Examples:

- typo;
- layout;
- accessibility markup repair that does not change meaning;
- image compression;
- navigation improvement.

Likely handling:

- normal review;
- no learner reassessment;
- retain version/change log as appropriate.

## Class B — clarification / qualification

Examples:

- adding scope limitation;
- replacing vague universal language with context-specific language;
- improving explanation without changing the underlying task.

Likely handling:

- citation/matrix review;
- targeted practitioner review where safety/authority is implicated;
- learner completion generally retained, but update may be surfaced.

## Class C — substantive instructional change

Examples:

- materially different procedure/sequence;
- changed acceptance condition;
- changed assessment rationale;
- new equipment/model scope;
- major career/role correction.

Likely handling:

- research/source revalidation;
- practitioner review;
- updated assessment/testing;
- consider targeted learner re-review.

## Class D — safety/authority correction

Examples:

- prior content incorrectly implied authorization;
- dangerous procedure was overstated;
- source was superseded by controlling authority;
- manufacturer/regulatory change invalidates prior guidance.

Likely handling:

- immediate containment/withdrawal or correction;
- visible change notice where appropriate;
- preserve historical record;
- notify affected learners/organizations when the backend supports it;
- require re-review/reassessment where justified.

---

# 5. Testing layers

No single test proves course effectiveness.

## Layer 1 — content/source verification

Questions:

- Is the claim supported?
- Is the source current/authoritative enough?
- Are qualifications present?
- Are rights/freshness recorded?
- Does the visual actually depict the supported claim?

Owned by MDQ-001 matrix/review architecture and ECQ.

## Layer 2 — practitioner acceptance

Questions:

- Would experienced workers recognize the task/context?
- Is the terminology plausible across sectors?
- Are local/manufacturer practices being presented honestly?
- Are authority boundaries realistic?
- Are key failure modes missing?

Do not convert practitioner preference into universal fact without evidence.

## Layer 3 — learner comprehension/usability

Questions:

- Can a target learner find the material?
- Do they understand what they are being asked to learn?
- Do visuals reduce confusion?
- Can they distinguish `know`, `practice`, `authorized`, and `credentialed`?
- Can they correctly make stop/ask/continue decisions?

## Layer 4 — retention

Measure whether knowledge persists after delay rather than only immediate quiz performance.

Potential methods:

- delayed scenario questions;
- short retrieval checks;
- spaced revisit prompts;
- concept transfer to new examples.

## Layer 5 — field transfer / observed practice

For bounded physical skills:

- named equipment/context;
- observer;
- conditions;
- observable acceptance criteria;
- rework/stop result;
- comments;
- no automatic standing authorization.

## Layer 6 — workplace outcome evidence

Harder and more valuable, but should be interpreted carefully.

Possible measures:

- reduced repeated corrections;
- faster onboarding to ordinary tasks;
- better assignment/handoff behavior;
- supervisor/lead ratings;
- fewer avoidable boundary mistakes;
- improved career-path clarity.

Avoid claiming accident reduction, productivity gains, callback increases, or employment outcomes without a valid study design and sufficient data.

---

# 6. Pilot cohorts / release rings

A future staged release model could use rings such as:

1. **Internal / owner**
2. **Practitioner reviewers**
3. **Small learner usability cohort**
4. **Field-practice cohort**
5. **Organization pilot**
6. **Limited public release**
7. **General public release**

Not every course requires every ring, but higher-safety, higher-authority or more complex material should face more review before broad release.

---

# 7. Release-calendar concept

The user's proposed model—building a research/content backlog and then publishing on a timed cadence—is operationally sound **if release cadence is downstream of evidence readiness**.

The calendar should not force unfinished material out the door.

Recommended future release objects:

- release train / wave ID;
- target audience;
- included content versions;
- evidence threshold;
- testing cohort completed;
- known limitations;
- release notes;
- measurement window;
- next review date;
- rollback/withdrawal rule.

Possible cadence models to test later:

- monthly skill drops;
- quarterly department waves;
- seasonal releases aligned to touring/festival cycles;
- capability-based releases when a content family reaches threshold;
- organization-specific pilot schedules.

Do not select cadence until learner engagement, maintenance capacity and buyer expectations are known.

---

# 8. Content backlog requirement

Before committing to a steady public release schedule, maintain a buffer of content that is:

- researched;
- matrixed;
- reviewed;
- tested enough for its risk class;
- technically publishable;
- source-fresh;
- visually complete enough for intended use.

A backlog protects the release calendar from forcing rushed research.

---

# 9. Metrics by release

Each release should define what success/failure would mean before launch.

Potential metrics:

## Learning

- activation;
- completion;
- scenario accuracy;
- delayed retention;
- repeat/reference usage;
- field-practice progression;
- misconception categories.

## Product

- navigation/search success;
- error/support burden;
- device/accessibility issues;
- load/performance problems;
- account/auth failures;
- organization workflow friction.

## Content trust

- source-panel usage;
- practitioner disagreement rate;
- correction rate;
- stale-source flags;
- learner reports of ambiguous procedure;
- visual mismatch reports.

## Business

- pilot adoption;
- repeat cohorts;
- buyer engagement;
- conversion/renewal only after a real commercial model exists;
- support and content-maintenance cost.

---

# 10. Analytics interpretation rules

Avoid false conclusions.

Examples:

- high completion does not prove learning;
- low completion does not automatically mean bad content—it may mean poor timing, wrong audience, UX friction or low relevance;
- quiz accuracy immediately after instruction does not prove retention;
- self-reported confidence does not prove competence;
- observed practice on one setup does not prove general authorization;
- organization assignment completion does not prove workplace transfer.

Combine quantitative and qualitative evidence.

---

# 11. Feedback and issue taxonomy

Future feedback should be classified rather than dumped into one inbox.

Suggested categories:

- factual/source challenge;
- safety/authority concern;
- local/sector variation;
- manufacturer/model variation;
- visual problem;
- accessibility issue;
- learner confusion;
- assessment issue;
- practice-observation issue;
- technical/product bug;
- account/privacy/security issue;
- career/business-resource update.

Safety/authority reports should receive higher triage priority than cosmetic feedback.

---

# 12. Rollback / withdrawal requirement

The backend should eventually support withdrawing a content version without erasing historical records.

If a serious problem is discovered:

- stop new exposure;
- mark version withdrawn/superseded;
- publish corrected version when ready;
- preserve what prior learners actually completed;
- record reason/change class;
- determine whether affected users require notice/re-review.

Static GitHub Pages cannot fully support this operating model; this is one reason authenticated/versioned infrastructure will eventually become valuable.

---

# 13. Relationship to the future audit branch

The planned repository-wide `audit` branch remains useful for owner/publication review of the full corpus at a specific point in time.

It should not replace ongoing content versioning in the future backend.

The two concepts serve different purposes:

- **audit branch** — repository-level review/staging snapshot;
- **content version system** — persistent operational history across releases.

Do not create the audit branch until directed.

---

# 14. Release governance decision gates

Do not launch a timed release calendar until:

- enough content is `publication_ready` to form a buffer;
- learner testing is operational;
- version IDs and change logs are stable;
- rollback/withdrawal is possible;
- analytics collect only defined-purpose events;
- content feedback/triage exists;
- accessibility baseline is enforceable;
- privacy/security requirements for accounts are implemented;
- maintenance capacity is understood.

---

# 15. Immediate research/build sequence

1. Finish content-domain evidence gathering.
2. Build the full source/citation/content matrix.
3. Run learner and practitioner research in parallel.
4. Synthesize curriculum/product architecture.
5. Design backend around validated roles/events/records.
6. Implement versioning and controlled release mechanics.
7. Pilot with small cohorts.
8. Create a release-ready content buffer.
9. Set the first real release calendar from measured capacity and demand.
10. Continue research and infrastructure work while releases proceed on the selected cadence.

**Current conclusion:** A timed course-release program should be an **operating system built on evidence readiness and version control**, not a marketing calendar that dictates when research must be finished.
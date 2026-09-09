# The Crew Blueprint — V4 Instructional Media & Interaction Framework

Status: owner-review implementation standard

Issue: #65

## Purpose

The Crew Blueprint should not force every learning objective into the same text-card format. The delivery method should be chosen by the **kind of understanding the learner needs to build**.

This framework separates three things that must not be conflated:

1. **Instruction** — explains, shows, compares, or demonstrates.
2. **Practice interaction** — gives the learner low-stakes retrieval, recognition, sequencing, or decision practice during a lesson.
3. **Assessment** — evaluates recall and reasoning after a meaningful block of work, normally at the end of the course/session rather than after every lesson card.

Practice interactions do **not** count toward the course assessment score.

---

## Selection rule: use the smallest medium that actually teaches the objective

| Learner needs to… | Preferred delivery | Why |
|---|---|---|
| Understand a concept or mental model | concise explanatory text + simple visual when needed | Text is efficient when motion/physical recognition is not required. |
| Recognize real equipment, work areas, labels, or conditions | real production photo | Recognition transfers better from authentic visual context than from prose alone. |
| Identify parts or locations on equipment | annotated photo or labeled diagram | Removes ambiguity about which physical feature is being discussed. |
| Understand a signal, power, data, material, custody, or communication path | flow/process diagram | Relationships and dependencies are easier to see spatially. |
| Understand a sequence | step sequence / slideshow; short video when motion itself matters | Allows ordered progression without creating a wall of text. |
| Observe movement, timing, hand positioning, transformation, or changing system state | short explainer/demonstration video | Motion is the instructional variable. Still does not replace employer-authorized practical training where required. |
| Compare two or more systems, roles, connectors, documents, or contexts | comparison table / side-by-side visual | Makes differences explicit and scannable. |
| Practice recognition or retrieve a concept during a lesson | low-stakes multiple-choice / identify / reveal interaction | Adds retrieval without turning every lesson into an exam. |
| Practice a decision or escalation judgment | scenario-choice interaction | Lets the learner choose, then explains why a response is stronger or weaker. |
| Learn what changes between venue/festival/corporate/touring contexts | contextual photo set + Context Lab comparison | Shows variable conditions while preserving the transferable principle. |
| Demonstrate retained understanding after the lesson set | course-level assessment | Requires recall when the source material is no longer directly in front of the learner. |

---

# Reusable learning-block vocabulary

The course shell should support the following component types. These are presentation components, not separate courses.

## `explain`

**Use for:** concise concept explanation, definitions, reasoning models, work boundaries.

**HTML contract:**

```html
<section class="learning-block learning-block--explain" data-learning-block="explain">
  <h3>Why handoffs matter</h3>
  <p>...</p>
</section>
```

No JavaScript required.

---

## `field-photo`

**Use for:** authentic equipment/workplace recognition.

```html
<figure class="learning-block learning-block--photo" data-learning-block="field-photo">
  <img src="MEDIA_URL" alt="Descriptive alt text" loading="lazy" decoding="async">
  <figcaption>What the learner should notice in this image.</figcaption>
</figure>
```

Requirements:
- authentic or clearly identified illustrative image;
- descriptive alt text when the image conveys instructional content;
- caption explains the learning point, not merely the photograph;
- responsive dimensions reserved to reduce layout shift.

---

## `annotated-visual`

**Use for:** labels, parts, zones, callouts, equipment features.

Preferred implementation:
- a compressed image/SVG base;
- semantic caption/list of annotations outside the image;
- optional clickable hotspots as progressive enhancement.

The learner must still be able to understand the visual if JavaScript is unavailable.

---

## `flow-diagram`

**Use for:** source/path/control/destination, signal routing, logistics custody, process ownership, production handoffs.

Preferred implementation:
- authored SVG for crisp scaling;
- text labels remain real text where practical;
- arrows/paths must be explained in adjacent prose or caption;
- no engineering-level diagram should imply that a foundation course authorizes controlled work.

---

## `step-sequence`

**Use for:** ordered procedures or conceptual progression where each step can be inspected separately.

Interaction:
- Previous / Next;
- step indicator;
- keyboard operable;
- direct step selection if more than three steps;
- all content available in document order as a no-JS fallback.

Do not use a slideshow merely to make text look interactive.

---

## `video-explainer`

**Use only when:** motion, timing, changing state, or demonstration materially improves understanding.

Requirements:
- short, focused clip;
- captions/transcript;
- poster image;
- no autoplay with sound;
- controls remain available;
- compressed adaptive delivery where practical;
- the text lesson still states the key takeaway.

Video is not the default just because it is visually richer.

---

## `micro-practice`

**Use for:** one low-stakes recognition/retrieval question during a lesson.

Examples:
- multiple choice;
- choose the correct label;
- sequence 3–5 steps;
- reveal the next action;
- classify an observation vs assumption.

Rules:
- immediate explanation after response;
- retry permitted;
- no permanent score;
- does not mark the lesson complete;
- does not alter course-assessment results.

---

## `scenario-choice`

**Use for:** communication, escalation, handoff, boundary, troubleshooting, and work-priority judgments.

Pattern:

1. short realistic situation;
2. learner selects a response;
3. feedback explains the operational reasoning;
4. optionally show what information should be gathered next.

This is especially valuable where the learning objective is **judgment**, not factual recognition.

---

## `comparison`

**Use for:** department differences, connector families, document types, context differences, role/responsibility depth.

Implementation:
- semantic HTML table for data;
- stacked comparison cards for narrow screens when necessary;
- do not encode important differences by color alone.

---

## `boundary-callout`

**Use for:** role/scope/authorization distinction.

This remains a separate instructional component because The Crew Blueprint repeatedly needs to state where general literacy stops and employer/site/qualified-person authority begins.

It is informational, not a consent checkbox and not an assessment.

---

# Assessment placement

The default foundation-course rhythm is:

```text
Course
  → Lesson 1
  → Lesson 2
  → Lesson 3
  → Lesson 4
  → Lesson 5
  → Lesson 6 (where applicable)
  → Course quiz / assessment
  → Next course
```

A course may contain fewer or more lessons, but **assessment is attached to the learning session/course**, not to every section or content card.

The assessment should:
- require retrieval when the relevant paragraph is not simultaneously visible;
- sample across the lesson set;
- emphasize transfer and reasoning, not trivia;
- permit retry/mastery;
- keep knowledge completion separate from employer authorization or practical qualification.

---

# Course-author decision workflow

For each learning objective, answer these questions in order:

1. **What must the learner be able to do mentally after this block?**
   - recognize;
   - explain;
   - compare;
   - trace;
   - sequence;
   - choose;
   - recall;
   - physically perform under appropriate supervision.

2. **Does the objective depend on seeing real physical context?**
   - yes → field photo / annotated photo;
   - no → text or diagram may be enough.

3. **Does the objective depend on relationships or flow?**
   - yes → diagram.

4. **Does the objective depend on motion or changing state?**
   - yes → short video or step sequence.

5. **Would retrieval practice help before the course assessment?**
   - yes → one micro-practice interaction after the explanation;
   - no → do not add interaction merely for engagement metrics.

6. **Is the learner being asked to demonstrate retained understanding?**
   - yes → put it in the course assessment, not a lesson checkbox.

---

# Technical implementation for GitHub Pages

The current site does not need a frontend framework to support these components.

## Layer 1 — semantic HTML

Every learning block has meaningful HTML content first. If JavaScript fails, the explanation/photo/caption/steps still exist.

## Layer 2 — CSS component system

Add a dedicated stylesheet such as:

```text
css/learning-components-v4.css
```

It owns:
- media frames;
- diagram wrappers;
- step sequence controls;
- practice-question states;
- scenario feedback;
- comparison layouts;
- captions;
- responsive behavior.

## Layer 3 — progressive JavaScript

Add:

```text
js/learning-components-v4.js
```

It enhances only components that need behavior:
- slides/steps;
- hotspots;
- practice questions;
- scenario choices;
- reveal interactions.

Course navigation, lesson completion, and course assessment remain in the learner-dashboard layer rather than being mixed into individual media components.

---

# Media delivery architecture

Do not bloat the public Git repository with a large photo/video library.

Recommended separation:

```text
GitHub Pages
  → HTML / CSS / JS / small UI assets

Crew Blueprint media storage
  → original/approved instructional images
  → optimized WebP/AVIF derivatives
  → diagrams/SVG
  → video/poster/transcript assets

CDN
  → public read delivery with long-lived cache headers
```

The media namespace should be **Crew Blueprint-owned**, not coupled to an unrelated company/product storage namespace.

Suggested object organization:

```text
crew-blueprint-media/
  courses/
    crew-ready/
      photos/
      diagrams/
      video/
    systems-thinking/
    shop-logistics/
    department-explorer/
  shared/
    equipment/
    environments/
    diagrams/
```

Do not place personal information, learner records, private research, or privileged account data in this public media store.

---

# Image rules

For every instructional image record:

- stable asset ID;
- course/lesson association;
- source/provenance;
- copyright/license status;
- alt text;
- caption/learning purpose;
- original dimensions;
- optimized derivative dimensions;
- review date when factual/contextual accuracy can age.

Use real photos where visual recognition matters. Use generated/illustrative diagrams where abstraction is more useful than realism. Never present a generated technical visual as a manufacturer drawing, site plan, engineering document, or factual photo.

---

# Video rules

Video should be uncommon and purposeful because it is expensive in bandwidth, production, accessibility work, and maintenance.

Use video when it teaches something a still image and text cannot efficiently communicate.

Every video requires:
- caption file or embedded captions;
- transcript;
- poster image;
- learning objective;
- duration target;
- provenance/rights record;
- no autoplay with audio.

---

# Accessibility baseline

All interactive learning blocks must:

- work by keyboard;
- expose labels/states to assistive technology;
- preserve visible focus;
- avoid color-only meaning;
- respect reduced-motion preferences;
- provide captions/transcripts for video;
- provide text equivalents for instructional visual meaning;
- retain usable content when JavaScript enhancement is unavailable.

---

# Analytics/state boundaries

The system may record useful learner state such as:

```text
lesson viewed
lesson completed
micro-practice attempted
course assessment attempted
assessment best score
assessment passed
```

It should **not** treat a click on a slideshow, photo, diagram, or practice question as proof of mastery.

A micro-practice result should normally remain low-stakes and separate from the course assessment.

---

# Initial component priority

Implement in this order:

1. `field-photo`
2. `annotated-visual`
3. `flow-diagram`
4. `comparison`
5. `step-sequence`
6. `micro-practice`
7. `scenario-choice`
8. `video-explainer`

This gives the current four foundation courses useful visual/interactive variety before taking on the heavier video pipeline.

---

# First-course application examples

## Crew Ready
- show-flow diagram: load-in → build → check → show → strike → closeout;
- real photo: organized case/staging area with what to notice;
- scenario-choice: ambiguous assignment and best clarification response;
- annotated photo: case labels / destination markings / safe staging cues.

## Systems Thinking
- flow diagram: source → path → control → destination → verification;
- diagram: upstream/downstream dependencies;
- micro-practice: observation vs assumption;
- scenario-choice: strong troubleshooting escalation.

## Shop, Warehouse & Logistics
- photo series: receiving → staging → prep → truck → return;
- annotated warehouse image: aisle, staging, unresolved/discrepancy zone;
- custody-flow diagram;
- comparison: staged vs ready inventory vs discrepancy hold.

## Department Explorer
- department comparison matrix;
- photo carousel showing representative work environments/gear by lane;
- interactive pathway selector;
- Context Lab links showing what changes across venue/festival/corporate/touring work.

---

# Definition of done for a media-enhanced lesson

A lesson is ready when:

- each block has a stated learning purpose;
- the selected medium is justified by that purpose;
- visuals have provenance and accessibility text;
- practice interactions provide feedback and remain ungraded;
- the lesson completion control belongs to the course shell, not the content block;
- assessment questions live at the end of the course/session;
- media is optimized and externally deliverable without inflating the GitHub Pages bundle;
- safety/authorization boundaries remain accurate where relevant.

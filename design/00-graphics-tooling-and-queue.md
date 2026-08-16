# 00 — Graphics Tooling Recommendation and Design Queue

**Created 2026-08-16.** Companion to the course-catalog visual-retention
review (see `10_content_research_queue.md` in the 50yearroadmap repo for
the full audit this queue is based on). This doc has two parts: (1) which
tool to actually use for this kind of graphic, and why; (2) a prioritized,
copy-paste-ready prompt queue.

---

## Part 1 — Tool recommendation

**Short answer: don't reach for DALL-E-style image generation as the
primary tool here. Almost everything on this queue is a technical/
structural diagram, not illustrative art, and diffusion image models are
specifically weak at the thing these need most — precise, readable text
labels and exact structural logic (arrows that go to the right place, a
scale that reads top-to-bottom correctly). That's a well-known failure
mode, not a style preference.**

Three different tools for three different jobs on this queue:

### 1. Flowcharts, chains, hierarchies, and comparison diagrams → "Diagrams: Show Me" (GPT Store)

This is a real, widely-used custom GPT built specifically for turning a
text description into a diagram — flowcharts, sequence diagrams, mind
maps, org charts, comparison layouts. It generates from diagram-as-code
(Mermaid and similar engines) rather than pixels, which is exactly why it
handles labeled, structured content accurately instead of garbling text
or misplacing arrows the way image generators do.

**Add it in ChatGPT:** Explore GPTs → search "Diagrams: Show Me" → open
it and start prompting directly, no separate install step. If it's ever
unavailable or renamed, search the GPT Store for "diagram," "flowchart,"
or "mermaid" — several equivalents exist; the important property to look
for is that it generates from a diagram-description engine (Mermaid,
Graphviz, etc.), not raw pixel generation.

**Output format to request every time:** ask for **SVG**, not PNG. SVG
stays crisp at any size and can be recolored to match the site's palette
(Part 2 below) without regenerating the image.

**This covers:** every flowchart, sequence, load-path, signal-chain,
crew-hierarchy, and comparison-table item in the queue below.

### 2. PPE, tools, and gear icons → a free icon library, not AI generation at all

Don't prompt-generate these one at a time — pull them from an existing,
consistently-styled, already-licensed icon set. This is literally what
the site already does successfully: the hand-signal icons on "Field
Tools for Real Calls" are Twemoji (CC-BY 4.0), not AI-generated.

**Recommended sets (both free, both MIT-licensed, both huge):**
- **Lucide Icons** (lucide.dev) — clean line-icon style, closest visual
  match to the site's minimal aesthetic.
- **Phosphor Icons** (phosphoricons.com) — similar style, wider glyph
  coverage (has dedicated hard-hat, boot, glove-adjacent icons Lucide
  may not).

Search each site directly (both have a live search box), download the
SVG, drop it in `images/`, same pattern as the existing signal icons.
Faster than prompting, and guarantees every icon looks like it belongs
to the same family — AI-generating icons one prompt at a time tends to
drift in style between generations.

### 3. Custom labeled illustrations (road case anatomy, stage floor plan) → direct SVG-code prompting

For the couple of items that need a specific, accurate illustration
rather than a generic flowchart or icon (the road case with labeled
parts, the stage floor-plan diagram), the most reliable path is asking
ChatGPT or Claude directly to **write SVG markup** rather than generate
an image. This gives exact control over label placement and geometry,
produces something that's actually editable code (not a locked image
file), and matches how the rest of this site is built — no image assets,
just code. Claude can do this work directly in this repo, too, if you'd
rather it stay in-house for the couple of items that need it — flagged
per item below.

---

## Part 2 — Design system reference (paste this into every prompt)

Every graphic needs to work on a dark background and match the site's
existing palette. Include this block (or a summary of it) in prompts so
output doesn't come back in a mismatched style:

```
Dark theme, deep near-black background (#050708 or #0d1117).
Primary accent: gold/amber (#f5b400), with a brighter gold (#ffd45a)
for emphasis or hover states.
Body text: off-white (#f4f6f8). Secondary/muted text: light gray-blue
(#b8c1cc).
Borders and dividers: subtle, low-opacity white (rgba(255,255,255,0.12)).
Style: clean, minimal, technical/industrial — not playful, not
cartoonish. Line-art or flat-fill only, no gradients, no drop shadows,
no photorealism.
Output as SVG, not a raster image.
```

---

## Part 3 — The queue

Ordered by priority, matching the retention-value assessment already
done. Each item names its file, its tool (per Part 1), and a ready
prompt.

### Tier 1 — High value, source-recommended or clear comprehension gap

**1. Module 4 (`module-4-venue-and-jobsite-awareness.html`) — stage/house direction floor plan**
Tool: Custom SVG (direct prompt — geometric/spatial, not a flowchart)
```
Draw a simple top-down theatrical stage floor plan as SVG. Show a
rectangular stage area with a performer silhouette (simple icon, facing
"down" toward the audience) and an audience area below it (simple rows
of dots or a fan shape). Label, from the performer's point of view:
"Stage Left" on the performer's left side, "Stage Right" on the
performer's right side, "Upstage" at the back (away from audience),
"Downstage" at the front (toward audience), "Center Stage" in the
middle. Then, mirrored on the audience side, label "House Left" and
"House Right" from the audience's point of view, with a light connecting
line or annotation showing that Stage Left = House Right and Stage Right
= House Left, since they face each other. Use [design system palette
from Part 2]. Keep it simple and diagrammatic, not illustrative.
```

**2. Lighting Course 2 (`pathway-lighting-02-production-flow.html` + relevant lessons) — three diagrams**
Tool: Diagrams: Show Me
```
Create a horizontal flowchart diagram with 8 stages connected by
arrows, left to right: "Creative Intent" → "Technical Design" →
"Documentation" → "Installation" → "Testing" → "Programming" →
"Live Operation" → "Load-Out". Clean, minimal, single-line style.
Export as SVG.
```
```
Create a signal-flow diagram, left to right: "LD/Operator" →
"Lighting Console" → "Ethernet Switch or Fiber" → "Gateway/DMX Node" →
"DMX Line" → "Fixtures, Dimmers, Relays". Simple boxes connected by
arrows, one direction only. Export as SVG.
```
```
Create a load-path diagram, top to bottom (like a suspension chain):
"Fixture" → "Clamp" → "Truss" → "Suspension Hardware" → "Hoist" →
"Rigging Point" → "Building/Temporary Structure". Vertical flow,
simple boxes and arrows. Export as SVG.
```

**3. Video Course 2 (`pathway-video-02-led-video-systems.html` + relevant lessons) — four diagrams**
Tool: Diagrams: Show Me
```
Create a signal-flow diagram, left to right: "Source/Media Server" →
"Switcher/Router" → "LED Processor" → "Copper or Fiber Transport" →
"Receiving Cards" → "Driver Electronics" → "Physical Pixels". Simple
boxes and arrows, single direction. Export as SVG.
```
```
Create a load-path diagram, top to bottom: "LED Cabinet" →
"Cabinet Locks/Frame" → "Flying Bar or Support Frame" →
"Truss/Hoist/Tower/Base" → "Venue Structure or Ground" →
"Foundation/Slab/Soil". Vertical flow. Export as SVG.
```
```
Create a simple two-column side-by-side comparison diagram:
"Ground-Supported Wall" (icon: structure resting on ground with a base/
ballast) vs. "Flown Wall" (icon: structure suspended from an overhead
point with a hoist). Label each with 2-3 key words (Ground-Supported:
"ballast, bearing capacity, floor loading" / Flown: "pick points,
hoist capacity, load calculations"). Export as SVG.
```
```
Create a simple comparison chart/table graphic, two columns: "Indoor /
Corporate or Arena" vs. "Outdoor / Festival or Stadium", with icon rows
for: Brightness priority, Pixel pitch, Weather exposure, Power source,
Rigging. Keep entries to 2-4 words each, referencing: indoor =
moderate brightness/finer pitch/limited weather/building power/venue
rigging; outdoor = high brightness/coarser pitch/wind+rain/generators/
temporary structure. Export as SVG.
```

**4. Backline/Props/Wardrobe Course 1 (`pathway-backline-props-wardrobe-01-support.html`) — ownership sensitivity scale**
Tool: Diagrams: Show Me
```
Create a vertical scale/ladder diagram with 4 levels, bottom to top,
each level getting visually "more sensitive" (e.g., color intensifying
from muted to bright gold, or an increasing border weight): Level 1
(bottom) "General Production Item" — freely movable. Level 2
"Department-Owned Gear" — move under direction. Level 3 "Show-Critical
Preset" — ask before moving. Level 4 (top) "Performer-Owned Item" —
explicit permission required every time. Include a small annotation on
the side: "Higher = more explicit direction required before touching."
Export as SVG.
```

### Tier 2 — Medium value, worth doing after Tier 1

**5. Module 8 (`module-8-tools-gear-and-handling-basics.html`) — road case anatomy + hazard diagram**
Tool: Custom SVG (direct prompt to Claude/ChatGPT — needs precise labeled illustration)
```
Draw a simple labeled line-art illustration of a road case (flight
case) in SVG, as a rectangular box on wheels. Label the following parts
with leader lines: lid, latches (2-3 along the edge), hinges (back
edge), handles (sides), casters/wheels (bottom corners), brakes (on
one or two casters), a corner protector (one corner), and a label/
placard area (front face). Keep the case itself simple and geometric —
this is a diagram, not a product render. [design system palette from
Part 2]
```
```
Create a simple 3-panel illustration showing three hazard concepts side
by side, each as its own small diagram: (1) "Pinch Point" — two case
edges close together with a small warning mark between them, (2)
"Crush Point" — a larger object (case or truss section) positioned
above/beside a person silhouette with a warning mark, (3) "Stored
Energy" — a rolling case on a slight incline with a motion arrow and
warning mark, suggesting it could gain speed. Label each panel clearly.
[design system palette from Part 2]
```

**6. Module 2 (`module-2-safety-mindset-before-skillset.html`) — hazard/risk/unsafe-behavior flow**
Tool: Diagrams: Show Me
```
Create a simple 3-step flow diagram: "Hazard" (a potential for harm
that exists on its own) → "Risk" (how likely and how severe if it
meets a person) → "Unsafe Behavior" (the choice that turns a hazard
into an actual injury). Show it as a left-to-right chain with a short
description under each box. Export as SVG.
```

**7. Module 3 (`module-3-ppe-clothing-and-what-to-bring.html`) — PPE icon row**
Tool: Icon library (Lucide or Phosphor), not AI generation
```
Pull icons for: hard hat, safety/work gloves, high-visibility vest,
safety glasses/eye protection, ear protection/earplugs. Arrange as a
horizontal row, each icon with its label underneath, matching the PPE
table already on the page (gloves, hard hat, high-vis vest, eye
protection, hearing protection).
```

**8. Module 5 / Module 9 (`module-5-load-in-fundamentals.html` / `module-9-load-out-fundamentals.html`) — unload/strike sequence diagrams**
Tool: Diagrams: Show Me
```
Create a horizontal sequence diagram, left to right, numbered 1-7:
"Cases" → "Carts" → "Decks" → "Truss" → "Barricade" → "Cable Trunks"
→ "Department Gear". Add a caption: "Unload order matters — don't
change the sequence without direction." Export as SVG.
```
```
Create the same style horizontal sequence diagram but reversed/adapted
for load-out strike order, emphasizing that some items can't move until
another department clears them first — use a similar numbered chain
format with a note: "Strike order isn't random — some gear can't move
until another department finishes." Export as SVG.
```

**9. Module 10 (`module-10-getting-hired-getting-called-back-and-growing.html`) — where work comes from**
Tool: Diagrams: Show Me
```
Create a simple diagram with 5 separate paths converging into one
destination: "Labor Companies", "Venues (Direct)", "Unions", "Referrals",
"Staffing Apps" — all five as separate boxes on the left, each with an
arrow converging to a single box on the right labeled "You, Working a
Call". Export as SVG.
```

**10. Lighting/Staging-Carpentry/Audio/Video Course 1 pages — can-do/can't-do split**
Tool: Diagrams: Show Me (one prompt per page, same template)
```
Create a simple two-column visual split: left column headed "You Can
Help With" (green/positive accent) listing [3-4 short items from that
page's "What You Can Help With" section], right column headed "Stays
Off-Limits" (red/warning accent, but keep it within the site's dark
gold/amber palette rather than true red — use the warning tone
consistently) listing [3-4 short items from that page's "Off-Limits"
section]. Export as SVG.
```
*(Run this once per Course 1 page — Lighting, Video, Audio, Staging &
Carpentry — pulling the actual 3-4 items from each page's existing
"What You Can Help With" / "Off-Limits" sections.)*

### Tier 3 — Site-wide, lower priority

**11. Gear & Tools resource page (`resources/gear-and-tools.html`) — icon set**
Tool: Icon library (Lucide or Phosphor), not AI generation
```
Pull icons for each "Bring This on Day One" item: boots, clothing/
shirt (all-black), work gloves, multitool, wrench (adjustable/
crescent), earplugs/ear protection, backpack/bag. Same treatment for
"Worth Adding as You Keep Working": water bottle, sun/sunscreen,
phone charger, cash/wallet, tool belt, flashlight/headlamp. One icon
per existing card, placed above or beside the existing heading.
```

**12. Load-In/Load-Out Reference (`resources/load-in-load-out-reference.html`) — icon set**
Tool: Icon library (Lucide or Phosphor)
```
Lower priority than #11 — same treatment if pursued: small icons next
to each checklist item in the Load-In and Load-Out columns.
```

**13. Homepage hero (`index.html`) — marketing visual**
Tool: Diagrams: Show Me, or skip
```
Optional. Create a simple horizontal icon-strip: "Load-In" → "Show
Call" → "Load-Out" as three icon+label pairs, echoing Module 1's
phase framing, to sit in or near the hero section. This is marketing
polish, not a comprehension gap — lowest priority item on this whole
queue.
```

---

## Workflow

1. Run Tier 1 items through "Diagrams: Show Me" (or direct SVG prompting
   for the two custom-illustration items), pasting the design-system
   block from Part 2 into each session once so it doesn't need repeating
   every prompt.
2. Download each result as SVG, drop into `images/diagrams/` (new
   folder, doesn't exist yet — create it).
3. Hand the SVGs back to Claude to embed into the actual lesson pages at
   the right spot, sized and positioned to match the site's existing
   panel/section styling, then link-check and ship the same way every
   other build this session has gone out.
4. Repeat for Tier 2, then Tier 3, in priority order — no need to do
   this all in one pass.

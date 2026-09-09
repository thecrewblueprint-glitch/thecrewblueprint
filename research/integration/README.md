# Crew Blueprint Integration Map

**Date:** 2026-09-09  
**Status:** Structural proposed state carried in PR #57.  
**Authority:** These artifacts do not replace the canonical Crew Blueprint matrix, Production Atlas, Roadmapdev, or 50yearroadmap.

## Purpose

This directory is the join layer between:

- the frozen V2 knowledge/course corpus;
- the frozen clean-sheet learner-experience reference;
- the restored V4 live presentation;
- the normalized Crew Blueprint research/evidence matrix;
- Roadmapdev's normalized U.S.-48 role/competency demand signals;
- Production Atlas work/career routes;
- regulatory, standards, manufacturer, credential, practitioner, review, and MEDIA provenance;
- the data shape required by learner-facing web clients.

The goal is **one evidence-backed knowledge graph with multiple learner-facing journeys**, not another competing course catalog.

## Artifacts

1. `version-crosswalk-v2-v4-clean-sheet-2026-09-09.json`
   - pins exact V2, clean-sheet, and restored V4 refs;
   - assigns each version an explicit role;
   - prevents UI versions from becoming competing knowledge authorities.

2. `job-demand-curriculum-bridge-2026-09-09.json`
   - joins all 21 normalized Roadmapdev demand domains to Crew Blueprint learning homes;
   - marks every employment signal as `planning_evidence_only`;
   - keeps volatile employers, openings, pay, markets, local/IATSE routing, and worker records in Production Atlas/private analysis.

3. `source-citation-regulatory-provenance-2026-09-09.json`
   - separates regulation, agency guidance, consensus standards, manufacturer documentation, credential bodies, technical references, local practice, practitioner evidence, market demand, and Crew Blueprint internal policy;
   - defines support, freshness, jurisdiction, copyright, and high-safety publication gates;
   - records targeted official-source freshness checks performed on 2026-09-09.

4. `web-client-content-contract-2026-09-09.json`
   - defines the normalized payload that Home/Start/Learn/Field/Departments/Contexts/Grow/Advanced/Sources/Find Work clients should consume;
   - makes evidence, authority, lineage, MEDIA, accessibility, and Atlas-link states first-class;
   - identifies current V4 projection debt that must not be mistaken for canonical source truth.

5. `sitewide-instructional-media-map-2026-09-09.json`
   - applies `docs/INSTRUCTIONAL_MEDIA_FRAMEWORK_V4.md` sitewide;
   - maps learner surfaces and domain families to justified media types;
   - preserves external qualification gates and prohibits procedural instructional visuals for controlled specialties.

6. `knowledge-base-system-map-2026-09-09.json`
   - records the overall node/edge model, repository authorities, strict semantic separations, release invariants, current debt, and next build outputs.

## Controlling evidence path

```text
industry/work evidence
  -> Roadmapdev normalized demand signal
  -> Crew Blueprint curriculum priority
  -> independent instructional evidence
  -> canonical claim/content/competency graph
  -> evidence + authority + freshness + MEDIA gates
  -> learner-facing web projection
```

Production Atlas remains a separate public product. Crew Blueprint links to stable Atlas routes; it does not absorb Atlas's volatile data.

## Version interpretation

```text
V2            = deep historical knowledge/evidence corpus reference
Clean-sheet   = learner interaction / IA reference
V4 main       = current restored presentation frontier
Matrix        = normalized evidence/control plane
PR #57 map    = proposed 143-ID career-guided primary placement
```

None of the three UI versions is the entire knowledge source.

## Safety and authority rule

A learner-facing page must never infer authority from course depth or completion. Rigging, production power/electrical, automation, special effects, work-at-height, structural acceptance, controlled machinery, and similar specialist domains remain awareness/system-literacy unless the applicable external training, qualification, employer/site authorization, law, manufacturer requirements, and review state support something more.

## Publication rule for unsupported content

The generated matrix `unsupported` view currently includes many high-safety boundaries. They require a split:

- **Crew Blueprint internal policy boundary:** may be authoritative as product policy, such as “this course does not grant authorization,” but must not be presented as an external legal requirement.
- **External factual/legal/technical claim:** remains partial/blocked until the required primary or qualified evidence edge exists.

Conservative wording is not the same thing as source completeness.

## Client rule

The final web client should consume a **generated projection** of the canonical graph. Hand-maintained V4 objects such as `content.js` `sourceGroups` may remain temporary presentation data, but they are not final provenance authority.

## Historical retention

Frozen V2 and frozen clean-sheet references remain immutable. Existing archive retention remains in force. A merge/split/hide decision changes presentation, not the existence of the lineage identity or materially distinct historical content.

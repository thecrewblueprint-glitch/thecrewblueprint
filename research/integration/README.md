# Crew Blueprint Integration Map

**Date:** 2026-09-09  
**Status:** PR #57 structural state accepted and merged; successor projection build phase active.  
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

7. `v4-clean-sheet-to-v2-content-crosswalk-2026-09-09.json`
   - maps every major restored V4 learner surface and frozen clean-sheet program back to preserved V2 course/content identities;
   - identifies cases where a successor surface is a many-to-many synthesis rather than a new canonical course;
   - keeps shared foundations, Field Skills, contexts, work/career resources, advanced nodes, and controlled specialties inside their correct lineage/authority treatment.

8. `production-atlas-link-registry-2026-09-09.json`
   - replaces hard-coded repository/branch routing with stable Production Atlas route IDs and custom-domain URLs;
   - pins the compatibility check to the accepted `research-version` state used during generation;
   - carries only route/purpose metadata, never volatile employer/opening/pay/application data.

The PR #57 integration artifacts remain registered in `research/agent-retrieval-manifest.json`. The successor generator consumes those accepted contracts directly; the Atlas registry is the new cross-product routing input for the build phase.

## Generated successor projection

`scripts/generate-successor-projections.mjs` deterministically derives build/runtime views from accepted graph state. It does not create a second source of truth.

Internal/audit outputs are written under `research/generated/`:

```text
learner-path-edges.jsonl
production-atlas-link-registry.json
instructional-media-backlog.jsonl
source-gap-closure-queue.jsonl
internal-policy-boundaries.jsonl
```

These files remain outside the public Pages artifact.

Sanitized client outputs are written under `data/generated/`:

```text
web-client-projection.json
learner-path-edges.json
production-atlas-links.json
```

The Pages workflow generates these files before packaging the static site. The public projection may contain canonical course/navigation identity, evidence summaries, public source metadata, qualification boundaries, media state, and stable Atlas routes. It must not contain private Roadmapdev records, personal information, or copied volatile Atlas work data.

`scripts/validate-successor-projections.mjs` protects the accepted invariants, including:

- 143/143 canonical identities remain projected exactly once;
- the six independent initial lanes remain intact;
- Stagehand is not made a universal prerequisite;
- all 18 Field Skills remain a first-class library;
- generated learner relationships remain recommendations/branches rather than invented hard prerequisites;
- Atlas links use the stable custom domain;
- public projection does not leak private Roadmapdev pointers or personal-data semantics;
- internal-policy boundaries stay separate from external source gaps;
- controlled-specialty media remains review-gated and non-procedural by default.

## Controlling evidence path

```text
industry/work evidence
  -> Roadmapdev normalized demand signal
  -> Crew Blueprint curriculum priority
  -> independent instructional evidence
  -> canonical claim/content/competency graph
  -> evidence + authority + freshness + MEDIA gates
  -> generated learner-path/web projection
  -> learner-facing client
```

Production Atlas remains a separate public product. Crew Blueprint links to stable Atlas routes; it does not absorb Atlas's volatile data.

## Version interpretation

```text
V2            = deep historical knowledge/evidence corpus reference
Clean-sheet   = learner interaction / IA reference
V4 main       = current restored presentation frontier
Matrix        = normalized evidence/control plane
PR #57 map    = accepted 143-ID career-guided primary placement
Projection    = generated, non-authoritative client/audit view
```

None of the three UI versions is the entire knowledge source, and generated projection files do not become canonical graph authority.

## Safety and authority rule

A learner-facing page must never infer authority from course depth or completion. Rigging, production power/electrical, automation, special effects, work-at-height, structural acceptance, controlled machinery, and similar specialist domains remain awareness/system-literacy unless the applicable external training, qualification, employer/site authorization, law, manufacturer requirements, and review state support something more.

## Publication rule for unsupported content

The generated source-gap process explicitly separates two states:

- **Crew Blueprint internal policy boundary:** may be authoritative as product policy, such as “this course does not grant authorization,” but must not be presented as an external legal requirement.
- **External factual/legal/technical claim:** remains partial/blocked until the required primary or qualified evidence edge exists.

Conservative wording is not the same thing as source completeness.

## Client rule

The final web client should consume the **generated projection** of the canonical graph. Hand-maintained V4 objects such as `content.js` `sourceGroups` may remain temporary presentation data, but they are not final provenance authority.

## Historical retention

Frozen V2 and frozen clean-sheet references remain immutable. Existing archive retention remains in force. A merge/split/hide decision changes presentation, not the existence of the lineage identity or materially distinct historical content.

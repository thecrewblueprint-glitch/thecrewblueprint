# Source Freshness Watchlist

**Prepared:** 2026-08-31  
**Purpose:** Identify external sources whose changes can invalidate curriculum language even when the repo itself does not change.

| Source family | Why watch | Suggested cadence | Trigger |
|---|---|---|---|
| OSHA regulations/directives/NEPs | Safety/workplace rules and enforcement priorities | Monthly + before related release | revised standard/directive/interpretation |
| U.S. DOL Wage and Hour | worker classification, wage/time guidance | Monthly | rulemaking/final rule/FAB change |
| IRS worker classification/business tax | contractor/employee and reporting guidance | Quarterly | publication/form/guidance revision |
| DOJ ADA | web/public accommodation/accessibility guidance | Quarterly | regulation/guidance update |
| EEOC | discrimination/retaliation/accommodation guidance | Quarterly | guidance/regulatory update |
| FCC | wireless/RF rules | Quarterly | rule/band/licensing change |
| ESTA / ANSI E1 | entertainment technology standards | Quarterly | new/reaffirmed/revised standard |
| ETCP | credential eligibility/scope | Quarterly | handbook/scope/credential change |
| AVIXA / AES / SMPTE | technical standards and training ecosystems | Quarterly | standard revision |
| Manufacturer docs | model-specific handling/config/service boundaries | Per product release + annual | manual/firmware/safety bulletin change |
| CISA basic cyber guidance | production-network hygiene framing | Quarterly | guidance update |

## Current high-change items

- DOL employee/independent-contractor rulemaking is active in 2026.
- OSHA updated the Warehousing and Distribution Center NEP effective July 31, 2026.
- OSHA updated its heat National Emphasis Program in April 2026.
- entertainment/network standards should retain edition/version metadata rather than evergreen wording.

## Required response to a source change

1. mark impacted source as review-needed;
2. identify linked claims/courses via matrix edges;
3. classify change as no-impact / wording / assessment / authority / urgent safety;
4. revise source record and affected content;
5. rerun matrix and course validation;
6. record date/reviewer in release log.

A source update should not silently rewrite historical completion records; versioned completion and current content are separate states.
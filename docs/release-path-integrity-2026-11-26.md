# Release artifact path integrity — 2026-11-26

Review-only changes in PR #120. Existing public/free delivery policy remains unchanged. Path validation now rejects noncanonical learner routes, traversal beyond checkout root, ambiguous encoded paths, hidden paths and unapproved local dependencies. Active assets and generated data must be explicitly listed; referenced raster images remain eligible under images/. This is a path/type policy, not evidence that any particular image is public or that HTML/JS is safe. Existing regex dependency extraction is not a complete browser parser. Native full build must confirm actual route/asset compatibility; previously permitted SVG, additional scripts/styles and arbitrary other files now fail closed until reviewed.

The builder checks source components for symlinks, checks realpath containment and regular single-link files, validates projection input directories before cleanup, requires nonempty projection records and removes partial/stale output and manifest on detected failures. This assumes a trusted, stable checkout; it is not a race-safe filesystem sandbox against concurrent hostile mutation. Existing free projection and nonfree-route validation still required. No claim that static public files enforce membership or that a server authorization boundary is deployed.

Direct verification at bbd383be4d24f0a8f57c249b3c9883d1da1c4dbe: 25/25 synthetic test callbacks using exact committed source in adapted V8 harness; six structural integration checks passed, builder parsed after import adaptation. Module c3e21423786cb521e5d72b00639e214054e2de83; tests 64a1b107932ec85ac9d915cd6e71bac6c918a193; builder b7320ce6fcb566d2a48dbba53f221259c0683932; workflow 3fd284f8631d5f04ee21bba59fa2cca70f1fa45d. No native Node filesystem build, generated projection or real release artifact inspected in this turn. The existing workflow runs the new unit test before artifact construction; no trigger changes or workflow dispatch. Full isolated build, actual artifact inventory, auth negative tests, accessibility and independent practitioner/release review remain required. No deployment, main merge or paid content publication.

## Follow-up: exact projection and builder integration

Shared pure projection policy extracts the existing generator's output mapping. Generator, validator and builder now require the exact canonical allowlisted projection, including identical serialized key order, unique course/source identifiers, nonempty allowed records and an actual nonfree remainder. Rejects altered routes/access/URLs, arbitrary top-level/nested metadata, missing/extra/duplicate identities and unlocked Atlas flags. Exact mapping does not itself establish the public authorization of fields already present in canonical input or sanitize arbitrary nested values in those fields; canonical corpus/schema validation remains a prerequisite.

Exact committed source and test callbacks: 18/18 projection tests passed in adapted V8, repeated after commit. Actual builder logic executed against a simulated filesystem: 11/11 positive and denial/cleanup cases passed, including tampered/malformed projection, missing dependency, unexpected JS/data, symbolic/hard links, locked-route link, root-relative image and encoded traversal. Nine failure paths removed stale/partial artifacts; two positive paths succeeded. A real Node temporary-checkout integration suite reproducing those cases is committed and wired before artifact construction; native filesystem execution and full actual corpus generation/build are still pending. No workflow dispatch or deployment. The shared projector is a conservative exact representation check, not a new release grant.

- scripts/free-client-projection-policy.mjs: 7440c019e5c49340cc44e48cb8b4b7e1f5bde3a2
- scripts/test-free-client-projection-policy.mjs: e83ac707e9785e19acf914778785f9b5ab893cac
- scripts/build-free-release-artifact.mjs: 7c104ad194fd81025434a55ac2e23cb23f1ca9d4
- scripts/test-free-release-build-integration.mjs: cd71ddb91dbf553b4de190a88ed6261c36e2e008
- .github/workflows/deploy-pages-v4.yml: 09e099b6327a01994d3fc7bce3b2f600c1244c68

## CL13 focused release blocker remediation

The seven shared dependencies were located by inspecting references in the pinned release pages; all seven source blobs match the accepted base returned by the connector. They are individually pinned and considered only when referenced. The field expansion catalog is refused unless every one of the twelve reviewed slugs has an eligible materialized route in the free projection. The legacy main.js navigation is transformed only in the built artifact to link to learn.html rather than the excluded full curriculum. No source content or access-state changes; this is not blanket approval to publish the catalog. Actual canonical corpus eligibility remains unverified because generated projections are not present in Git at this pin.

Projection fields now require bounded scalar/string-list/boolean types and source URL schemes; missing released source identities are refused. Builder checks represented nonfree route IDs even when unmaterialized and discovers unquoted attributes and static srcset references, rejects base/refresh and executable URI schemes; this is a conservative static scanner, not a complete browser parser. Nonfree route IDs omitted by the canonical generator still require independent inventory cross-check. No claim of full dynamic-JS coverage.

Exact candidate c2c0b6477759fef69bc8d2fad7e0993a4df9dd9a, local Node 22.16.0: node --test scripts/test-free-release-build-integration.mjs scripts/test-free-client-projection-policy.mjs, 45/45 passed, zero fail/skip/cancel. All five local Git blob hashes matched:
- builder 106523ba4898c09274dcb9ece12e2cd6e302f037
- release path policy e5ad893e2137b173a2250eec027893811d9c9ef7
- projection policy fd3093e96465d9ca50d8d93228cfdadeaa51d271
- build integration tests 218b50d9b5fc02949cc3d14c891c57b44272f526
- projection tests 775b35dd6d5e9b2a81b8d716428db6fa09175614

Native temporary-checkout synthetic tests passed, including added unquoted/script, srcset, refresh, executable URL, pin drift and unmaterialized locked alias denials. Full real corpus build, positive actual seven-asset admission, all existing validators, current-base integration and private access/device review remain open. Connector at predecessor reported mergeable=false while compare returned base as merge base, ahead 296/behind 0 and exactly 100 files; discrepancy must be resolved by actual Git checkout rather than a fabricated merge. No workflow activation, deployment or published content change.

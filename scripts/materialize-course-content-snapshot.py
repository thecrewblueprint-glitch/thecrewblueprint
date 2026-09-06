#!/usr/bin/env python3
"""Materialize verbatim course/content versions from all reachable repository history.

This script is archival only. It does not decide which material is current,
public, safe to publish, or approved. It preserves historical source bytes and
provenance so versions can be compared without Git branch/commit archaeology.
"""
from __future__ import annotations

import json
import shutil
import subprocess
from collections import defaultdict
from pathlib import Path
from urllib.parse import urlsplit

REPO = Path(__file__).resolve().parents[1]
SNAPSHOT_ID = "snapshot-2026-09-06-all-course-versions"
ROOT = REPO / "content" / "archive" / "verbatim" / SNAPSHOT_ID
SNAPSHOT_BRANCH = "archive/content-snapshot-all-versions-2026-09-06"
CANONICAL_INVENTORY = "research/matrix/course_inventory.jsonl"
EXPECTED_IDENTITIES = 143


def git(*args: str, binary: bool = False) -> bytes | str:
    cp = subprocess.run(
        ["git", *args], cwd=REPO, check=True,
        stdout=subprocess.PIPE, stderr=subprocess.PIPE,
    )
    return cp.stdout if binary else cp.stdout.decode("utf-8", errors="strict")


def physical_path(route: str | None) -> str | None:
    """Return repository file behind a logical route, stripping query/fragment."""
    if not route:
        return None
    return urlsplit(route).path


def commit_for(ref: str) -> str:
    return str(git("rev-parse", ref)).strip()


def tree_entries(ref: str) -> list[dict]:
    raw = git("ls-tree", "-r", "-z", ref, binary=True)
    out: list[dict] = []
    for record in raw.split(b"\0"):
        if not record:
            continue
        meta, path_b = record.split(b"\t", 1)
        mode_b, type_b, sha_b = meta.split(b" ", 2)
        out.append({
            "mode": mode_b.decode(),
            "type": type_b.decode(),
            "sha": sha_b.decode(),
            "path": path_b.decode("utf-8", errors="strict"),
        })
    return out


def should_snapshot(path: str) -> bool:
    if path.startswith("courses/"):
        return True
    if path.startswith("scripts/"):
        return True
    if path.startswith("visuals/"):
        return True
    if path.startswith("_includes/"):
        return True
    if path == CANONICAL_INVENTORY:
        return True
    if "/" not in path and path.endswith(".html"):
        name = path.lower()
        return "course" in name or name in {
            "index.html", "first-five-calls.html", "curriculum-map.html", "lms-dashboard.html"
        }
    return False


def safe_branch_parts(name: str) -> Path:
    return Path(*name.split("/"))


def load_inventory_from_main() -> list[dict]:
    raw = str(git("show", f"origin/main:{CANONICAL_INVENTORY}"))
    rows = [json.loads(line) for line in raw.splitlines() if line.strip()]
    ids = [row["course_id"] for row in rows]
    if len(rows) != EXPECTED_IDENTITIES:
        raise SystemExit(
            f"Refusing snapshot: expected {EXPECTED_IDENTITIES} canonical identities, found {len(rows)}"
        )
    if len(set(ids)) != EXPECTED_IDENTITIES:
        raise SystemExit("Refusing snapshot: duplicate course_id values in canonical inventory")
    return rows


def remote_branches() -> list[tuple[str, str]]:
    fmt = "%(refname:short)\t%(objectname)"
    raw = str(git("for-each-ref", f"--format={fmt}", "refs/remotes/origin"))
    branches: list[tuple[str, str]] = []
    for line in raw.splitlines():
        if not line.strip():
            continue
        ref, sha = line.split("\t", 1)
        if ref == "origin/HEAD":
            continue
        name = ref.removeprefix("origin/")
        if name == SNAPSHOT_BRANCH:
            # Never archive the branch containing the generated archive itself.
            continue
        branches.append((name, sha))
    return sorted(branches)


def tag_commits() -> list[tuple[str, str]]:
    raw = str(git("for-each-ref", "--format=%(refname:short)", "refs/tags"))
    out: list[tuple[str, str]] = []
    for tag in [x.strip() for x in raw.splitlines() if x.strip()]:
        cp = subprocess.run(
            ["git", "rev-parse", f"refs/tags/{tag}^{{commit}}"], cwd=REPO,
            stdout=subprocess.PIPE, stderr=subprocess.DEVNULL,
        )
        if cp.returncode == 0:
            out.append((tag, cp.stdout.decode().strip()))
    return sorted(out)


def reachable_commits(branches: list[tuple[str, str]], tags: list[tuple[str, str]]) -> list[str]:
    starts = sorted({sha for _, sha in branches} | {sha for _, sha in tags})
    if not starts:
        return []
    # Oldest-to-newest gives each path/blob version a deterministic earliest observed commit.
    raw = str(git("rev-list", "--topo-order", "--reverse", *starts))
    return [x.strip() for x in raw.splitlines() if x.strip()]


def write_blob(sha: str, dest: Path) -> None:
    dest.parent.mkdir(parents=True, exist_ok=True)
    dest.write_bytes(git("cat-file", "blob", sha, binary=True))


def optional_tree_sha(ref: str, path: str) -> str | None:
    cp = subprocess.run(
        ["git", "rev-parse", f"{ref}:{path}"], cwd=REPO,
        stdout=subprocess.PIPE, stderr=subprocess.DEVNULL,
    )
    return None if cp.returncode else cp.stdout.decode().strip()


def history_dest(path: str, blob_sha: str) -> Path:
    p = Path(path)
    # e.g. history/by-path/courses/foo.html.versions/<blob>/foo.html
    return ROOT / "history" / "by-path" / p.parent / f"{p.name}.versions" / blob_sha / p.name


def compact_history_record(r: dict) -> dict:
    return {
        "blob_sha": r["blob_sha"],
        "earliest_observed_commit": r["earliest_observed_commit"],
        "snapshot_path": r["snapshot_path"],
    }


def main() -> None:
    inventory = load_inventory_from_main()
    branches = remote_branches()
    tags = tag_commits()
    if not branches:
        raise SystemExit("No remote branches found; fetch all refs before running")

    if ROOT.exists():
        shutil.rmtree(ROOT)
    (ROOT / "branches").mkdir(parents=True, exist_ok=True)
    (ROOT / "history" / "by-path").mkdir(parents=True, exist_ok=True)
    (ROOT / "catalogs").mkdir(parents=True, exist_ok=True)

    inventory_bytes = git("show", f"origin/main:{CANONICAL_INVENTORY}", binary=True)
    (ROOT / "catalogs" / "course_inventory-main-143.jsonl").write_bytes(inventory_bytes)

    # ------------------------------------------------------------------
    # Layer 1: exact state at every live source branch tip.
    # ------------------------------------------------------------------
    file_manifest: list[dict] = []
    branch_summary: list[dict] = []
    path_versions: dict[str, list[dict]] = defaultdict(list)

    for branch_name, advertised_sha in branches:
        ref = f"origin/{branch_name}"
        commit_sha = commit_for(ref)
        if commit_sha != advertised_sha:
            raise SystemExit(f"Ref moved during snapshot: {branch_name}")
        entries = tree_entries(ref)
        selected = [e for e in entries if e["type"] == "blob" and should_snapshot(e["path"])]
        dest_root = ROOT / "branches" / safe_branch_parts(branch_name)
        for entry in selected:
            original = entry["path"]
            dest = dest_root / original
            write_blob(entry["sha"], dest)
            record = {
                "source_branch": branch_name,
                "source_commit": commit_sha,
                "original_path": original,
                "blob_sha": entry["sha"],
                "snapshot_path": dest.relative_to(REPO).as_posix(),
            }
            file_manifest.append(record)
            path_versions[original].append(record)
        route_set = {e["path"] for e in entries if e["type"] == "blob"}
        branch_summary.append({
            "branch": branch_name,
            "commit": commit_sha,
            "snapshot_file_count": len(selected),
            "canonical_143_logical_routes_resolved": sum(
                1 for row in inventory if physical_path(row.get("route_file")) in route_set
            ),
            "courses_tree_sha": optional_tree_sha(ref, "courses"),
            "scripts_tree_sha": optional_tree_sha(ref, "scripts"),
            "visuals_tree_sha": optional_tree_sha(ref, "visuals"),
            "index_blob_sha": optional_tree_sha(ref, "index.html"),
        })

    # ------------------------------------------------------------------
    # Layer 2: every distinct relevant path/blob version in all reachable
    # commit history (plus any tag-only history). This catches versions that
    # were overwritten before current branch tips.
    # ------------------------------------------------------------------
    commits = reachable_commits(branches, tags)
    history_versions: dict[tuple[str, str], dict] = {}
    history_path_versions: dict[str, list[dict]] = defaultdict(list)
    historical_paths: set[str] = set()

    for commit_sha in commits:
        for entry in tree_entries(commit_sha):
            if entry["type"] != "blob" or not should_snapshot(entry["path"]):
                continue
            path = entry["path"]
            blob = entry["sha"]
            historical_paths.add(path)
            key = (path, blob)
            if key in history_versions:
                continue
            dest = history_dest(path, blob)
            write_blob(blob, dest)
            record = {
                "original_path": path,
                "blob_sha": blob,
                "earliest_observed_commit": commit_sha,
                "snapshot_path": dest.relative_to(REPO).as_posix(),
            }
            history_versions[key] = record
            history_path_versions[path].append(record)

    # A branch-tip byte version must necessarily be represented by reachable history.
    missing_tip_versions = [
        f"{r['source_branch']}::{r['original_path']}::{r['blob_sha']}"
        for r in file_manifest
        if (r["original_path"], r["blob_sha"]) not in history_versions
    ]
    if missing_tip_versions:
        raise SystemExit(
            "Refusing snapshot: branch-tip versions absent from reachable-history archive:\n"
            + "\n".join(missing_tip_versions[:100])
        )

    # ------------------------------------------------------------------
    # Identity-level lineage: preserve logical route, physical route, branch
    # tip versions, all historical route versions, and source-data history.
    # ------------------------------------------------------------------
    identities: list[dict] = []
    missing_main_routes: list[str] = []
    for row in inventory:
        route = row.get("route_file")
        physical = physical_path(route)
        branch_versions = path_versions.get(physical, []) if physical else []
        main_versions = [v for v in branch_versions if v["source_branch"] == "main"]
        if physical and not main_versions:
            missing_main_routes.append(f"{row['course_id']}::{route} -> {physical}")
        source_data = row.get("source_data_file")
        route_history = history_path_versions.get(physical, []) if physical else []
        source_history = history_path_versions.get(source_data, []) if source_data else []
        identities.append({
            "course_id": row["course_id"],
            "title": row.get("title"),
            "registered_logical_route": route,
            "physical_route_file": physical,
            "source_data_file": source_data,
            "inventory_state_at_snapshot": row.get("inventory_state"),
            "publication_state_at_snapshot": row.get("publication_state"),
            "branch_tip_versions": [
                {
                    "source_branch": v["source_branch"],
                    "source_commit": v["source_commit"],
                    "blob_sha": v["blob_sha"],
                    "snapshot_path": v["snapshot_path"],
                } for v in branch_versions
            ],
            "reachable_history_route_versions": [compact_history_record(v) for v in route_history],
            "reachable_history_source_data_versions": [compact_history_record(v) for v in source_history],
            "unique_route_blob_versions": sorted({v["blob_sha"] for v in route_history}),
            "unique_source_data_blob_versions": sorted({v["blob_sha"] for v in source_history}),
        })
    if missing_main_routes:
        raise SystemExit(
            "Refusing snapshot: canonical physical route files missing on main:\n"
            + "\n".join(missing_main_routes)
        )

    registered_physical_routes = {
        physical_path(row.get("route_file")) for row in inventory if physical_path(row.get("route_file"))
    }

    branch_alternates = []
    for path, versions in sorted(path_versions.items()):
        if path.startswith("courses/") and path not in registered_physical_routes:
            branch_alternates.append({
                "path": path,
                "source_branches": sorted({v["source_branch"] for v in versions}),
                "unique_blob_versions": sorted({v["blob_sha"] for v in versions}),
                "versions": [
                    {
                        "source_branch": v["source_branch"],
                        "source_commit": v["source_commit"],
                        "blob_sha": v["blob_sha"],
                        "snapshot_path": v["snapshot_path"],
                    } for v in versions
                ],
            })

    history_alternates = []
    for path, versions in sorted(history_path_versions.items()):
        if path.startswith("courses/") and path not in registered_physical_routes:
            history_alternates.append({
                "path": path,
                "unique_blob_versions": sorted({v["blob_sha"] for v in versions}),
                "versions": [compact_history_record(v) for v in versions],
            })

    history_manifest = {
        "schema_version": "1.0.0",
        "scope": "all commits reachable from all live remote branches and fetched tags, excluding the generated snapshot branch itself",
        "reachable_commit_count": len(commits),
        "tag_count": len(tags),
        "historical_path_count": len(historical_paths),
        "historical_unique_path_blob_version_count": len(history_versions),
        "unique_blob_count": len({blob for _, blob in history_versions}),
        "versions": [history_versions[k] for k in sorted(history_versions)],
    }

    manifest = {
        "schema_version": "2.0.0",
        "snapshot_id": SNAPSHOT_ID,
        "snapshot_date": "2026-09-06",
        "purpose": "Permanent verbatim working-tree archive for side-by-side curriculum comparison and future reuse.",
        "authority": "reference_only_historical_evidence",
        "canonical_identity_count": EXPECTED_IDENTITIES,
        "source_branch_count": len(branches),
        "fetched_tag_count": len(tags),
        "branch_tip_snapshot_file_count": len(file_manifest),
        "branch_tip_unique_blob_count": len({r["blob_sha"] for r in file_manifest}),
        "reachable_history_commit_count": len(commits),
        "reachable_history_unique_path_blob_version_count": len(history_versions),
        "reachable_history_unique_blob_count": len({blob for _, blob in history_versions}),
        "logical_route_note": "Query-routed identities retain their full logical route while lineage points to the underlying physical repository file.",
        "rules": [
            "Snapshot presence does not make historical content current or publishable.",
            "Do not delete, squash, overwrite, or prune source history based on this archive.",
            "Future curriculum rewrites must preserve the prior accepted/source version before replacement.",
            "Historical hazardous-work detail remains subject to current safety and qualification boundaries before reuse.",
        ],
        "branch_tip_files": file_manifest,
    }

    (ROOT / "snapshot-manifest.json").write_text(json.dumps(manifest, indent=2) + "\n", encoding="utf-8")
    (ROOT / "branch-summary.json").write_text(json.dumps(branch_summary, indent=2) + "\n", encoding="utf-8")
    (ROOT / "history-version-manifest.json").write_text(json.dumps(history_manifest, indent=2) + "\n", encoding="utf-8")
    (ROOT / "identity-lineage-143.json").write_text(json.dumps(identities, indent=2) + "\n", encoding="utf-8")
    (ROOT / "alternate-and-unregistered-course-versions.json").write_text(
        json.dumps(branch_alternates, indent=2) + "\n", encoding="utf-8"
    )
    (ROOT / "historical-alternate-and-unregistered-course-versions.json").write_text(
        json.dumps(history_alternates, indent=2) + "\n", encoding="utf-8"
    )

    branch_unique_blobs = {r["blob_sha"] for r in file_manifest}
    history_unique_blobs = {blob for _, blob in history_versions}
    readme = f"""# Verbatim Course Content Snapshot — {SNAPSHOT_ID}\n\nThis directory is a **reference-only historical archive**. It preserves course/content bytes from every live repository branch **and every distinct reachable historical version** so older versions can be compared directly without Git archaeology.\n\n## Guarantees\n\n- Canonical logical identities asserted at snapshot time: **{EXPECTED_IDENTITIES}**.\n- Live source branches captured: **{len(branches)}**.\n- Fetched tags included in history reachability: **{len(tags)}**.\n- Branch-tip snapshot files materialized: **{len(file_manifest)}**.\n- Unique branch-tip Git blobs represented: **{len(branch_unique_blobs)}**.\n- Reachable commits scanned: **{len(commits)}**.\n- Distinct historical path/blob versions materialized: **{len(history_versions)}**.\n- Unique historical Git blobs represented: **{len(history_unique_blobs)}**.\n- Every registered main identity resolves to a snapshotted physical route.\n- Query-routed identities preserve their exact logical route and map to the shared physical source file.\n- Historical files that no longer exist at any current branch tip are retained if they are reachable from repository history.\n- Unregistered/alternate files under `courses/` are separately indexed rather than discarded.\n- Original path, blob SHA, and an earliest observed source commit are recorded for every historical version.\n\n## What is included\n\nFor each live branch tip, the snapshot captures complete `courses/`, `scripts/`, `visuals/`, and `_includes/` file sets where present, the course inventory where present, and relevant top-level learner/catalog presentation HTML. The history layer then scans every commit reachable from those branches and fetched tags and materializes every distinct relevant `path + blob SHA` version. This intentionally preserves versions that were overwritten before today's branch tips or never assigned a separate logical course ID.\n\n## What this archive does **not** mean\n\nHistorical presence does not equal current authority, current safety sufficiency, learner readiness, or publication approval. Reuse still requires current evidence, safety/qualification review, structural reconciliation, and owner approval where required.\n\n## Indexes\n\n- `snapshot-manifest.json` — overall snapshot scope and branch-tip provenance.\n- `branch-summary.json` — branch-level counts and tree/blob fingerprints.\n- `history-version-manifest.json` — every distinct reachable historical path/blob version and earliest observed commit.\n- `identity-lineage-143.json` — each of the 143 registered identities mapped to branch-tip and full reachable-history route/source-data versions.\n- `alternate-and-unregistered-course-versions.json` — alternate course files visible at branch tips.\n- `historical-alternate-and-unregistered-course-versions.json` — alternate course files found anywhere in reachable history.\n- `catalogs/course_inventory-main-143.jsonl` — exact canonical inventory used for the 143-ID assertion.\n\nThe source branches and Git history remain preserved; this working-tree archive is an additional retrieval surface, not a replacement for them.\n"""
    (ROOT / "README.md").write_text(readme, encoding="utf-8")

    print(json.dumps({
        "snapshot_id": SNAPSHOT_ID,
        "branches": len(branches),
        "tags": len(tags),
        "canonical_identities": len(inventory),
        "branch_tip_files": len(file_manifest),
        "branch_tip_unique_blobs": len(branch_unique_blobs),
        "reachable_commits": len(commits),
        "historical_path_blob_versions": len(history_versions),
        "historical_unique_blobs": len(history_unique_blobs),
        "branch_tip_alternate_course_paths": len(branch_alternates),
        "historical_alternate_course_paths": len(history_alternates),
    }, indent=2))


if __name__ == "__main__":
    main()

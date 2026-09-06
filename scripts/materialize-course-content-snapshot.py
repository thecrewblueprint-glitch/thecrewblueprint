#!/usr/bin/env python3
"""Materialize verbatim course/content versions from every repository branch.

This script is archival only. It does not decide which material is current,
public, safe to publish, or approved. It preserves historical source bytes and
provenance so versions can be compared without Git branch archaeology.
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
        ["git", *args],
        cwd=REPO,
        check=True,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
    )
    return cp.stdout if binary else cp.stdout.decode("utf-8", errors="strict")


def physical_path(route: str | None) -> str | None:
    """Return the repository file behind a logical route.

    Several inventory identities share one physical route and differ only by a
    query parameter, e.g. courses/ecosystem-course.html?course=stage-management.
    Preserve the logical route in lineage metadata, but snapshot/validate the
    underlying repository file.
    """
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
        out.append(
            {
                "mode": mode_b.decode(),
                "type": type_b.decode(),
                "sha": sha_b.decode(),
                "path": path_b.decode("utf-8", errors="strict"),
            }
        )
    return out


def should_snapshot(path: str) -> bool:
    # Full course route tree: current, archived, alternates, and raw course files.
    if path.startswith("courses/"):
        return True
    # Preserve all course generators/data/tooling because some learner prose is
    # source-driven and not safely recoverable from route HTML alone.
    if path.startswith("scripts/"):
        return True
    # Preserve historical visual-course variants and diagrams.
    if path.startswith("visuals/"):
        return True
    # Preserve the accepted v2 baseline/presentation includes where present.
    if path.startswith("_includes/"):
        return True
    # Preserve inventory versions for lineage reconstruction.
    if path == CANONICAL_INVENTORY:
        return True
    # Top-level learner/catalog/presentation files that existed outside courses/.
    if "/" not in path and path.endswith(".html"):
        name = path.lower()
        if (
            "course" in name
            or name in {
                "index.html",
                "first-five-calls.html",
                "curriculum-map.html",
                "lms-dashboard.html",
            }
        ):
            return True
    return False


def safe_branch_parts(name: str) -> Path:
    # Git ref rules already reject '..' and other unsafe components. Keep '/' as
    # hierarchy so the working-tree archive mirrors source branch naming.
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
            # Never recursively archive the branch that contains this archive.
            continue
        branches.append((name, sha))
    return sorted(branches)


def write_blob(sha: str, dest: Path) -> None:
    dest.parent.mkdir(parents=True, exist_ok=True)
    data = git("cat-file", "blob", sha, binary=True)
    dest.write_bytes(data)


def optional_tree_sha(ref: str, path: str) -> str | None:
    cp = subprocess.run(
        ["git", "rev-parse", f"{ref}:{path}"],
        cwd=REPO,
        stdout=subprocess.PIPE,
        stderr=subprocess.DEVNULL,
    )
    if cp.returncode:
        return None
    return cp.stdout.decode().strip()


def main() -> None:
    inventory = load_inventory_from_main()
    branches = remote_branches()
    if not branches:
        raise SystemExit("No remote branches found; fetch all refs before running")

    if ROOT.exists():
        shutil.rmtree(ROOT)
    (ROOT / "branches").mkdir(parents=True, exist_ok=True)
    (ROOT / "catalogs").mkdir(parents=True, exist_ok=True)

    # Freeze the exact canonical 143-ID ledger used to define this snapshot.
    inventory_bytes = git("show", f"origin/main:{CANONICAL_INVENTORY}", binary=True)
    (ROOT / "catalogs" / "course_inventory-main-143.jsonl").write_bytes(inventory_bytes)

    file_manifest: list[dict] = []
    branch_summary: list[dict] = []
    path_versions: dict[str, list[dict]] = defaultdict(list)

    for branch_name, advertised_sha in branches:
        ref = f"origin/{branch_name}"
        commit_sha = commit_for(ref)
        if commit_sha != advertised_sha:
            raise SystemExit(f"Ref moved during snapshot: {branch_name}")

        entries = tree_entries(ref)
        selected = [entry for entry in entries if entry["type"] == "blob" and should_snapshot(entry["path"])]
        dest_root = ROOT / "branches" / safe_branch_parts(branch_name)

        for entry in selected:
            original = entry["path"]
            dest = dest_root / original
            write_blob(entry["sha"], dest)
            snap_rel = dest.relative_to(REPO).as_posix()
            record = {
                "source_branch": branch_name,
                "source_commit": commit_sha,
                "original_path": original,
                "blob_sha": entry["sha"],
                "snapshot_path": snap_rel,
            }
            file_manifest.append(record)
            path_versions[original].append(record)

        route_set = {entry["path"] for entry in entries if entry["type"] == "blob"}
        canonical_routes_present = sum(
            1
            for row in inventory
            if physical_path(row.get("route_file")) in route_set
        )
        branch_summary.append(
            {
                "branch": branch_name,
                "commit": commit_sha,
                "snapshot_file_count": len(selected),
                "canonical_143_logical_routes_resolved": canonical_routes_present,
                "courses_tree_sha": optional_tree_sha(ref, "courses"),
                "scripts_tree_sha": optional_tree_sha(ref, "scripts"),
                "visuals_tree_sha": optional_tree_sha(ref, "visuals"),
                "index_blob_sha": optional_tree_sha(ref, "index.html"),
            }
        )

    # Direct per-identity lineage. Logical query-routed identities are preserved
    # separately even when they share one physical HTML blob.
    identities: list[dict] = []
    missing_main_routes: list[str] = []
    for row in inventory:
        route = row.get("route_file")
        physical = physical_path(route)
        versions = path_versions.get(physical, []) if physical else []
        main_versions = [v for v in versions if v["source_branch"] == "main"]
        if physical and not main_versions:
            missing_main_routes.append(f"{row['course_id']}::{route} -> {physical}")
        identities.append(
            {
                "course_id": row["course_id"],
                "title": row.get("title"),
                "registered_logical_route": route,
                "physical_route_file": physical,
                "source_data_file": row.get("source_data_file"),
                "inventory_state_at_snapshot": row.get("inventory_state"),
                "publication_state_at_snapshot": row.get("publication_state"),
                "versions": [
                    {
                        "source_branch": v["source_branch"],
                        "source_commit": v["source_commit"],
                        "blob_sha": v["blob_sha"],
                        "snapshot_path": v["snapshot_path"],
                    }
                    for v in versions
                ],
                "unique_blob_versions": sorted({v["blob_sha"] for v in versions}),
            }
        )
    if missing_main_routes:
        raise SystemExit(
            "Refusing snapshot: canonical physical route files missing on main:\n" + "\n".join(missing_main_routes)
        )

    # Alternate/unregistered course paths are intentionally retained too.
    registered_physical_routes = {
        physical_path(row.get("route_file")) for row in inventory if physical_path(row.get("route_file"))
    }
    alternate_paths = []
    for path, versions in sorted(path_versions.items()):
        if path.startswith("courses/") and path not in registered_physical_routes:
            alternate_paths.append(
                {
                    "path": path,
                    "source_branches": sorted({v["source_branch"] for v in versions}),
                    "unique_blob_versions": sorted({v["blob_sha"] for v in versions}),
                    "versions": [
                        {
                            "source_branch": v["source_branch"],
                            "source_commit": v["source_commit"],
                            "blob_sha": v["blob_sha"],
                            "snapshot_path": v["snapshot_path"],
                        }
                        for v in versions
                    ],
                }
            )

    manifest = {
        "schema_version": "1.1.0",
        "snapshot_id": SNAPSHOT_ID,
        "snapshot_date": "2026-09-06",
        "purpose": "Permanent verbatim working-tree archive for side-by-side curriculum comparison and future reuse.",
        "authority": "reference_only_historical_evidence",
        "canonical_identity_count": EXPECTED_IDENTITIES,
        "source_branch_count": len(branches),
        "snapshot_file_count": len(file_manifest),
        "unique_blob_count": len({r["blob_sha"] for r in file_manifest}),
        "logical_route_note": "Query-routed identities retain their full logical route while lineage points to the underlying physical repository file.",
        "rules": [
            "Snapshot presence does not make historical content current or publishable.",
            "Do not delete, squash, overwrite, or prune source history based on this archive.",
            "Future curriculum rewrites must preserve the prior accepted/source version before replacement.",
            "Historical hazardous-work detail remains subject to current safety and qualification boundaries before reuse.",
        ],
        "files": file_manifest,
    }

    (ROOT / "snapshot-manifest.json").write_text(json.dumps(manifest, indent=2) + "\n", encoding="utf-8")
    (ROOT / "branch-summary.json").write_text(json.dumps(branch_summary, indent=2) + "\n", encoding="utf-8")
    (ROOT / "identity-lineage-143.json").write_text(json.dumps(identities, indent=2) + "\n", encoding="utf-8")
    (ROOT / "alternate-and-unregistered-course-versions.json").write_text(
        json.dumps(alternate_paths, indent=2) + "\n", encoding="utf-8"
    )

    unique_blobs = {r["blob_sha"] for r in file_manifest}
    readme = f"""# Verbatim Course Content Snapshot — {SNAPSHOT_ID}\n\nThis directory is a **reference-only historical archive**. It preserves course/content bytes from every repository branch available at snapshot time so older versions can be compared directly without checking out historical refs.\n\n## Guarantees\n\n- Canonical logical identities asserted at snapshot time: **{EXPECTED_IDENTITIES}**.\n- Source branches captured: **{len(branches)}**.\n- Snapshot files materialized: **{len(file_manifest)}**.\n- Unique Git blob versions represented: **{len(unique_blobs)}**.\n- Every registered main identity resolves to a snapshotted physical route.\n- Query-routed identities preserve their exact logical route and map to the shared physical source file.\n- Unregistered/alternate files under `courses/` are separately indexed rather than discarded.\n- Original branch, commit SHA, original path, and blob SHA are recorded for every materialized file.\n\n## What is included\n\nFor every source branch, the snapshot captures the complete `courses/`, `scripts/`, `visuals/`, and `_includes/` file sets where present, the branch's course inventory when present, and relevant top-level learner/catalog presentation HTML. This intentionally preserves versions that were never assigned a separate logical course ID.\n\n## What this archive does **not** mean\n\nHistorical presence does not equal current authority, current safety sufficiency, learner readiness, or publication approval. Reuse still requires current evidence, safety/qualification review, structural reconciliation, and owner approval where required.\n\n## Indexes\n\n- `snapshot-manifest.json` — per-file source branch/commit/path/blob provenance.\n- `branch-summary.json` — branch-level counts and tree/blob fingerprints.\n- `identity-lineage-143.json` — each of the 143 registered identities mapped to every branch version found at its physical route.\n- `alternate-and-unregistered-course-versions.json` — historical course files not represented as separate canonical IDs.\n- `catalogs/course_inventory-main-143.jsonl` — exact canonical inventory used for the assertion.\n"""
    (ROOT / "README.md").write_text(readme, encoding="utf-8")

    print(json.dumps({
        "snapshot_id": SNAPSHOT_ID,
        "branches": len(branches),
        "canonical_identities": len(inventory),
        "files": len(file_manifest),
        "unique_blobs": len(unique_blobs),
        "alternate_course_paths": len(alternate_paths),
    }, indent=2))


if __name__ == "__main__":
    main()

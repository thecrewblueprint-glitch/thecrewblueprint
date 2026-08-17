# Foundational Live Production Rigging

This folder is the first database-prep content unit for the `Contentrepo` repository.

## Purpose

Store the supplied rigging web presentation package in a way that preserves original assets while preparing normalized records for a future MySQL-backed RAG extraction layer for the LMS.

## Preservation rule

Original user-supplied artifacts are treated as source records. Derived metadata, JSONL inventory files, and schema files are additive. Do not delete, overwrite, or lossy-transform the original files when refining the database workflow.

## Current data-outflow status

Unconfirmed. The included MySQL schema is a staging schema designed to keep data portable while the final LMS/RAG architecture is still being decided.

## Main paths

- `source-artifacts/` — original uploaded package/audio/timing CSV.
- `web-package/` — extracted web presentation runtime files.
- `rag-records/` — database-friendly JSON/JSONL records.
- `database/mysql_rag_schema.sql` — provisional MySQL staging schema.
- `metadata.json` — content-unit metadata, checksums, asset inventory, and preservation policy.

## Counts

- Slides: 74
- Timing rows: 74
- Source artifacts: 3

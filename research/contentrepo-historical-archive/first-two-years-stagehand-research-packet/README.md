# First Two Years Stagehand Research Packet

This research unit stores a structured overview of professional stagehand life and early-career progression for workers entering the industry.

## Purpose

Prepare mentor-style stagehand career research for later import into a MySQL-backed RAG/LMS system.

## Preservation rule

The original user prompt is preserved in `source-prompt.md`. The research packet, metadata, source index, and JSONL records are additive database-prep layers.

## Files

- `source-prompt.md` — original research packet prompt supplied by the user.
- `research-packet.md` — structured research packet.
- `metadata.json` — content-unit metadata and database/RAG intent.
- `sources/source_index.json` — source list for standards and organizations.
- `rag-records/research_chunks.jsonl` — preliminary chunk records for later embedding/import.

## Data outflow status

Unconfirmed. This unit is organized as staging data for future RAG extraction and LMS reuse, not as the final LMS schema.

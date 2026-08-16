# CLAUDE.md — Session Preferences

Read this before starting work. These are standing preferences from the
owner, not one-off requests — they apply to every session, not just the one
where they were first said.

## Never use AskUserQuestion (or any multiple-choice/decision-card UI)

The owner has said this multiple times across separate sessions: **do not
use the `AskUserQuestion` tool, or any structured multiple-choice prompt
UI.** Converse in plain text only. If you're blocked on a decision only the
owner can make, ask directly in a normal chat message — don't render it as
a card with selectable options.

This preference doesn't reset between sessions. If you're a fresh session
reading this for the first time, treat it as already-standing instruction,
not something that needs to be re-confirmed.

## Other standing preferences

- Commit and push directly to `main` — no side branches or PRs unless
  explicitly asked.
- Git identity for every commit in this repo:
  `git -c user.name="Deadhang Labor LLC" -c user.email="thecrewblueprint@gmail.com" commit ...`
- Every content or diagram change gets link-checked (all HTML files, zero
  broken links) before it ships, and mirrored into `50yearroadmap`'s
  tracking docs (`companies/crew-blueprint/10_content_research_queue.md`,
  `roadmap.json`'s `cb-4` work item, `CHANGELOG.md`) after it ships.

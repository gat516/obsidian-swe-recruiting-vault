# recruiting-vault

An Obsidian vault for end-to-end SWE interview prep: coding patterns, behavioral stories, application tracking, and resume defense. Built around the idea that **pattern recognition beats problem memorization** and **retrieval beats re-reading**.

> **Built for:** NeetCode 150 + [Labuladong](https://labuladong.online/algo/) as the primary algorithm textbook + Excalidraw for visual reasoning.
>
> **Optimized for:** pattern recognition, generation effect, spaced retrieval, and durable schema-building (not "pretty notes").

---

## Why this exists

Most people treat interview prep as collecting solutions. This vault treats it as building **expert categorization** — the ability to see a new problem and instantly know what deep structure it shares with problems you've already solved.

Three rules drive every design choice:

1. **Generation > consumption.** Every template forces you to write *before* you read. Restatement, signal guess, and approach attempt come before any solution discussion.
2. **Pattern hubs are the asset.** A polished problem note is worth less than a half-finished pattern hub. The hub is where transfer happens.
3. **Excalidraw is for traces, not decoration.** Use it where algorithm behavior is hard to see in code: pointer movement, recursion trees, DP tables filling in. Not for ER diagrams of your folder structure.

---

## Four parallel tracks

| track | sections | unit of study |
|---|---|---|
| **technical** | `01_technicals/` | pattern hubs → problems → flashcards |
| **behavioral** | `02_behavioral/` | stories → question hubs → mocks |
| **applications** | `03_applications/` | apps → dataview → retro |
| **resume & projects** | `04_resume-projects/` | bullets → project deep-dives → drills |

Same cognitive scaffolding, different unit of study.

### Technical track

- **18 pattern hubs** (`01_technicals/01_patterns/*/hub - *.md`) — one for each NeetCode category. Each hub collects signal cues, variants, common gotchas, and a live Dataview table of solved problems.
- **Problems** (`01_technicals/01_patterns/*/problems/`) — one note per problem. The template enforces a "ticket" (restatement → signal guess → approach → wall) *before* you look at any solution.
- **Pattern flashcards** (`01_technicals/01_patterns/*/flashcards/pattern.md`) — one SR card per pattern. Front = signal; back = skeleton + complexity + growing list of related problems.
- **Notes** (`01_technicals/01_patterns/*/notes/`) — Labuladong chapter notes, reference material, scratchpads.
- **Daily log** (`07_daily-log/`) — time-to-first-approach, hint level, consolidation.

### Behavioral track

- **Story bank** (`02_behavioral/01_story-bank/`) — raw memories → STAR skeleton → three lengths (30s / 90s / 2min) → self-critique log.
- **Question hubs** (`02_behavioral/02_question-hubs/`) — 12 categories (ownership, conflict, failure, leadership, ambiguity, etc.). Each auto-lists relevant stories via Dataview.
- **Company values** (`02_behavioral/03_company-values/`) — Amazon LPs, etc.

### Applications track

Lightweight tracking without bloat. Status values: `applied → oa → interviewing → offer → rejected`.

- **QuickAdd macro** creates a new app in ~5 seconds.
- **Update macro** lets you change status, set OA due dates, interview dates, rounds, etc.
- **Homepage dashboard** shows active OAs/interviews and anything needing action this week.

### Resume & projects track

One deep-dive note per project on your resume. Every bullet becomes a defended claim with:

- The metric (baseline, measurement, what the number means)
- 3 layers of technical depth
- Anticipated follow-ups
- Drill status: ready / needs-work / weak

---

## Plugin stack

| plugin | what it does here |
|---|---|
| **Dataview** | Pattern hub tables, progress dashboards, application queries |
| **Templater** | Auto-fills dates, IDs, links in problem and daily log templates |
| **QuickAdd** | One-key app creation + status updates |
| **Excalidraw** | Algorithm traces, architecture diagrams, mental models |
| **Homepage** | Auto-opens the dashboard on launch |
| **Spaced Repetition** | `#flashcard` reviews for patterns, behavioral cues, bullet defense |
| **Obsidian Tasks** | Follow-up reminders, review queues |
| **Tag Wrangler** | Bulk tag renames when namespaces grow |

Kanban was removed — the workflow is Dataview tables + QuickAdd macros instead.

---

## Daily workflow (technical)

1. Open Obsidian → homepage opens automatically → see today's targets.
2. Pick the problem from your study plan. Open the problem note.
3. **Time floor: 15–20 minutes solo.** Fill sections 1–4 (the ticket). No googling, no hints, no AI.
4. **If solved:** fill section 5, then section 6 (pattern / signal / why / gotcha). Draw the trace.
5. **If stuck after 20 min:** *only now* engage your thinking partner with the ticket pasted in. Once solved, sections 5 and 6 still get filled — by you, not pasted.
6. **Update the pattern hub.** New gotcha? Add it. The hub is the asset.
7. **Generate one flashcard.**
8. **Daily log:** outcome, hint level, time-to-approach.

End-of-week ritual: re-read the pattern hubs you touched. Don't re-read problems.

---

## Setup

See [`SETUP.md`](SETUP.md) for the full manual setup (mostly QuickAdd choices that can't be configured via files).

Quickstart:
1. Install the plugins listed above.
2. Configure QuickAdd: `New Application`, `New Project`, and `Update App Status` macro.
3. Close and reopen Obsidian — it should boot to the homepage dashboard.

---

## Naming conventions

- **Problems:** `nc{id}-{title}.md` (sorts by NeetCode order)
- **Pattern hubs:** `hub - {pattern}.md`
- **Pattern flashcards:** `pattern.md`
- **Applications:** `YYYY-MM-DD-{company-slug}.md`
- **Projects:** `{org-slug}-{project-slug}.md`

---

## NeetCode ↔ Labuladong mapping

Read Labuladong's chapter for a pattern **before** grinding its problems. The skeleton from the chapter goes into the pattern hub's `## the skeleton` section.

| NeetCode pattern | Labuladong chapter |
|---|---|
| Trees | binary tree |
| 1-D DP, 2-D DP | dynamic programming |
| Backtracking | backtracking |
| Graphs | BFS / DFS / union-find |
| Advanced graphs | topological sort |
| Sliding window | sliding window |
| Binary search | binary search |
| Stack | monotonic stack |
| Two pointers | two pointers |

Labuladong's strength is giving you a *fixed mental skeleton* per pattern. Your job per problem is just to fill in the skeleton's blanks.

---

## License

Do whatever you want with this. It's a personal knowledge system, not software.

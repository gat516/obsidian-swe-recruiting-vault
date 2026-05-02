---
tags: [technicals, workflow]
---

# technical workflow

**read pattern → attempt → review → repeat.** looking at solutions isn't failure — pattern recognition is the skill.

every note is either `#wip` (working on it) or `#done` (finished). new notes default to `#wip` from the template. flip to `#done` when you've fully consolidated.

## 1. prime (~20 min, once per pattern)

- read [labuladong's chapter](https://labuladong.online/en/roadmap/) for **one** pattern.
- create a notes file in the pattern's `notes/` folder from [[templates/labuladong-notes-template|labuladong notes template]]. free-write while reading. tag stays `#wip`.
- open the [[01_technicals/hub - technicals overview|pattern hub]] and pull only the distilled bits into `## signal` + `## the skeleton`.
- when the chapter's done and notes are consolidated, flip notes file's tag to `#done`.

> arrays & hashing → just grind. labuladong pays off most for [[01_technicals/01_patterns/03_sliding-window/hub - sliding window|sliding window]], [[01_technicals/01_patterns/07_trees/hub - trees|trees]], [[01_technicals/01_patterns/11_graphs/hub - graphs|graphs]].

## 2. solve (25–30 min time-box per problem)

- new note in pattern's `problems/` folder from [[templates/problem-template|problem template]]. starts as `#wip`.
- solo attempt: fill sections 1–4 (the ticket).
- solved → fill 5–7.
- stuck at time-box → peek at editorial, **then close it and re-implement in section 5.** that's where it sticks.

## 3. consolidate

- update the pattern hub (new gotcha? variant? refine the signal).
- add a pattern-level card to `flashcards/pattern.md` if anything new crystallized.
- bump `attempts +1`.
- **flip the problem's tag from `#wip` → `#done`.** this is the only "completion" signal.
- daily log entry → [[07_daily-log]].

## 4. repeat

- 3–5 more problems in the same pattern before switching. by problem 4, you recognize without the template.

---

**weekly:** re-read touched pattern hubs. don't re-read problems.

**SR deck:** `flashcards/pattern.md` files are tagged `#flashcard`. review them daily.

**rusty pattern in SR review?** open the pattern hub and re-read the signal + skeleton sections.

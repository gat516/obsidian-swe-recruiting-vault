---
type: technicals-hub
tags: [technicals, hub]
---
## pattern hubs
- [[hub - arrays & hashing|arrays & hashing]]
- [[01_technicals/01_patterns/02_two-pointers/hub - two pointers|two pointers]]
- [[01_technicals/01_patterns/03_sliding-window/hub - sliding window|sliding window]]
- [[01_technicals/01_patterns/04_stack/hub - stack|stack]]
- [[01_technicals/01_patterns/05_binary-search/hub - binary search|binary search]]
- [[01_technicals/01_patterns/06_linked-list/hub - linked list|linked list]]
- [[01_technicals/01_patterns/07_trees/hub - trees|trees]]
- [[01_technicals/01_patterns/08_tries/hub - tries|tries]]
- [[01_technicals/01_patterns/09_heap-priority-queue/hub - heap priority queue|heap & priority queue]]
- [[01_technicals/01_patterns/10_backtracking/hub - backtracking|backtracking]]
- [[01_technicals/01_patterns/11_graphs/hub - graphs|graphs]]
- [[01_technicals/01_patterns/12_advanced-graphs/hub - advanced graphs|advanced graphs]]
- [[01_technicals/01_patterns/13_1d-dp/hub - 1-d dp|1-d dp]]
- [[01_technicals/01_patterns/14_2d-dp/hub - 2-d dp|2-d dp]]
- [[01_technicals/01_patterns/15_greedy/hub - greedy|greedy]]
- [[01_technicals/01_patterns/16_intervals/hub - intervals|intervals]]
- [[01_technicals/01_patterns/17_math-geometry/hub - math & geometry|math & geometry]]
- [[01_technicals/01_patterns/18_bit-manipulation/hub - bit manipulation|bit manipulation]]

## wip 
```dataview
TABLE difficulty, attempts, file.mtime as "last touched"
FROM "01_technicals/01_patterns" AND #wip
WHERE type = "problem"
SORT file.mtime DESC
```

## done — finished problems
```dataview
TABLE difficulty, attempts, file.mtime as "last touched"
FROM "01_technicals/01_patterns" AND #done
WHERE type = "problem"
SORT file.mtime DESC
```

## wip notes — chapters in progress
```dataview
TABLE pattern, source, chapter, file.mtime as "last touched"
FROM "01_technicals/01_patterns" AND #wip
WHERE type = "notes"
SORT file.mtime DESC
```

---

## flashcards by pattern
```dataview
TABLE type, file.mtime as "last touched"
FROM "01_technicals/01_patterns" AND #flashcard
SORT file.mtime DESC
```

## recent daily logs
```dataview
TABLE
FROM "07_daily-log"
SORT file.name DESC
LIMIT 7
```

## technical overview

> **workflow:** [[01_technicals/workflow|technical workflow]]

| tag     | when to use                                                                         |
| ------- | ----------------------------------------------------------------------------------- |
| `#wip`  | created the note, still working through it (default for new notes)                  |
| `#done` | solved + consolidated, pattern hub updated, `pattern.md` card updated. nothing left to do here. |

new files get `#wip` from the template. when you fully consolidate (sections 5–7 filled, hub updated, pattern card written), swap it to `#done`.
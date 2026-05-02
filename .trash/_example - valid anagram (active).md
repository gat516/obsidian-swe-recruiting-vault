---
type: problem
id: nc242
title: "valid anagram"
difficulty: easy
pattern: arrays-hashing
last_reviewed: 2026-04-29
attempts: 2
link: https://leetcode.com/problems/valid-anagram/
tags:
  - problem
  - flashcard/arrays-hashing
  - pattern/arrays-hashing
  - difficulty/easy
---
 
# valid anagram

> [!info] problem link
> https://leetcode.com/problems/valid-anagram/

## 1. restatement (in my own words)
inputs: [two strings s, t]
outputs: [true if t is a permutation of s, else false]
constraints: [lowercase english letters; lengths up to ~5*10^4]
edge cases i see in the prompt: [empty strings, different lengths, single-char strings]

## 2. signal & pattern guess
[problem about counting / matching characters across two collections — points to frequency counting]
[deep structure: compare multisets of characters]

## 3. first approach (brute force counts)
idea: [sort both strings and compare]
why i think it could work: [equal multisets sort to identical strings]
time / space: [O(n log n) / O(1) extra if in-place]

## 4. the specific wall
[no real wall — sorting works. but n log n feels wasteful when alphabet is constant]

---
*— stop here until ticket is submitted —*
---

## 5. working approach (my words, no full code)
core insight: [count char frequencies in s, decrement walking through t, all zero at end → anagram]
data structures: [hashmap or fixed-size array of length 26]
invariant maintained: [counts[c] = (occurrences in s) - (occurrences seen in t so far)]
time / space: [O(n) / O(1) — alphabet is bounded]

## 6. consolidation (required after solve)
- **pattern:** [frequency counting with hashmap / fixed array]
- **signal:** [comparing membership/multiset of characters across strings]
- **why it works:** [anagram ↔ identical character multisets]
- **gotcha:** [check lengths equal first, otherwise the decrement-to-zero check is wrong]

## 7. trace
![[excalidraw/nc242-trace.excalidraw]]

## 8. links
- pattern hub: [[../_hub - arrays & hashing]]
- related problems: [[_example - two sum (unsolved)]]

---

## 9. flashcard

**valid anagram — what's the approach and complexity?**
?
- **signal:** comparing two strings as character multisets
- **pattern / reasoning:**
  1) brute: sort both, compare. O(n log n)
  2) better: build frequency map of s, decrement from t
  3) if any count != 0, not an anagram
- **why this works:** anagrams have identical character multisets — counts must cancel
- **time / space:** O(n) / O(1)
<!--SR:!2026-05-01,1,230-->

---
type: problem
id: nc217
title: "contains duplicate"
difficulty: easy
pattern: arrays-hashing
last_reviewed: 2026-03-15
attempts: 1
link: https://leetcode.com/problems/contains-duplicate/
tags:
  - problem
  - flashcard/arrays-hashing
  - pattern/arrays-hashing
  - difficulty/easy
---
   
# contains duplicate
 
> [!info] problem link
> https://leetcode.com/problems/contains-duplicate/

## 1. restatement (in my own words)
inputs: [integer array nums]
outputs: [true if any value appears more than once, else false]
constraints: [length up to 10^5; values can be negative]
edge cases i see in the prompt: [empty array, single element, all duplicates]

## 5. working approach (my words, no full code)
core insight: [walk through, add each to a set, return true on first hit; else false at end]
data structures: [hash set]
invariant maintained: [seen contains all values from nums[0..i)]
time / space: [O(n) / O(n)]

## 6. consolidation (required after solve)
- **pattern:** [hash set for O(1) membership lookup]
- **signal:** ["have i seen this before?" — the canonical arrays-hashing signal]
- **why it works:** [duplicate ↔ value seen before ↔ already in the set]
- **gotcha:** [in python, `if x in set: return True; set.add(x)` is the right order]

## 9. flashcard
 duplicate ↔ membership in seen-set
- **time / space:** O(n) / O(n)
<!--SR:!2026-05-01,1,230-->


**contains duplicate — what's the approach and complexity?**
?
- **signal:** "have i seen this before?" — pure membership check
- **pattern / reasoning:**
  1) brute: compare every pair. O(n^2)
  2) sort then scan adjacent. O(n log n)
  3) hash set + early return on hit. O(n)
- **why this works:**
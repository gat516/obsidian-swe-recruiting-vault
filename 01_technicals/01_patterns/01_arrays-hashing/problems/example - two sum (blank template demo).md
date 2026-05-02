---
type: problem
id: nc1
title: two sum
difficulty: easy
pattern: arrays-hashing
attempts: 0
link: https://leetcode.com/problems/two-sum/
flashcard_file: "[[../flashcards/example - two sum]]"
tags:
  - problem
  - pattern/arrays-hashing
  - difficulty/easy
  - "#done"
---

# two sum
> [!info] problem link
> [link]

> [!info] flashcard file
> [[../flashcards/example - two sum]]

## 1. restatement (in my own words)
inputs: [an integer array nums, an integer target]
outputs: [the two indices i, j where nums[i] + nums[j] == target]
constraints: [exactly one valid pair; cannot use the same element twice]
edge cases i see in the prompt: [duplicates? negatives? what if no pair? — problem guarantees one]

## 2. signal & pattern guess
[what in this problem reminds you of patterns you've seen?]
[your best guess at the deep structure — write it before peeking]

## 3. first approach (brute force counts)
idea: [describe your first attempt — brute force counts]
why i think it could work: [the reasoning behind it]
time / space: [O(?) / O(?)]

## 4. the specific wall
[i tried ___ and it breaks when ___ / i see this is O(___) but can't drop the inner loop because ___]


*— stop here until ticket is submitted —*


## 5. working approach (my words, no full code)
core insight: [the aha — what unlocked it for you]
data structures: [what you used to store/lookup]
invariant maintained: [what stays true across iterations]
time / space: [O(?) / O(?)]

## 6. consolidation (required after solve)
- **pattern:** [name the pattern — e.g. "hash map for O(1) complement lookup"]
- **signal:** [what told you this pattern applied]
- **why it works:** [one sentence]
- **gotcha:** [easy mistake / edge case you almost missed]

## 7. trace
![[excalidraw/nc1-trace.excalidraw]]

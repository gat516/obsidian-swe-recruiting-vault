---
type: notes
source: labuladong
chapter: chapter 0
section: array (sequential storage)
pattern: arrays-hashing
date: 05-01-2026
tags:
  - notes
  - wip
  - source/labuladong
  - pattern/arrays-hashing
---

> [!abstract] tl;dr
> *fill this in AFTER reading — 1-3 sentences in your own words. if you can't, you didn't get it yet.*

---

## scratchpad
>**static array basics**
- static array is a contiguous block of memory
- arr = [0] * 10
	- starting address of mem = `arr`
	- since we know type, we know size `int = 4 bytes`
	- block is continuous, arr = 40 bytes
> as long as we know the index, we can get the value in O(1) time

>main job of a data structure -> add, del, search, update
- add:
	- element at end (O1)
	- insert element in middle O(n)  -> must shift elements to the right
- delete:
	- remove last element O(1)
	- insert element last O(n) -> must shift elements left

>**dynamic array basics**
- dynamics do not solve the O(n) time complexity required to add / delete elements in the middle. it is impossible.
- fast random access comes from the contiguous space in memory
- dynamic arrays simply have wrappers around operations for easier use
---

## key concepts

*after the dump, pull out atomic ideas — one concept per block. these are the things you'd want to come back to or link from other notes.*

- **what it is**:
- **why it matters**:
- **example / intuition**:
- **gotchas**:

- **what it is**:
- **why it matters**:
- **example / intuition**:
- **gotchas**:

---

## active recall

*questions you should be able to answer without looking at the book. write them while reading, answer them later (next day, then a week out).*

- [ ] q:
- [ ] q:
- [ ] q:

---

## code patterns

*templates, idioms, snippets worth memorizing — not full problems (those go in `problems/`), just the reusable shape.*

```
# pattern: 
# when to use: 
# complexity: 

```

---

## connections

*link generously. retrieval gets stronger every time you tie new info to something you already know.*

- builds on → [[ ]]
- contrasts with → [[ ]]
- similar pattern in → [[ ]]
- prerequisite for → [[ ]]

---

## confusions & followups

*stuff you didn't fully get. don't pretend you did. revisit these.*

- [ ]
- [ ]

---

## flashcards

*cards from the chapter. SR plugin scans this file because `flashcard/<slug>` is in frontmatter. format: question, `?` on its own line, answer below.*

<!-- example:

**[question about the chapter]?**
?
[answer]

-->

---

## sources

- labuladong, ch. , p.
- when done with this chapter, swap the `wip` tag for `done` in frontmatter.

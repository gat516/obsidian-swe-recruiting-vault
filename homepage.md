---
tags: [homepage]
---

```button
name today
type command
action Daily notes: Open today's daily note
```

---

```button
name technicals
type link
action 01_technicals/hub - technicals overview.md
```

## technical
[[01_technicals/hub - technicals overview|technicals hub]] · [[meta/study-plan|study plan]]

---

## behavioral

[[hub - behavioral overview|behavioral hub]]

### lowest-confidence stories
```dataview
TABLE confidence, last_rehearsed
FROM "02_behavioral/01_story-bank"
SORT confidence ASC
LIMIT 3
```

---

## applications

[[hub - applications overview|applications hub]]

### active — OAs & interviews
```dataview
TABLE company, role, status, next_action, next_action_due
FROM "09_applications/apps"
WHERE status = "interviewing" OR status = "oa"
SORT next_action_due ASC
```

### coming up — next 2 weeks
```dataview
TABLE company, role, status, next_action, next_action_due
FROM "09_applications/apps"
WHERE next_action_due AND next_action_due <= date(today) + dur(14 days)
SORT next_action_due ASC
```

---

## resume

[[hub - resume overview|resume hub]] · [[resume|canonical resume]]

### projects on resume
```dataview
TABLE context, weak_bullets, last_drilled
FROM "04_resume-projects/projects"
WHERE on_resume = true
SORT weak_bullets DESC, last_drilled ASC
LIMIT 5
```

---

## inactive — review or archive

> notes you haven't touched in >30 days. either re-engage (open + edit, even a space + save resets it) or drag into `_archive/<matching-subfolder>/`.

```dataview
TABLE
  dateformat(file.mtime, "yyyy-MM-dd") as "last touched",
  (date(today) - date(file.mtime)).day as "days idle",
  file.folder as "track"
FROM "01_technicals/03_problems" OR "02_behavioral/01_story-bank" OR "04_resume-projects/projects"
WHERE file.mtime < date(today) - dur(30 days)
SORT file.mtime ASC
LIMIT 25
```

---

## quick links

- [[meta/study-plan]]
- [[meta/progress-dashboard]]

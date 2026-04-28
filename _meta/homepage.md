---
tags: [homepage]
---

# today

- problem: 
- pattern focus: _hub - ___
- behavioral story: [[]]
- resume bullet: 
- application action: 

---

## quick actions

```button
name New Application
type command
action QuickAdd: New Application
```

```button
name Update App Status
type command
action QuickAdd: Update App Status
```

```button
name New Project
type command
action QuickAdd: New Project
```

## getting started
- [ ] Create your first application (click "New Application" above)
- [ ] Create your first project deep-dive (click "New Project")
- [ ] Pick problem 1 from [[_meta/study-plan|study plan]] → create note → set 20-min timer
- [ ] Mine one raw story for the behavioral bank

---

## active — OAs & interviews
```dataview
TABLE company, role, status, next_action, next_action_due
FROM "09_applications/apps"
WHERE status = "interviewing" OR status = "oa"
SORT next_action_due ASC
```

## needs action this week
```dataview
TABLE company, role, next_action, next_action_due
FROM "09_applications/apps"
WHERE next_action_due AND next_action_due <= date(today) + dur(7 days)
SORT next_action_due ASC
```

---

## quick links
- [[_meta/study-plan]]
- [[09_applications/_hub - applications overview]]
- [[10_resume-projects/_hub - resume overview]]
- [[_meta/progress-dashboard]]

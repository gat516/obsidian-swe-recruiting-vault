---
tags: [homepage]
---

# today

## targets
- problem: 
- pattern focus: _hub - ___
- behavioral story to rehearse: [[]]
- resume bullet to drill: 

---

## applications — status counts
```dataview
TABLE WITHOUT ID status as "status", length(rows) as "count"
FROM "09_applications/apps"
GROUP BY status
SORT status
```

## applications — active interviews
```dataview
TABLE company, role, next_action, next_action_due
FROM "09_applications/apps"
WHERE status = "interviewing" OR status = "oa"
SORT next_action_due ASC
```

## applications — needing action this week
```dataview
TABLE company, role, next_action, next_action_due
FROM "09_applications/apps"
WHERE next_action_due AND next_action_due <= date(today) + dur(7 days)
SORT next_action_due ASC
```

## upcoming interviews
```dataview
TABLE company, round, date(interview_date) as "when"
FROM "09_applications/apps"
WHERE interview_date AND interview_date >= date(today)
SORT interview_date ASC
LIMIT 5
```

---

## technical — needs review (oldest first)
```dataview
TABLE difficulty, pattern, last_reviewed
FROM "03_problems"
WHERE status = "needs-review"
SORT last_reviewed ASC
LIMIT 8
```

## behavioral — lowest confidence stories
```dataview
TABLE confidence, last_rehearsed
FROM "08_behavioral/01_story-bank"
SORT confidence ASC
LIMIT 5
```

## resume — projects flagged for drill
```dataview
TABLE last_drilled, weak_bullets
FROM "10_resume-projects/projects"
WHERE on_resume = true AND (last_drilled = null OR last_drilled <= date(today) - dur(14 days))
SORT last_drilled ASC
LIMIT 5
```

---

## quick links
- [[_meta/study-plan]]
- [[10_resume-projects/_hub - resume overview]]
- [[_meta/progress-dashboard]] (deeper queries)

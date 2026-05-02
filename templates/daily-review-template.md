---
tags: [daily]
---

# {{date}}

## done
- 
- 

## learned
- 

## next
- 

---

## coming up — next 2 weeks
```dataview
TABLE company, role, status, next_action, next_action_due
FROM "03_applications/apps"
WHERE next_action_due AND next_action_due <= date(today) + dur(14 days)
SORT next_action_due ASC
```

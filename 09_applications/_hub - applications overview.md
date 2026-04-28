---
type: applications-hub
tags: [applications, hub]
---

# applications overview

```button
name New Application
type command
action QuickAdd: New Application
```

## target companies
- crowdstrike
- cloudflare
- datadog
- openai
- palantir
- databricks
- stripe
- linear
- notion
- anthropic

## active pipeline — interviewing & OA
```dataview
TABLE company, role, status, next_action, next_action_due
FROM "09_applications/apps"
WHERE status = "interviewing" OR status = "oa"
SORT next_action_due ASC
```

## this week
```dataview
TABLE company, role, next_action, next_action_due
FROM "09_applications/apps"
WHERE next_action_due AND next_action_due <= date(today) + dur(7 days)
SORT next_action_due ASC
```

## by company
```dataview
TABLE company, role, status, applied_date
FROM "09_applications/apps"
GROUP BY company
SORT company ASC
```

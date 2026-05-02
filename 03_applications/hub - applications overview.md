---
type: applications-hub
tags: [applications, hub]
---

# applications overview

```button
name job app
type command
action QuickAdd: job app
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
FROM "03_applications/apps"
WHERE status = "interviewing" OR status = "oa"
SORT next_action_due ASC
```

## coming up — next 2 weeks
```dataview
TABLE company, role, status, next_action, next_action_due
FROM "03_applications/apps"
WHERE next_action_due AND next_action_due <= date(today) + dur(14 days)
SORT next_action_due ASC
```

## by company
```dataview
TABLE company, role, status, applied_date
FROM "03_applications/apps"
GROUP BY company
SORT company ASC
```

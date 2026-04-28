---
type: behavioral-hub
tags: [behavioral, hub]
---

# behavioral overview

> **Start here:** You don't need to fill all 12 question hubs upfront. Create 3–5 raw stories first, then the hubs populate themselves via Dataview.

```button
name New Story
type command
action Templater: Open Insert Template Modal
```

## story bank
```dataview
TABLE time_period, themes, values, confidence, last_rehearsed
FROM "08_behavioral/01_story-bank"
SORT confidence ASC
```

## question hubs
- [[_hub - conflict resolution]]
- [[_hub - ownership]]
- [[_hub - failure & growth]]
- [[_hub - teamwork & collaboration]]
- [[_hub - leadership]]
- [[_hub - ambiguity & prioritization]]
- [[_hub - customer obsession]]
- [[_hub - dive deep]]
- [[_hub - deliver results]]
- [[_hub - learn & be curious]]
- [[_hub - earn trust]]
- [[_hub - have backbone]]

## company values
- [[08_behavioral/03_company-values/amazon-leadership-principles]]

## mock log
```dataview
TABLE date, partner, company_simulated
FROM "08_behavioral/02_mock-logs"
SORT date DESC
```

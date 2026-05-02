---
type: behavioral-hub
tags: [behavioral, hub]
---

# behavioral overview

> **Start here:** You don't need to fill all 12 question hubs upfront. Create 3–5 raw stories first, then the hubs populate themselves via Dataview.

## story bank
```dataview
TABLE time_period, themes, values, confidence, last_rehearsed
FROM "02_behavioral/01_story-bank"
SORT confidence ASC
```

## question hubs
- [[hub - conflict resolution]]
- [[hub - ownership]]
- [[hub - failure & growth]]
- [[hub - teamwork & collaboration]]
- [[hub - leadership]]
- [[hub - ambiguity & prioritization]]
- [[hub - customer obsession]]
- [[hub - dive deep]]
- [[hub - deliver results]]
- [[hub - learn & be curious]]
- [[hub - earn trust]]
- [[hub - have backbone]]

## company values
- [[amazon-leadership-principles]]

## mock log
```dataview
TABLE date, partner, company_simulated
FROM "02_behavioral/02_mock-logs"
SORT date DESC
```

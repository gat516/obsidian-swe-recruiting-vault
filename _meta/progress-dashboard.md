# progress dashboard

> deeper dataview queries — check weekly, not daily.

```button
name New Daily Log
type command
action Templater: Open Insert Template Modal
```

## solve counts by pattern
```dataview
TABLE length(rows) as "solved", sum(rows.attempts) as "total attempts"
FROM "03_problems"
WHERE status != "unsolved"
GROUP BY pattern
SORT length(rows) DESC
```

## theme coverage matrix
```dataview
TABLE difficulty, pattern, status
FROM "03_problems"
SORT pattern ASC, difficulty ASC
```

## hardest gotchas
> manually curate the top 10 gotchas you've collected from pattern hubs.

1. 
2. 
3. 

## behavioral — rehearsal velocity
```dataview
TABLE sum(rows.attempts) as "total rehearsals", average(rows.confidence) as "avg confidence"
FROM "08_behavioral/01_story-bank"
GROUP BY themes
```

## resume — drill coverage
```dataview
TABLE weak_bullets, last_drilled, themes
FROM "10_resume-projects/projects"
WHERE on_resume = true
SORT weak_bullets DESC, last_drilled ASC
```

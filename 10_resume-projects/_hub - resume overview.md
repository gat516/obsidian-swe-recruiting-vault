---
type: resume-hub
tags: [resume-hub]
---
	
# resume overview

## current canonical resume
[[resume]]

## active versions
- [[resume-versions/resume-2026-04-general-swe]] — default
- [[resume-versions/resume-2026-04-security-infra]] — for security-leaning roles
- [[resume-versions/resume-2026-04-platform]] — for platform/devops-heavy roles

## projects on the resume
```dataview
TABLE context, time_period, status, weak_bullets
FROM "10_resume-projects/projects"
WHERE on_resume = true
SORT weak_bullets DESC, time_period DESC
```

## projects with weak bullets (drill priority)
```dataview
TABLE weak_bullets, last_drilled
FROM "10_resume-projects/projects"
WHERE on_resume = true AND weak_bullets > 0
SORT weak_bullets DESC
```

## bullet ↔ story coverage
```dataview
TABLE related_stories
FROM "10_resume-projects/projects"
WHERE on_resume = true
```

## "tell me about a project" themes per company
- crowdstrike: depth + security; lead with nasa-samba-plugin or zero-trust-rest-api
- cloudflare: networking + scale; lead with kube-platform
- datadog: observability + system design; lead with kube-platform (prometheus/health/metrics) or ai-code-grader-qwen (sglang infra)
- openai: research adjacency + scrappy infra; lead with ai-code-grader-qwen

## post-mortem patterns (updated monthly from drill logs and interview debriefs)
- 

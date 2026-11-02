---
'@tanstack/history': patch
---

Stamp `__TSR_index` for `push`/`replace` when the navigation is applied rather than when it is called, so navigations queued behind async blockers get correct indexes.

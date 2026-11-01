---
'@tanstack/start-plugin-core': patch
---

Escape the generated route tree path when building the client route tree load filter, so project paths containing regex characters such as `+` no longer skip server-only route pruning.

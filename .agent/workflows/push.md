---
description: push all changes to GitHub
---

// turbo-all
1. Stage, commit, and push all changes in /Users/kelseystuart/Projects/local-websites
```bash
cd /Users/kelseystuart/local-websites && git add -A && git diff --cached --quiet && echo "Nothing to commit." || git commit -m "Auto-save: $(date '+%Y-%m-%d %H:%M')" && git push && echo "✅ Pushed to github.com/Franscale1922/local-websites"
```

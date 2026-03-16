#!/bin/bash
# push.sh — commit and push all changes to GitHub
# Usage: ./push.sh "optional commit message"

cd "$(dirname "$0")"

MSG="${1:-Auto-save: $(date '+%Y-%m-%d %H:%M')}"

git add -A

if git diff --cached --quiet; then
  echo "Nothing to commit — working tree clean."
  exit 0
fi

git commit -m "$MSG"
git push

echo ""
echo "✅ Pushed to github.com/Franscale1922/local-websites"

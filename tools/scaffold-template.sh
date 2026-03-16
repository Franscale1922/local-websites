#!/bin/bash
# scaffold-template.sh
# Creates a new template by copying base config files.
# Usage: ./scaffold-template.sh restaurant

NAME=$1
if [ -z "$NAME" ]; then
  echo "Usage: ./scaffold-template.sh <template-name>"
  exit 1
fi

TARGET="$(dirname "$0")/../templates/$NAME"
BASE="$(dirname "$0")/../templates/_base"

if [ -d "$TARGET" ]; then
  echo "Template '$NAME' already exists."
  exit 1
fi

mkdir -p "$TARGET/src/app"
cp "$BASE/package.json" "$TARGET/package.json"
cp "$BASE/next.config.mjs" "$TARGET/next.config.mjs"
cp "$BASE/tsconfig.json" "$TARGET/tsconfig.json"

# Patch name in package.json
sed -i '' "s/\"name\": \"base-template\"/\"name\": \"${NAME}-template\"/" "$TARGET/package.json"

echo "✅ Scaffolded templates/$NAME/"
echo "   Next: write src/app/globals.css and src/app/page.tsx"

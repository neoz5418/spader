#! /usr/bin/env bash

set -e
set -x

echo "Generating openapi.json from backend"
cd backend
uv run python -c "import main; import json; print(json.dumps(main.app.openapi()))" > ../openapi.json
cd ..
node frontend/modify-openapi-operationids.js


echo "Generating client for frontend"
cp openapi.json frontend/
cd frontend
npx kubb --config kubb.config.ts
npx biome format --write ./src/gen

echo "Cleaning up error generating"
if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    find src/gen -type f -exec sed -i '' 's/\[object, Object\]/{}/g' {} +
else
    # Linux and others
    find src/gen -type f -exec sed -i 's/\[object, Object\]/{}/g' {} +
fi 

cd ..

echo "Cleaning up"
rm openapi.json

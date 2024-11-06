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
cd ..

echo "Cleaning up"
rm openapi.json

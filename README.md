# Logo Compiler and Renderer

A Compiler and Renderer for the Logo implementation of the XLogoOnline Website

## Prerequisites 

- node
- tsc

## How to Run

Step 2 only needs to be performed for the first time running the project.

1. Navigate to the root folder of the project
2. Run npm ci
3. Run npm build
4. Run npm start and go to http://localhost:3000

For hot reload:

1. Navigate to the root folder of the project
2. Run npm run dev
3. Run npm run start and go to http://localhost:3000

## Project Structure

```text
project-root/
├─ src/
│  ├─ benchmarks/        # Logo benchmark tests
│  ├─ tests/             # Test suite
│  ├─ xLogo_Parser/      # Logo parser and compiler
│  ├─ ActionSet.ts       # Renderer functions
│  ├─ client.ts          # Main file
│  └─ server.ts          # Server entry point
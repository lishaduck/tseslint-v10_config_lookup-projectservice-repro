# typescript-eslint `projectService` + ESLint v10 config lookup repro

## Setup

```sh
npm install
```

## Repro

```sh
npm run repro
```

Expected failure:

```text
packages/b/eslint.config.ts was included by allowDefaultProject but also was found in the project service. Consider removing it from allowDefaultProject
```

## Controls

Each project succeeds by itself:

```sh
npm run control:a-only
npm run control:b-only
```

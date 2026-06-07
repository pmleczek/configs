# @pmleczek/oxlint-config

An opinionated set of Oxlint configuration files for consistent linting settings across projects. Includes:

- Base configuration with strict rule categories
- React / React Native support
- Next.js support
- Node.js support

## Installation

```bash
# npm
npm install -D @pmleczek/oxlint-config
# yarn
yarn add @pmleczek/oxlint-config -D
# bun
bun add @pmleczek/oxlint-config -d
# pnpm
pnpm add -D @pmleczek/oxlint-config
```

## Included configurations

| Export        | Description                                                 |
| ------------- | ----------------------------------------------------------- |
| `base`        | Core linting rules (plugins, categories, overrides)         |
| `react`       | Extends `base` with React, react-perf, and jsx-a11y plugins |
| `reactNative` | Extends `base` with React and react-perf plugins            |
| `next`        | Extends `react` with the Next.js plugin                     |
| `node`        | Extends `base` with the Node.js plugin and node env         |

## Usage

Configuration files must be written in TypeScript (`.ts`) because JSON configs don't support importing from external packages.

`oxlint.config.ts`

```ts
import { base } from "@pmleczek/oxlint-config";
import { defineConfig } from "oxlint";

export default defineConfig({
  extends: [base],
});
```

Or with a framework-specific config:

```ts
import { next } from "@pmleczek/oxlint-config";
import { defineConfig } from "oxlint";

export default defineConfig({
  extends: [next],
});
```

### Extending with custom rules

Use `extends` to layer your own plugins and overrides on top of any provided config:

```ts
import { base } from "@pmleczek/oxlint-config";
import { defineConfig } from "oxlint";

export default defineConfig({
  extends: [base],
  plugins: ["jsdoc"],
  rules: {
    // turn off a base rule
    "eslint/no-magic-numbers": "off",
    // add a rule from a custom plugin
    "jsdoc/require-description": "warn",
  },
});
```

## Configuration reference

You can find more details about rule options in the [official Oxlint documentation](https://oxc.rs/docs/guide/usage/linter).

### Base configuration (`base`)

#### Rule categories

| Category    | Severity  |
| ----------- | --------- |
| correctness | `"error"` |
| suspicious  | `"error"` |
| pedantic    | `"warn"`  |
| perf        | `"error"` |
| style       | `"error"` |
| restriction | `"error"` |
| nursery     | `"warn"`  |

#### Plugins

`eslint`, `typescript`, `unicorn`, `import`, `promise`

#### Rule overrides

| Rule                                              | Value                                |
| ------------------------------------------------- | ------------------------------------ |
| `eslint/init-declarations`                        | `"warn"`                             |
| `eslint/no-implicit-coercion`                     | `["error", { allow: ["!!"] }]`       |
| `eslint/no-magic-numbers`                         | `"warn"`                             |
| `eslint/sort-imports`                             | `"off"`                              |
| `eslint-plugin-import/group-exports`              | `"off"`                              |
| `eslint-plugin-import/no-named-export`            | `"off"`                              |
| `eslint-plugin-import/no-relative-parent-imports` | `"off"`                              |
| `eslint-plugin-import/prefer-default-export`      | `"off"`                              |
| `eslint-plugin-import/unambiguous`                | `"warn"`                             |
| `eslint-plugin-unicorn/filename-case`             | `"off"`                              |
| `eslint-plugin-unicorn/no-null`                   | `"off"`                              |
| `import/no-default-export`                        | `"off"`                              |
| `import/no-unassigned-import`                     | `["error", { allow: ["**/*.css"] }]` |
| `typescript/explicit-function-return-type`        | `"off"`                              |
| `typescript/explicit-module-boundary-types`       | `"off"`                              |

### React configuration (`react`)

Extends `base`. Adds plugins: `react`, `react-perf`, `jsx-a11y`.

| Rule                                     | Value                  |
| ---------------------------------------- | ---------------------- |
| `eslint-plugin-react/react-in-jsx-scope` | `"off"`                |
| `react-perf/jsx-no-new-function-as-prop` | `"warn"`               |
| `react/jsx-filename-extension`           | `"off"`                |
| `react/jsx-max-depth`                    | `["warn", { max: 6 }]` |

### React Native configuration (`reactNative`)

Extends `base`. Adds plugins: `react`, `react-perf`. Same rule overrides as `react` but without `jsx-a11y`.

### Next.js configuration (`next`)

Extends `react`. Adds plugin: `nextjs` with `rootDir` set to `"."`.

### Node.js configuration (`node`)

Extends `base`. Adds plugin: `node` with `node` env enabled.

# @pmleczek/oxfmt-config

An opinionated set of Oxfmt configuration files for consistent formatting settings across projects. Includes:

- Basic Oxfmt configuration
- Import sorting
- Sorting
- Sorting `package.json`

### Installation

```bash
npm install -D @pmleczek/oxfmt-config
yarn add @pmleczek/oxfmt-config -D
bun add @pmleczek/oxmft-config -d
pnpm add -D @pmleczek/oxmft-config
```

### Included configurations

| File              | Description                          |
| ----------------- | ------------------------------------ |
| `base`            |                                      |
| `sortImports`     | Enables sorting imports              |
| `sortPackageJson` | Enables sorting `package.json` fiels |

### Usage

Since Oxfmt doesn't support extending configurations in JSON format (as per [#16394](https://github.com/oxc-project/oxc/issues/16394)) the only way to "extend" a configuration is to use the JS config format and object spreading:

`oxfmt.config.ts`

```ts
import { base } from "@pmleczek/oxfmt-config";
import { defineConfig } from "oxfmt";

export default defineConfig({
  ...base,
  ignorePatterns: ["node_modules/", "**/*.test.tsx"],
});
```

You can combine multiple configs the same way:

```ts
import { base, sortImports, sortPackageJson, sortTailwind } from "@pmleczek/oxfmt-config";
import { defineConfig } from "oxfmt";

export default defineConfig({
  ...base,
  ...sortImports,
  ...sortPackageJson,
  sortTailwindcss: {
    ...sortTailwind,
    stylesheet: "./path/to/stylesheet.css",
  },
  ignorePatterns: ["node_modules/", "**/*.test.tsx"],
});
```

**IMPORTANT**: Using Tailwind CSS class sorting might require you to pass additional options for proper resolution:

- `configPath` - path to your Tailwind config file (defaults to `tailwind.config.js`) for Tailwind CSS v3
- `stylesheet` - path to your Tailwind stylesheet (defaults to the default `theme.css` file) for Tailwind CSS v4

### Configuration reference

You can find more details about coniguration options in the [official Oxfmt documentation](https://oxc.rs/docs/guide/usage/formatter/config-file-reference.html)

#### Base configuration (`base`)

| Option                            | Value               |
| --------------------------------- | ------------------- |
| arrowParens                       | `"always"`          |
| bracketSameLine                   | `false`             |
| bracketSpacing                    | `true`              |
| embeddedLanguageFormatting        | `"auto"`            |
| endOfLine                         | `"lf"`              |
| htmlWhitespaceSensitivity         | `"css"`             |
| ignorePatterns                    | `["node_modules/"]` |
| insertFinalNewline                | `true`              |
| jsdoc.addDefaultToDescription     | `true`              |
| jsdoc.bracketSpacing              | `true`              |
| jsdoc.capitalizeDescriptions      | `true`              |
| jsdoc.commentLineStrategy         | `"singleLine"`      |
| jsdoc.descriptionTag              | `false`             |
| jsdoc.descriptionWithDot          | `false`             |
| jsdoc.keepUnparsableExampleIndent | `false`             |
| jsdoc.lineWrappingStyle           | `"greedy"`          |
| jsdoc.preferCodeFences            | `false`             |
| jsdoc.separateReturnsFromParam    | `false`             |
| jsdoc.separateTagGroups           | `false`             |
| jsxSingleQuote                    | `false`             |
| objectWrap                        | `"preserve"`        |
| overrides                         | `[]`                |
| printWidth                        | `80`                |
| proseWrap                         | `"preserve"`        |
| quoteProps                        | `"as-needed"`       |
| semi                              | `true`              |
| singleAttributePerLine            | `false`             |
| singleQuote                       | `true`              |
| tabWidth                          | `2`                 |
| trailingComma                     | `"all"`             |
| useTabs                           | `false`             |

#### Import sorting (`sortImports`)

| Option                      | Value             |
| --------------------------- | ----------------- |
| sortImports                 | `true` (inferred) |
| sortImports.newlinesBetween | `true`            |
| sortImports.groups          | See below         |

The order of import sorting is defined by `sortImports.group` option as follows. Each group is separated by new lines:

- Side effects (both JS and style side effects)
- External value and type imports
- Internal value and type imports
- Unknown imports (fallback if import isn't classified as any of the above)

Example:

```tsx
// Side effects
import "./setup";
import "./styles.css";

// External imports
import type { FC } from "react";
import React from "react";
import lodash from "lodash";

// Internal imports
import { helper } from "../utils";
import { Button } from "./Button";
```

#### `package.json` sorting (`sortPackageJson`)

| Option                      | Value             |
| --------------------------- | ----------------- |
| sortPackageJson             | `true` (inferred) |
| sortPackageJson.sortScripts | `true`            |

#### Tailwind CSS class sorting (`sortTailwind`)

| Option             | Value                         |
| ------------------ | ----------------------------- |
| attributes         | `[]`                          |
| functions          | `["clsx", "cn", "cva", "tw"]` |
| preserveDuplicates | `false`                       |
| preserveWhitespace | `true`                        |

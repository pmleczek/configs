# @pmleczek/tsconfig

An opinionated set of TypeScript configuration files for consistent compiler settings across projects

## Installation

```bash
# npm
npm install -D @pmleczek/tsconfig
# yarn
yarn add @pmleczek/tsconfig -D
# bun
bun add @pmleczek/tsconfig -d
# pnpm
pnpm add -D @pmleczek/tsconfig
```

## Included files

| File           | Use for                         | Key additions over `base`                                   |
| -------------- | ------------------------------- | ----------------------------------------------------------- |
| `base`         | Generic foundation              | strict, verbatimModuleSyntax, resolveJsonModule, ES2022     |
| `edge`         | Edge function environments      | `noEmit: true`                                              |
| `library`      | Publishing npm packages         | `declaration`, `declarationMap`, `sourceMap`, NodeNext      |
| `nextjs`       | Next.js App Router              | DOM libs, `jsx: preserve`, `allowJs`, `incremental`, noEmit |
| `node`         | Node.js services and scripts    | NodeNext module resolution                                  |
| `react`        | React apps and libraries        | DOM libs, `jsx: react-jsx`, `allowImportingTsExtensions`    |
| `react-native` | React Native apps and libraries | `jsx: react-native`, `allowImportingTsExtensions`           |

## Usage

Extend the config in your `tsconfig.json`:

```json
{
  "extends": "@pmleczek/tsconfig/react",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": ["src"]
}
```

## Requirements

- Node.js >= 24
- TypeScript >= 5.x

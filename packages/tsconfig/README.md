# @pmleczek/tsconfig

An opinionated set of TypeScript configuration files for consistent compiler settings across projects

### Installation

```bash
npm install -D @pmleczek/tsconfig
yarn add @pmleczek/tsconfig -D
bun add @pmleczek/tsconfig -d
pnpm add -D @pmleczek/tsconfig
```

### Included files

| File           | Extends | Use for                         |
| -------------- | ------- | ------------------------------- |
| `base`         | `base`  | Generic foundation file         |
| `edge`         | `base`  | Edge function environments      |
| `library`      | `base`  | Publishing npm packages         |
| `next`         | `base`  | Next.js App Router              |
| `node`         | `base`  | Node.js services and scripts    |
| `react-native` | `base`  | React Native apps and libraries |
| `react`        | `base`  | React apps and libraries        |

### Usage

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

<!-- TODO: Add section about requirements or important notes -->

import { defineConfig } from "oxlint";

export const base = defineConfig({
  categories: {
    correctness: "error",
    suspicious: "error",
    pedantic: "warn",
    perf: "error",
    style: "error",
    restriction: "error",
    nursery: "warn",
  },
  ignorePatterns: ["node_modules/"],
  plugins: ["eslint", "typescript", "unicorn", "import", "promise"],
  rules: {
    "eslint/init-declarations": "warn",
    "eslint/no-implicit-coercion": ["error", { allow: ["!!"] }],
    "eslint/no-magic-numbers": "warn",
    "eslint/sort-imports": "off",
    "eslint-plugin-import/group-exports": "off",
    "eslint-plugin-import/no-named-export": "off",
    "eslint-plugin-import/no-relative-parent-imports": "off",
    "eslint-plugin-import/prefer-default-export": "off",
    "eslint-plugin-import/unambiguous": "warn",
    "eslint-plugin-unicorn/filename-case": "off",
    "eslint-plugin-unicorn/no-null": "off",
    "import/no-default-export": "off",
    "import/no-unassigned-import": ["error", { allow: ["**/*.css"] }],
    "typescript/explicit-function-return-type": "off",
    "typescript/explicit-module-boundary-types": "off",
  },
});

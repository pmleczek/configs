import { defineConfig } from "oxlint";
import { base } from "./base";

export const react = defineConfig({
  extends: [base],
  plugins: ["react", "react-perf", "jsx-a11y"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "eslint-plugin-react/react-in-jsx-scope": "off",
    "react-perf/jsx-no-new-function-as-prop": "warn",
    "react/jsx-filename-extension": "off",
    "react/jsx-max-depth": ["warn", { max: 6 }],
  },
});

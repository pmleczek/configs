import { defineConfig } from "oxlint";
import { base } from "./base.ts";

export const reactNative = defineConfig({
  extends: [base],
  plugins: ["react", "react-perf"],
  rules: {
    "eslint-plugin-react/react-in-jsx-scope": "off",
    "react-perf/jsx-no-new-function-as-prop": "warn",
    "react/jsx-filename-extension": "off",
    "react/jsx-max-depth": ["warn", { max: 6 }],
  },
});

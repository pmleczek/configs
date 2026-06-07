import { defineConfig } from "oxlint";
import { base } from "./base";

export const node = defineConfig({
  extends: [base],
  plugins: ["node"],
  env: {
    node: true,
  },
});

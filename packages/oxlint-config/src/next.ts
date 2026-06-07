import { defineConfig } from "oxlint";
import { react } from "./react.ts";

export const next = defineConfig({
  extends: [react],
  plugins: ["nextjs"],
  settings: {
    next: {
      rootDir: ".",
    },
  },
});

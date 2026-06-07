import { defineConfig } from "oxlint";
import { react } from "./react";

export const next = defineConfig({
  extends: [react],
  plugins: ["nextjs"],
  settings: {
    next: {
      rootDir: ".",
    },
  },
});

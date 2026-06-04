import { defineConfig } from "oxfmt";

export const sortTailwind = defineConfig({
  sortTailwindcss: {
    attributes: [],
    functions: ["clsx", "cn", "cva", "tw"],
    preserveDuplicates: false,
    preserveWhitespace: true,
  },
});

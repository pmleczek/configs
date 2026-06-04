import { defineConfig } from "oxfmt";

export const sortImports = defineConfig({
  sortImports: {
    newlinesBetween: true,
    groups: [
      ['side_effect_style', 'side_effect'],
      ['type-external', 'value-external'],
      [
        'type-parent',
        'type-sibling',
        'type-index',
        'value-parent',
        'value-sibling',
        'value-index',
      ],
      'unknown',
    ],
  },
});

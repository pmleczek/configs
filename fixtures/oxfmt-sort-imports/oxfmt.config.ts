import { base, sortImports } from '@pmleczek/oxfmt-config';
import { defineConfig } from 'oxfmt';

export default defineConfig({
  ...base,
  ...sortImports,
});

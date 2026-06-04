import { base, sortPackageJson } from '@pmleczek/oxfmt-config';
import { defineConfig } from 'oxfmt';

export default defineConfig({
  ...base,
  ...sortPackageJson,
});

export type EdgeResult = { ok: true; region: string };

export const run = (region: string): EdgeResult => ({
  ok: true,
  region,
});

/**
 * Validates A/B bucketing-like scenario
 */
export interface Experiment {
  id: string;
  variants: readonly [string, ...string[]];
  salt?: string;
}

const hash = (input: string): number => [...input].reduce((acc, c) => acc + c.charCodeAt(0), 0);

export const assignVariant = (userId: string, variants: readonly [string, ...string[]]): string =>
  variants[hash(userId) % variants.length] ?? variants[0];

export const getExperimentVariant = (userId: string, experiment: Experiment): string => {
  const key = experiment.salt !== undefined ? `${userId}:${experiment.salt}` : userId;
  return assignVariant(key, experiment.variants);
};

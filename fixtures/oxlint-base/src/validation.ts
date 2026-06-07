export const isEmail = (value: string): boolean =>
  /^[\w.+-]+@[\w-]+\.[a-z]{2,}$/i.test(value);

export const parsePort = (value: string): number => +value;

export const isValidScore = (score: number): boolean =>
  score >= 0 && score <= 100;

// @ts-expect-error — 'extra' is declared but never used
export const greet = (name: string, extra: number): string => `hello ${name}`;

export const greetSafe = (name: string, _extra: number): string => `hello ${name}`; // ✓ _ prefix

export const compute = (): number => {
  // @ts-expect-error — 'local' is declared but never read
  const local = 42;
  return 0;
};

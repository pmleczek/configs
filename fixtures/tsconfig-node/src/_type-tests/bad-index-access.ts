const arr = [1, 2, 3];

// @ts-expect-error — noUncheckedIndexedAccess
export const unsafe: number = arr[0];

export const safe: number = arr[0] ?? 0;

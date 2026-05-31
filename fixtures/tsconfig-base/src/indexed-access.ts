const arr = [1, 2, 3];
const map: Record<string, number> = {};

// @ts-expect-error — arr[0] is number | undefined, not number
export const unsafe: number = arr[0];

export const safe: number = arr[0] ?? 0;
export const fromMap: number = map["key"] ?? 0;

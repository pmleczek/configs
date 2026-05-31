const nums = [1, 2, 3, 4, 5];

export const lastEven = nums.findLast((n) => n % 2 === 0); // number | undefined
export const lastEvenIndex = nums.findLastIndex((n) => n % 2 === 0); // number
export const sorted = nums.toSorted((a, b) => b - a); // [5, 4, 3, 2, 1]
export const reversed = nums.toReversed(); // [5, 4, 3, 2, 1]
export const replaced = nums.with(0, 99); // [99, 2, 3, 4, 5]

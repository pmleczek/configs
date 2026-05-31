import type { PaginationOptions } from "./pagination.js";

// exactOptionalPropertyTypes — cursor must be string when present, not undefined
export const validOptions: PaginationOptions = { page: 1, limit: 10 };
export const withCursor: PaginationOptions = { page: 1, limit: 10, cursor: "abc" };

// @ts-expect-error — cursor: undefined is not assignable (exactOptionalPropertyTypes)
export const invalidCursor: PaginationOptions = { page: 1, limit: 10, cursor: undefined };

// noUncheckedIndexedAccess — array index returns T | undefined
const arr = [1, 2, 3];

// @ts-expect-error — arr[0] is number | undefined, not number
export const unsafeAccess: number = arr[0];

export const safeAccess: number = arr[0] ?? 0; // ✓

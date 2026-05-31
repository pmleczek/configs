import type { Config } from "./types"; // ✓ type-only import

// @ts-expect-error — Config is never used as a value, must use 'import type'
import { Config as BadImport } from "./types";

export type { Config };
export type { BadImport };

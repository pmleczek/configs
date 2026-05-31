import type { Result } from "./result.js";
import { ok, err } from "./result.js";

export type Validator<T> = (input: unknown) => Result<T>;

export const string: Validator<string> = (input) =>
  typeof input === "string" ? ok(input) : err(new Error(`Expected string, got ${typeof input}`));

export const number: Validator<number> = (input) =>
  typeof input === "number" && !Number.isNaN(input)
    ? ok(input)
    : err(new Error(`Expected number, got ${typeof input}`));

export const optional =
  <T>(validator: Validator<T>): Validator<T | undefined> =>
  (input) =>
    input === undefined ? ok(undefined) : validator(input);

export const refine =
  <T>(validator: Validator<T>, predicate: (value: T) => boolean, message: string): Validator<T> =>
  (input) => {
    const result = validator(input);
    if (!result.ok) return result;
    return predicate(result.value) ? ok(result.value) : err(new Error(message));
  };

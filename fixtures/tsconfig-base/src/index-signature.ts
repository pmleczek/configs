interface Headers {
  [key: string]: string;
}
declare const headers: Headers;

export const ct = headers["content-type"]; // ✓
// @ts-expect-error — dot notation not allowed on index signatures
export const bad = headers.authorization;

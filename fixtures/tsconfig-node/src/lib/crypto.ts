import { createHash, randomUUID } from "node:crypto";

export const sha256 = (input: string): string =>
  createHash("sha256").update(input).digest("hex");

export const generateId = (): string => randomUUID();

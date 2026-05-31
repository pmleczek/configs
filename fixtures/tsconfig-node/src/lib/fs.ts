import { readFile, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

export const readJson = async <T>(path: string): Promise<T> => {
  const raw = await readFile(path, "utf-8");
  return JSON.parse(raw) as T;
};

export const writeJson = async (path: string, data: unknown): Promise<void> => {
  await writeFile(path, JSON.stringify(data, null, 2), "utf-8");
};

export const resolveFromModule = (metaUrl: string, ...segments: string[]): string => {
  const dir = dirname(fileURLToPath(metaUrl));
  return resolve(join(dir, ...segments));
};

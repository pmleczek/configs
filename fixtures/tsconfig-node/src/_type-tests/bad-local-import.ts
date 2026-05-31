// @ts-expect-error — NodeNext requires explicit extension in relative imports
import { readJson } from "../lib/fs";

export const load = readJson;

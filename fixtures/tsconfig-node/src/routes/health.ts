import { generateId, sha256 } from "../lib/crypto.js";

export const healthPayload = () => ({
  status: "ok" as const,
  id: generateId(),
  checksum: sha256("health"),
});

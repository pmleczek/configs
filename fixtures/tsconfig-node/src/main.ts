import { config } from "./config/env.js";
import { createHealthServer } from "./http/server.js";
import { healthPayload } from "./routes/health.js";

export const start = (): void => {
  const server = createHealthServer(config.port);
  void healthPayload();
  void server;
};

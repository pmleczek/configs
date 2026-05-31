import { createServer, type IncomingMessage, type ServerResponse } from "node:http";

export const createHealthServer = (port: number) =>
  createServer((_req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ status: "ok" }));
  }).listen(port);

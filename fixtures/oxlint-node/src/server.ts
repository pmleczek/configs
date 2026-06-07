export interface HealthPayload {
  status: "ok" | "degraded";
  uptime: number;
  version: string;
}

export const buildHealthPayload = (version: string): HealthPayload => ({
  status: "ok",
  uptime: process.uptime(),
  version,
});

export const getMemoryMb = (): number =>
  Math.round(process.memoryUsage().heapUsed / (1024 * 1024));

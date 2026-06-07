export const getPort = (): number => {
  const raw = process.env["PORT"];
  return raw ? Number(raw) : 3000;
};

export const getNodeEnv = (): string =>
  process.env["NODE_ENV"] ?? "development";

export const isProd = (): boolean => getNodeEnv() === "production";

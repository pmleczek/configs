export interface CacheDirectives {
  maxAge: number;
  staleWhileRevalidate?: number;
  staleIfError?: number;
  private?: boolean;
  immutable?: boolean;
}

export const buildCacheHeader = (directives: CacheDirectives): string => {
  const parts: string[] = [`max-age=${directives.maxAge}`];

  if (directives.staleWhileRevalidate !== undefined)
    parts.push(`stale-while-revalidate=${directives.staleWhileRevalidate}`);
  if (directives.staleIfError !== undefined)
    parts.push(`stale-if-error=${directives.staleIfError}`);
  if (directives.private === true) parts.push("private");
  if (directives.immutable === true) parts.push("immutable");

  return parts.join(", ");
};

export const getLatestMaxAge = (
  history: Array<{ appliedAt: number; directives: CacheDirectives }>,
): number | undefined =>
  history.findLast((entry) => entry.directives.maxAge > 0)?.directives.maxAge;

export const PRESETS = {
  static: { maxAge: 31_536_000, immutable: true },
  dynamic: { maxAge: 0, staleWhileRevalidate: 60 },
  api: { maxAge: 10, staleWhileRevalidate: 30 },
} satisfies Record<string, CacheDirectives>;

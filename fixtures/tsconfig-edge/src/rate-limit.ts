export interface RateLimitState {
  tokens: number;
  lastRefillMs: number;
}

export interface RateLimitConfig {
  maxTokens: number;
  refillPerSecond: number;
}

export interface RateLimitResult {
  allowed: boolean;
  remainingTokens: number;
  nextState: RateLimitState;
}

export const createState = (maxTokens: number): RateLimitState => ({
  tokens: maxTokens,
  lastRefillMs: Date.now(),
});

export const checkRateLimit = (
  state: RateLimitState,
  config: RateLimitConfig,
  nowMs: number,
): RateLimitResult => {
  const elapsed = (nowMs - state.lastRefillMs) / 1000;
  const tokens = Math.min(config.maxTokens, state.tokens + elapsed * config.refillPerSecond);

  if (tokens < 1) {
    return { allowed: false, remainingTokens: tokens, nextState: { tokens, lastRefillMs: nowMs } };
  }

  return {
    allowed: true,
    remainingTokens: tokens - 1,
    nextState: { tokens: tokens - 1, lastRefillMs: nowMs },
  };
};

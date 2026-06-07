export interface Job {
  id: string;
  payload: unknown;
  retries: number;
}

export const createJob = (id: string, payload: unknown): Job => ({
  id,
  payload,
  retries: 0,
});

export const shouldRetry = (job: Job): boolean => job.retries < 3;

export const dump = (job: Job): void => {
  debugger;
};

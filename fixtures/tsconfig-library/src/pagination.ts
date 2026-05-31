export interface PaginationOptions {
  page: number;
  limit: number;
  cursor?: string;
}

export interface Page<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  hasNext: boolean;
  hasPrev: boolean;
}

export const paginate = <T>(items: T[], options: PaginationOptions): Page<T> => {
  const { page, limit } = options;
  const start = (page - 1) * limit;

  return {
    items: items.slice(start, start + limit),
    total: items.length,
    page,
    limit,
    hasNext: start + limit < items.length,
    hasPrev: page > 1,
  };
};

export const groupBy = <T>(list: T[], key: keyof T): Record<string, T[]> =>
  list.reduce((acc, item) => {
    const valueKey = String(item[key]);

    if (!Array.isArray(acc[valueKey])) acc[valueKey] = [];
    (acc[valueKey] as T[]).push(item);

    return acc;
  }, {} as Record<string, T[]>);

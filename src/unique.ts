export const unique = (
  items: any[],
  cb: Function = (value: any) => value
): any[] => {
  const localMap = new Map();
  items.forEach(element => {
    const result = cb(element);
    if (localMap.has(result)) return;
    localMap.set(result, element);
  });
  return Array.from(localMap.values());
};

export const groupBy = (list, key) => list.reduce((acc, item) => {
    const valueKey = String(item[key]);
    if (!Array.isArray(acc[valueKey]))
        acc[valueKey] = [];
    acc[valueKey].push(item);
    return acc;
}, {});

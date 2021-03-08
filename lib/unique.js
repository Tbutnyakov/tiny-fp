export const unique = (items, cb = (value) => value) => {
    const localMap = new Map();
    items.forEach(element => {
        const result = cb(element);
        if (localMap.has(result))
            return;
        localMap.set(result, element);
    });
    return Array.from(localMap.values());
};

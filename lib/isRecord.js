export const isRecord = (value) => {
    const type = typeof value;
    if (Array.isArray(value))
        return false;
    return value != null && Object.is(type, 'object');
};

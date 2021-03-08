import { isString } from './isString';
export const last = (entity) => {
    const lastIndex = entity.length - 1;
    return isString(entity)
        ? entity.charAt(lastIndex)
        : entity[lastIndex];
};

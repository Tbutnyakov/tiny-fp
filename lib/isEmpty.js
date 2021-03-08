import { isRecord } from './isRecord';
import { isArray } from './isArray';
import { isString } from './isString';
export const isEmpty = (target) => {
    if (!target)
        return true;
    if (isArray(target) || isString(target))
        return Object.is(target.length, 0);
    if (isRecord(target))
        return (Object.is(Object.keys(target).length, 0) &&
            Object.is(target.constructor, Object));
    return false;
};

import { curry } from './curry';
import { isObject } from './isObject';
export const isEqual = curry((first, second) => {
    if (Object.is(first, second))
        return true;
    if (isObject(first) && isObject(second)) {
        if (Object.keys(first).length !== Object.keys(second).length)
            return false;
        for (let prop in first) {
            if (!isEqual(first[prop], second[prop]))
                return false;
        }
        return true;
    }
    return false;
});

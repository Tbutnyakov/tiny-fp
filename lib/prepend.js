import { curry } from './curry';
import { isArray } from './isArray';
export const prepend = curry((value, target) => isArray(target)
    ? [value, ...target]
    : value.concat(target));

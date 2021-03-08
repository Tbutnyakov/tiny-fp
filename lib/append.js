import { curry } from './curry';
import { isArray } from './isArray';
export const append = curry((value, target) => isArray(target)
    ? [...target, value]
    : target.concat(value));

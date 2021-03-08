import { isString } from './isString';
export const head = (entity) => isString(entity) ? entity.charAt(0) : entity[0];

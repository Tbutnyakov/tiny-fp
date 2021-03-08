import { isArray } from './isArray';
const randomInt = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));
const getRandomFromArray = (arr) => arr[randomInt(0, arr.length - 1)];
export const random = (a, b) => isArray(a)
    ? getRandomFromArray(a)
    : randomInt(a, (b || a));

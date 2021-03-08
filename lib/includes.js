import { curry } from './curry';
export const includes = curry((targetValue, targetIterable) => targetIterable.includes(targetValue));

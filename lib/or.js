import { curry } from './curry';
export const or = curry((a, b) => a || b);

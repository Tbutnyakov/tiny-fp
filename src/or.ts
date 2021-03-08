import { curry } from './curry';

export const or = curry(<A, B>(a: A, b: B) => a || b);

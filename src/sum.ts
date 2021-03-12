import { curry } from './curry';

export const sum = curry((first: number, second: number) => first + second);

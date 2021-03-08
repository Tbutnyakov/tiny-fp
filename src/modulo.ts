import { curry } from './curry';

export const modulo = curry((first: number, second: number) => first % second);

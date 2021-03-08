import { curry } from './curry';
export const prop = curry((propName, target) => target[propName]);

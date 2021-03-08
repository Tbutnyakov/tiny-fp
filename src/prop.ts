import { curry } from './curry';

export const prop = curry(
  <A extends keyof B, B>(propName: A, target: B) => target[propName]
);

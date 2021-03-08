import { curry } from './curry';

export const includes = curry(<T>(targetValue: T, targetIterable: T[]) =>
  targetIterable.includes(targetValue)
);

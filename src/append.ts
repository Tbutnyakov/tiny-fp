import { curry } from './curry';
import { isArray } from './isArray';

export const append = curry(<A>(value: A, target: any[] | string) =>
  isArray(target)
    ? [...target, value]
    : target.concat((value as unknown) as string)
);

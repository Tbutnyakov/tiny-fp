import { curry } from './curry';
import { isArray } from './isArray';

export const prepend = curry(<A>(value: A, target: any[] | string) =>
  isArray(target)
    ? [value, ...target]
    : ((value as unknown) as string).concat(target as string)
);

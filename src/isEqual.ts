import { curry } from './curry';

export const isEqual = curry(<A, B>(first: A, second: B) =>
  Object.is(JSON.stringify(first), JSON.stringify(second))
);

// have not time for func comparison

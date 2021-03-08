import { curry } from './curry';
export const isEqual = curry((first, second) => Object.is(JSON.stringify(first), JSON.stringify(second)));
// have not time for func comparison

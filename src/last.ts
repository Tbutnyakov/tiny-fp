import { isString } from './isString';

type lastType = {
  <T>(x: T[]): T;
  (x: String): String;
};

export const last: lastType = <T>(entity: T[] | String) => {
  const lastIndex = entity.length - 1;
  return isString(entity)
    ? (entity as String).charAt(lastIndex)
    : entity[lastIndex];
};

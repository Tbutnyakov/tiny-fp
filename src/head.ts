import { isString } from './isString';

type headType = {
  <T>(x: T[]): T;
  (x: String): String;
};

export const head: headType = <T>(entity: T[] | String) =>
  isString(entity) ? (entity as String).charAt(0) : entity[0];

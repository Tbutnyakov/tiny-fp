import { isArray } from './isArray';

type randomType = {
  <T>(a: T[]): T;
  (a: number, b: number): number;
};

const randomInt = (min: number, max: number) =>
  Math.floor(min + Math.random() * (max + 1 - min));

const getRandomFromArray = <T>(arr: T[]) => arr[randomInt(0, arr.length - 1)];

export const random: randomType = <T>(a: number | T[], b?: number) =>
  isArray(a)
    ? getRandomFromArray(a as T[])
    : randomInt(a as number, (b || a) as number);

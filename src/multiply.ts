import { curry } from "./curry";

export const multiply = curry((first: number, second: number) => first * second);
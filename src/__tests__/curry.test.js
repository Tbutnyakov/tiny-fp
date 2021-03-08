const { curry } = require('../curry');

const add3 = (a, b, c) => a + b + c;
const curriedAdd = curry(add3);

describe('Curry function', () => {
  it('should return a function', () =>
    expect(typeof curry(add3)).toBe('function'));

  it('should return the proper result if called with original number of arguments', () =>
    expect(curriedAdd(1, 2, 3)).toBe(6));

  it('should return the curried function when arguments count is less than the original number of arguments', () => {
    expect(typeof curriedAdd(1, 2)).toBe('function');
  });

  it('should return the result whenever the total number of arguments is greater than or equal to the original number of arguments', () => {
    expect(typeof curriedAdd(1)(2)).toBe('function');
    expect(curriedAdd(1)(2)(3)).toBe(6);
    expect(curriedAdd(1, 2)(3)).toBe(6);
    expect(curriedAdd(1)(2, 3)).toBe(6);
    expect(curriedAdd(1, 2)(3, 4, 5, 6, 7)).toBe(6);
  });

  it('should support creating multple curry functions', () => {
    const curryA = curry(add3);
    const curryB = curry(add3);

    expect(curryA(1, 2)(3)).toBe(6);
    expect(typeof curryA(1, 2)).toBe('function');

    expect(curryB(1)(2)(3)).toBe(6);
    expect(typeof curryB(1)(2)).toBe('function');
  });
});

const { pipe } = require('../pipe');

describe('pipe func', () => {
  test('should call all functions', () => {
    const testFn1 = jest.fn();
    const testFn2 = jest.fn();
    const testFn3 = jest.fn();

    const testArg1 = 'hello';

    pipe(testFn1, testFn2, testFn3)(testArg1);

    expect(testFn1).toHaveBeenCalledTimes(1);
    expect(testFn2).toHaveBeenCalledTimes(1);
    expect(testFn3).toHaveBeenCalledTimes(1);
    expect(testFn1).toHaveBeenCalledWith(testArg1);
  });
});

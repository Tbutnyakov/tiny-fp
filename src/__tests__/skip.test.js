const { skip } = require('../skip');

const testFn = jest.fn();
const testArg = 'hello kitty';

describe('skip function', () => {
  it('should return a funciton', () => {
    expect(typeof skip(2, () => {})).toBe('function');
  });

  it('testFn shoul be called two times', () => {
    const targetFn = skip(3, testFn);
    targetFn(testArg);
    targetFn(testArg);
    targetFn(testArg);
    targetFn(testArg);
    targetFn(testArg);
    expect(testFn).toHaveBeenCalledTimes(2);
    expect(testFn).toHaveBeenCalledWith(testArg);
  });
});

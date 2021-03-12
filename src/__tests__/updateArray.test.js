const { updateArray } = require('../updateArray');

const getSamples = () => ({
  one: [{ foo: 'bar' }, 1, 213],
  replace: 'hello',
});

describe('testArray func', () => {
  test('Should replace one array for another', () => {
    const testArr = getSamples().one;
    const testReplace = getSamples().replace;

    expect(updateArray(testArr, 1, testReplace)).toEqual([
      testArr[0],
      testReplace,
      testArr[2],
    ]);
  });
  test('Should replace one array for another and return new array', () => {
    const testArr = getSamples().one;
    const testReplace = getSamples().replace;

    expect(updateArray(testArr, 1, testReplace) !== testArr).toBe(true);
  });
  test('Should place element in the end of the arr if passed hightValye key', () => {
    const testArr = getSamples().one;
    const testReplace = getSamples().replace;
    const notExistentValue = getSamples().one.length * 2;

    expect(updateArray(testArr, notExistentValue, testReplace)).toEqual([
      ...testArr,
      testReplace,
    ]);
  });
});

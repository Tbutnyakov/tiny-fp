const { isEqual } = require('../isEqual');

describe('isEqual func', () => {
  test('should correct compare primitives', () => {
    expect(isEqual(1, 2)).toBe(false);
    expect(isEqual('1', 1)).toBe(false);
    expect(isEqual(undefined, null)).toBe(false);
    expect(isEqual(NaN, null)).toBe(false);
    expect(isEqual('', ' ')).toBe(false);
    expect(isEqual(undefined, undefined)).toBe(true);
    expect(isEqual(1, 1)).toBe(true);
    expect(isEqual(NaN, NaN)).toBe(true);
    expect(isEqual(null, null)).toBe(true);
  });
  test('should correct compare arrays', () => {
    expect(isEqual([1, 2, 3], [1, 2, 3, 4])).toBe(false);
    expect(isEqual([1, 3, 2], [1, 2, 3, 4])).toBe(false);
    expect(isEqual([1, 2, 3], [1, 2, 3])).toBe(true);
  });
  test('should correct compare records', () => {
    expect(
      isEqual([{ foo: 'foo', bar: 'bar' }], {
        foo: 'foo',
        bar: 'bar',
        hello: 'world',
      })
    ).toBe(false);
    expect(
      isEqual({ foo: 'foo', bar: 'bar' }, { foo: 'foo', bar: 'bar' })
    ).toBe(true);
    expect(
      isEqual({ foo: 'foo', bar: 'bar' }, { bar: 'bar', foo: 'foo' })
    ).toBe(true);
  });
  test('should correct compare nested records', () => {
    const firstObject = { foo: 'foo', bar: 'bar' };
    const secondObject = {
      foo: 'foo',
      bar: 'bar',
      hello: 'world',
    };
    expect(
      isEqual(
        { firstObject: { ...firstObject, test: 'test' }, secondObject },
        {
          firstObject,
          secondObject,
        }
      )
    ).toBe(false);
    expect(
      isEqual(
        { firstObject, secondObject },
        {
          firstObject,
          secondObject,
        }
      )
    ).toBe(true);
  });
});

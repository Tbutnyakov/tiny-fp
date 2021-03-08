const { Maybe, maybe } = require('../maybe');

describe('Maybe function', () => {
  it('should return an object', () =>
    expect(typeof maybe('foo')).toBe('object'));
  it('maybe of foo should be and foo', () =>
    expect(maybe('foo').join()).toBe('foo'));
  it('maybe of undefined should be a nothing', () =>
    expect(maybe().isNothing()).toBe(true));
  it('maybe of sum of 2 should be a 4', () =>
    expect(maybe(2).chain(sum => sum + 2)).toBe(4));
  it('maybe of sum of some values and undefined should be nothing', () =>
    expect(
      maybe()
        .map(sum => sum + 2)
        .map(sum => sum + 3)
        .map(sum => sum + 4)
        .isNothing()
    ).toBe(true));
  it('maybe of nothing should use default orElse value', () =>
    expect(
      maybe()
        .map(sum => sum + 2)
        .orElse('So we can chose another way')
        .join()
    ).toBe('So we can chose another way'));

  it('maybe ap should work correctly with Just value', () =>
    expect(
      maybe(val => val + 2)
        .ap(Maybe.of(2))
        .join()
    ).toBe(4));

  it('maybe ap should work correctly with Nothing value', () =>
    expect(
      maybe(val => val + 2)
        .ap(Maybe.of(undefined))
        .join()
    ).toBe(undefined));
});

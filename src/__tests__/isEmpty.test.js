const { isEmpty } = require('../isEmpty');

describe('isEmpty func', () => {
  test('should return true if empties passed', () => {
    expect(isEmpty([])).toBe(true);

    expect(isEmpty('')).toBe(true);
    expect(isEmpty({})).toBe(true);
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
    expect(isEmpty(NaN)).toBe(true);
  });
  test('should return false if not emtpies passed', () => {
    expect(isEmpty([1])).toBe(false);
    expect(isEmpty(' ')).toBe(false);
    expect(isEmpty({ as: 'fpp' })).toBe(false);
    expect(isEmpty(2)).toBe(false);
  });
});

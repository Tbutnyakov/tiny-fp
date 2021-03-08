const { isArray } = require('../isArray');

describe('isArray func', () => {
  test('should return true if array passed', () => {
    expect(isArray([])).toBe(true);
  });
});

const { isRecord } = require('../isRecord');

describe('isRecord func', () => {
  test('should work properly', () => {
    expect(isRecord('test')).toBe(false);
    expect(isRecord(32)).toBe(false);
    expect(isRecord(null)).toBe(false);
    expect(isRecord(undefined)).toBe(false);
    expect(isRecord([])).toBe(false);
    expect(isRecord(() => {})).toBe(false);

    expect(isRecord({})).toBe(true);
  });
});

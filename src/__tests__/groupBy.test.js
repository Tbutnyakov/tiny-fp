const { groupBy } = require('../groupBy');

describe('groupBy func', () => {
  test('should group into object by key', () => {
    const test = [
      { id: 1, title: 'hello' },
      { id: 2, title: 'world' },
      { id: 3, title: 'hello' },
      { id: 4, title: 'world' },
      { id: 5, title: 'world' },
    ];
    const result = groupBy(test, 'title');
    expect(Object.keys(result)).toEqual(['hello', 'world']);
    expect(result.world).toHaveLength(3);

    expect(groupBy([], 'test')).toEqual({});
  });
});

const { reorderArray } = require('../reorderArray');

describe('reorderArray', () => {
  const findElementIndex = (elements, id) =>
    elements.findIndex(el => Object.is(el.id, id));
  test('should create a new array with new order of elements based on oldIndex and newIndex', () => {
    const testArr = [{ id: 299 }, { id: 399 }, { id: 499 }, { id: 599 }];

    const testResult1 = reorderArray({
      items: [...testArr],
      oldIndex: 3,
      newIndex: 1,
    });
    const testResult2 = reorderArray({
      items: [...testArr],
      oldIndex: 1,
      newIndex: 3,
    });
    const testResult3 = reorderArray({
      items: [...testArr],
      oldIndex: 1,
      newIndex: 1,
    });

    expect(Array.isArray(testResult1)).toBe(true);
    expect(testResult1).toHaveLength(testArr.length);

    expect(findElementIndex(testResult1, 599)).toBe(1);
    expect(findElementIndex(testResult2, 599)).toBe(2);
    expect(findElementIndex(testResult3, 399)).toBe(1);
  });
});

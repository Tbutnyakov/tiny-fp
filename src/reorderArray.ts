export const reorderArray = <T>({
  items,
  oldIndex,
  newIndex,
}: {
  items: T[];
  oldIndex: number;
  newIndex: number;
}) => {
  const newItems = [...items];

  if (Object.is(oldIndex, newIndex)) return newItems;

  const movedAddress = newItems[oldIndex];
  const remainingItems = newItems.filter((_, index) => index !== oldIndex);
  return [
    ...remainingItems.slice(0, newIndex),
    movedAddress,
    ...remainingItems.slice(newIndex),
  ];
};

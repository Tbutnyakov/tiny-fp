export const reorderArray = ({ items, oldIndex, newIndex, }) => {
    const newItems = [...items];
    if (Object.is(oldIndex, newIndex))
        return newItems;
    const movedAddress = newItems[oldIndex];
    const remainingItems = newItems.filter((_, index) => index !== oldIndex);
    return [
        ...remainingItems.slice(0, newIndex),
        movedAddress,
        ...remainingItems.slice(newIndex),
    ];
};

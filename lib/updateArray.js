export const updateArray = (targetArr, index, newValue) => {
    const newTargetArr = [...targetArr];
    newTargetArr.splice(index, 1, newValue);
    return newTargetArr;
};

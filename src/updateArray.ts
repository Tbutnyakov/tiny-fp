export const updateArray = <T>(targetArr: T[], index: number, newValue: T) => {
  const newTargetArr = [...targetArr];
  newTargetArr.splice(index, 1, newValue);
  return newTargetArr;
};

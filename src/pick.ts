export const pick = <T, K extends keyof T>(
  targetObj: T,
  requiredFieldsArr: K[]
): Pick<T, K> =>
  requiredFieldsArr.reduce((acc, fieldName) => {
    acc[fieldName] = targetObj[fieldName];
    return acc;
  }, {} as T);

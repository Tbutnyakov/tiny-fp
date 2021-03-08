export const pick = (targetObj, requiredFieldsArr) => requiredFieldsArr.reduce((acc, fieldName) => {
    acc[fieldName] = targetObj[fieldName];
    return acc;
}, {});

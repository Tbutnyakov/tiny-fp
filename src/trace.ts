export const trace = <P>(property: P) => {
  console.log(property);
  return property;
};

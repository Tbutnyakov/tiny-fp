export const skip = <P>(times = 1, targetFn: Function) => {
  let calledTimes = 0;

  return (...props: P[]): void => {
    calledTimes += 1;
    if (calledTimes > times) targetFn(...props);
  };
};

type WrapperFn = (...args: any[]) => void;

export const debounce = <T extends WrapperFn>(
  fn: T,
  ms: number,
  immediate: boolean
) => {
  let timeout: number | undefined;

  const wrapperFn = (...args: Parameters<T>) => {
    // @ts-ignore
    const context = this;
    const callLater = () => {
      timeout = undefined;
      if (!immediate) fn.apply(context, args);
    };

    const needCallNow = immediate && !timeout;
    window.clearTimeout(timeout);
    timeout = window.setTimeout(callLater, ms);
    if (needCallNow) fn.apply(context, args);
  };

  return wrapperFn;
};

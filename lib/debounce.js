export const debounce = (fn, ms, immediate) => {
    let timeout;
    const wrapperFn = (...args) => {
        const context = this;
        const callLater = () => {
            timeout = undefined;
            if (!immediate)
                fn.apply(context, args);
        };
        const needCallNow = immediate && !timeout;
        window.clearTimeout(timeout);
        timeout = window.setTimeout(callLater, ms);
        if (needCallNow)
            fn.apply(context, args);
    };
    return wrapperFn;
};

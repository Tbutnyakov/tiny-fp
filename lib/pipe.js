export const pipe = (fn1, ...fns) => {
    const piped = fns.reduce((prevFn, nextFn) => (value) => nextFn(prevFn(value)), value => value);
    return (...args) => piped(fn1(...args));
};

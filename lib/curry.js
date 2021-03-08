export function curry(fn) {
    const curried = (...props) => props.length < fn.length
        ? (...rest) => curried.apply(null, [...props, ...rest])
        : fn(...props);
    return curried;
}
// Functions
export function curry2(fn) {
    return curry(fn);
}
export function curry3(fn) {
    return curry(fn);
}
export function curry4(fn) {
    return curry(fn);
}

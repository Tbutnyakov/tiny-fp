export const skip = (times = 1, targetFn) => {
    let calledTimes = 0;
    return (...props) => {
        calledTimes += 1;
        if (calledTimes > times)
            targetFn(...props);
    };
};

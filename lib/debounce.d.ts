declare type WrapperFn = (...args: any[]) => void;
export declare const debounce: <T extends WrapperFn>(fn: T, ms: number, immediate: boolean) => (...args: Parameters<T>) => void;
export {};

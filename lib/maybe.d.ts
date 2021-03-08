export declare class Maybe<A> {
    readonly $val: A;
    constructor(val: A);
    static of<B>(val: B): Maybe<B>;
    isNothing(): boolean;
    map(f: Function): Maybe<A>;
    join(): A;
    chain(f: Function): A;
    orElse<B>(defaultValue: B): Maybe<B> | Maybe<A>;
    toString(): string;
    ap<B>(otherMaybe: Maybe<B>): Maybe<B>;
}
export declare const maybe: <F>(someValue: F) => Maybe<F>;

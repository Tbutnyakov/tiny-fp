export declare function curry(fn: any): (...props: any) => any;
export declare type CurriedFunction2<P0, P1, R> = {
    (p0: P0): {
        (p1: P1): R;
    };
    (p0: P0, p1: P1): R;
};
export declare type CurriedFunction3<P0, P1, P2, R> = {
    (p0: P0, p1: P1, p2: P2): R;
    (p0: P0, p1: P1): {
        (p2: P2): R;
    };
    (p0: P0): CurriedFunction2<P1, P2, R>;
};
export declare type CurriedFunction4<P0, P1, P2, P3, R> = {
    (p0: P0, p1: P1, p2: P2, p3: P3): R;
    (p0: P0, p1: P1, p2: P2): {
        (p3: P3): R;
    };
    (p0: P0, p1: P1): CurriedFunction2<P2, P3, R>;
    (p0: P0): CurriedFunction3<P1, P2, P3, R>;
};
export declare function curry2<P0, P1, R>(fn: (p0: P0, p1: P1) => R): CurriedFunction2<P0, P1, R>;
export declare function curry3<P0, P1, P2, R>(fn: (p0: P0, p1: P1, p2: P2) => R): CurriedFunction3<P0, P1, P2, R>;
export declare function curry4<P0, P1, P2, P3, R>(fn: (p0: P0, p1: P1, p2: P2, p3: P3) => R): CurriedFunction4<P0, P1, P2, P3, R>;

declare type randomType = {
    <T>(a: T[]): T;
    (a: number, b: number): number;
};
export declare const random: randomType;
export {};

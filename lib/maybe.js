export class Maybe {
    constructor(val) {
        this.$val = val;
    }
    static of(val) {
        return new Maybe(val);
    }
    isNothing() {
        return this.$val === null || this.$val === undefined;
    }
    map(f) {
        if (this.isNothing())
            return Maybe.of(this.$val);
        return Maybe.of(f(this.$val));
    }
    join() {
        return this.$val;
    }
    chain(f) {
        return this.map(f).join();
    }
    orElse(defaultValue) {
        if (this.isNothing())
            return Maybe.of(defaultValue);
        return this;
    }
    toString() {
        return `Maybe(${this.$val})`;
    }
    ap(otherMaybe) {
        return otherMaybe.map(this.$val);
    }
}
export const maybe = (someValue) => Maybe.of(someValue);

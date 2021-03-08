export class Maybe<A> {
  readonly $val: A;

  constructor(val: A) {
    this.$val = val;
  }

  static of<B>(val: B) {
    return new Maybe<B>(val);
  }

  isNothing() {
    return this.$val === null || this.$val === undefined;
  }

  map(f: Function): Maybe<A> {
    if (this.isNothing()) return Maybe.of(this.$val);
    return Maybe.of(f(this.$val));
  }

  join() {
    return this.$val;
  }

  chain(f: Function) {
    return this.map(f).join();
  }

  orElse<B>(defaultValue: B): Maybe<B> | Maybe<A> {
    if (this.isNothing()) return Maybe.of(defaultValue);
    return this;
  }

  toString() {
    return `Maybe(${this.$val})`;
  }

  ap<B>(otherMaybe: Maybe<B>) {
    return otherMaybe.map((this.$val as unknown) as Function);
  }
}

export const maybe = <F>(someValue: F) => Maybe.of(someValue);

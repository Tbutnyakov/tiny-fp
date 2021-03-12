export const isObject = <Candidate>(value: Candidate) =>
  value != null && Object.is(typeof value, 'object');

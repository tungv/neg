const neg = require('./index');

it('should return true if pred return false', () => {
  const isOdd = x => x % 2;
  const isEven = neg(isOdd);

  expect(isEven(2)).toBe(true);
  expect(isEven(1)).toBe(false);
});

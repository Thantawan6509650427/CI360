const { add, subtract, multiply } = require('../math');

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('subtracts 5 - 2 to equal 3', () => {
  expect(subtract(5, 2)).toBe(3);
});

test('multiplies 3 * 4 to equal 12', () => {
  expect(multiply(3, 4)).toBe(12);
});

test('adds -1 + -1 to equal -2', () => {
  expect(add(-1, -1)).toBe(-2);
});

test('subtracts 0 - 5 to equal -5', () => {
  expect(subtract(0, 5)).toBe(-5);
});

test('multiplies 0 * 4 to equal 0', () => {
  expect(multiply(0, 4)).toBe(0);
});

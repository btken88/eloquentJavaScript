const minimum = require('./minimum')

test('it returns the lower of two input values', () => {
  expect(minimum(3, 2)).toBe(2)
  expect(minimum(7, 15)).toBe(7)
})
const isEven = require('./recursion')

test('should return true when even', () => {
  expect(isEven(6)).toBe(true)
})

test('should return false when odd', () => {
  expect(isEven(7)).toBe(false)
})

test('should work with negative values', () => {
  expect(isEven(-6)).toBe(true)
})

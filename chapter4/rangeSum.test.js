const { range, sum } = require('./rangeSum')

test('range function should return an array of numbers based on input parameters', () => {
  expect(range(1, 10)).toEqual(expect.arrayContaining(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
  expect(range(1, 10, 2)).toEqual(expect.arrayContaining(
    [1, 3, 5, 7, 9]))
  expect(range(5, 2, -1)).toEqual(expect.arrayContaining(
    [5, 4, 3, 2]
  ))
})

test('sum function correctly adds all the numbers in an array', () => {
  expect(sum([1, 2])).toBe(3)
  expect(sum(range(1, 10))).toBe(55)
})

const { range } = require('./rangeSum')

test('range function should return an array of numbers based on input parameters', () => {
  expect(range(1, 10)).toEqual(expect.arrayContaining(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
  expect(range(1, 10, 2)).toEqual(expect.arrayContaining(
    [1, 3, 5, 7, 9]))
  expect(range(5, 2, -1)).toEqual(expect.arrayContaining(
    [5, 4, 3, 2]
  ))
})

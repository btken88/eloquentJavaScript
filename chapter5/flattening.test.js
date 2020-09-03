const flatten = require('./flattening')

test('should flatten an array of arrays into a single array', () => {
  expect(flatten([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
})

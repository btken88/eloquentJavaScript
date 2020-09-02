const { reverseArray, reverseArrayInPlace } = require('./reverseArray')

test('reverseArray should create a new array with elements in reversed order', () => {
  expect(reverseArray([1, 2, 3])).toEqual(expect.arrayContaining([3, 2, 1]))
})

test('reverseArrayInPlace should return the original array reversed', () => {
  expect(reverseArrayInPlace([1, 2, 3, 4])).toEqual([4, 3, 2, 1])
})

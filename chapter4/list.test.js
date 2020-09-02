const { arrayToList, listToArray, prepend, nth } = require('./list')

const list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
}

test('arrayToList should create a linked list of objects from an array input', () => {
  expect(arrayToList([1, 2, 3])).toEqual(list)
})

test('listToArray should convert a linked list into an array', () => {
  expect(listToArray(list)).toEqual([1, 2, 3])
})

test('prepend should create a new list with a new element at the start', () => {
  expect(prepend(0, list)).toEqual({ value: 0, rest: { ...list } })
})

test('nth should return the element at the given list position or undefined if no position exists', () => {
  expect(nth(list, 0)).toBe(2)
})
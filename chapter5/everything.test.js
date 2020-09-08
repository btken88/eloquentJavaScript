const { every } = require('./everything')


test('should return true when all elements match the predicate', () => {
  const trueArray = [5, 15, 20, 30]
  function predicate(item) {
    return item % 5 === 0
  }

  expect(every(trueArray, predicate)).toBe(true)
})

test('should return false when not all elements match the predicate', () => {
  const falseArray = [5, 6, 15, 20]
  function predicate(item) {
    return item % 5 === 0
  }

  expect(every(falseArray, predicate)).toBe(false)
})

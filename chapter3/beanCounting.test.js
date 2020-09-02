const { countBs, countChar } = require('./beanCounting')

test('should return the number of "B" characters in a string', () => {
  expect(countBs('BabBy')).toBe(2)
  expect(countBs('babby')).toBe(0)
})

test('should count the number of a given character in a string', () => {
  expect(countChar('Johnny', 'n')).toBe(2)
  expect(countChar('Johnny', 'b')).toBe(0)
})



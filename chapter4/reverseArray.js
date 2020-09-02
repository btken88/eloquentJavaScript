function reverseArray(array) {
  let newArray = []
  while (array.length) {
    newArray.push(array.pop())
  }
  return newArray
}

function reverseArrayInPlace(array) {
  for (i = 0; i < array.length / 2; i++) {
    oldElement = array[i]
    array[i] = array[array.length - 1 - i]
    array[array.length - 1 - i] = oldElement
  }
  return array
}

module.exports = { reverseArray, reverseArrayInPlace }
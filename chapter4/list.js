function arrayToList(array) {
  let list = {}
  while (array.length) {
    if (!list.value) {
      list = { value: array.pop(), rest: null }
    } else
      list = { value: array.pop(), rest: { ...list } }
  }
  return list
}

function listToArray(list) {
  const array = []
  while (list) {
    array.push(list.value)
    list = list.rest
  }
  return array
}

function prepend(element, list) {
  return {
    value: element,
    rest: list
  }
}

function nth(list, index) {
  let listArray = listToArray(list)
  return listArray[index]
}

module.exports = { arrayToList, listToArray, prepend, nth }
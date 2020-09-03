function flatten(array) {
  return array.reduce((accumulator, innerArray) => accumulator.concat(innerArray), [])
}

module.exports = flatten
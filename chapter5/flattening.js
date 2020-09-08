function flatten(array) {
  return array.reduce((accumulator, innerArray) => {
    return accumulator.concat(innerArray)
  }, [])
}

module.exports = flatten
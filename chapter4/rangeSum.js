function range(start, end, increment = 1) {
  let numberArray = []
  let spread = Math.abs(start - end)
  for (i = 0; i <= spread; i++) {
    numberArray.push(start + (i * increment))
  }
  return numberArray
}

module.exports = { range }
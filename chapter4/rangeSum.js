function range(start, end, increment = 1) {
  let numberArray = []
  let spread = Math.abs(start - end)
  for (i = 0; i <= spread; i++) {
    numberArray.push(start + (i * increment))
  }
  return numberArray
}

function sum(array) {
  let total = 0;
  for (item in array) {
    total += array[item]
  }
  return total
}

module.exports = { range, sum }
module.exports = function isEven(number) {
  const absNumber = Math.abs(number)
  if (absNumber === 0) return true
  else if (absNumber === 1) return false
  else return isEven(absNumber - 2)
}
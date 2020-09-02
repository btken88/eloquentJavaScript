function countBs(string) {
  let count = 0
  for (let i = 0; i < string.length; i++) {
    if (string[i] === 'B') count += 1
  }
  return count
}

function countChar(string, letter) {
  let count = 0
  for (let i = 0; i < string.length; i++) {
    if (string[i] === letter) count += 1
  }
  return count
}

module.exports = { countBs, countChar }
// every function solved using a loop

// function every(array, predicate) {
//   for (let i = 0; i < array.length; i++) {
//     if (!predicate(array[i])) return false
//   }
//   return true
// }

//every function solved using the some method

function every(array, predicate) {
  if (array.some(e => !predicate(e))) return false
  return true
}

module.exports = { every }
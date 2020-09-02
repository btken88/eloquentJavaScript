// Looping a Triangle

function triangleLoop(n) {
  let string = ""
  for (let i = 0; i < n; i++) {
    string += '#';
    console.log(string)
  }
}

// Chessboard

function chessboard(dimensions) {
  let grid = "";
  for (let i = 1; i <= dimensions; i++) {
    for (j = 1; j <= dimensions; j++) {
      if ((j % 2 === 1 && i % 2 === 1) || (j % 2 === 0 && i % 2 === 0)) {
        grid += " "
      } else grid += "#"
    }
    if (i < dimensions) grid += "\n"
  }
  return grid
}
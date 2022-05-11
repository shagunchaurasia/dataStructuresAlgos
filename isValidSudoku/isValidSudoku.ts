function isValidSudoku(board: string[][]): boolean {
  let result = true;
  //Checking rows for repeated values

  for (let i = 0; i < 9; i++) {
    let hashRow: any = {};

    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== ".") {
        hashRow[board[i][j]] = hashRow[board[i][j]]
          ? hashRow[board[i][j]] + 1
          : 1;
      }
    }
    console.log(hashRow);

    for (const value in hashRow) {
      if (hashRow[value] > 1) {
        console.log("Found duplicate in row");
        result = false;

        break;
      }
    }
  }

  //Checking columns for repeated values

  for (let i = 0; i < 9; i++) {
    let hashColumn: any = {};

    for (let j = 0; j < 9; j++) {
      if (board[j][i] !== ".") {
        hashColumn[board[j][i]] = hashColumn[board[j][i]]
          ? hashColumn[board[j][i]] + 1
          : 1;
      }
    }
    console.log(hashColumn);
    for (const value in hashColumn) {

      if (hashColumn[value] > 1) {
      console.log("Found duplicate in column");

        result = false;
        break;
      }
    }
  }


  //Check for squares
r

  return result;
}

console.log(
  isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);

console.log(
  isValidSudoku([
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);


console.log(
  isValidSudoku([
    [".", ".", ".", ".", "5", ".", ".", "1", "."],
    [".", "4", ".", "3", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", "3", ".", ".", "1"],
    ["8", ".", ".", ".", ".", ".", ".", "2", "."],
    [".", ".", "2", ".", "7", ".", ".", ".", "."],
    [".", "1", "5", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", "2", ".", ".", "."],
    [".", "2", ".", "9", ".", ".", ".", ".", "."],
    [".", ".", "4", ".", ".", ".", ".", ".", "."],
  ])
);
const board1 = [
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
];

const board2 = [["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

const empty = [[".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".","."]]

const board3 = [
  [".",".","4",".",".",".","6","3","."],
  [".",".",".",".",".",".",".",".","."],
  ["5",".",".",".",".",".",".","9","."],
  [".",".",".","5","6",".",".",".","."],
  ["4",".","3",".",".",".",".",".","1"],
  [".",".",".","7",".",".",".",".","."],
  [".",".",".","5",".",".",".",".","."],
  [".",".",".",".",".",".",".",".","."],
  [".",".",".",".",".",".",".",".","."]
]

const board4 = [
   [".","4","6",".",".",".","6",".","."]
  ,[".",".",".","6",".",".",".",".","4"]
  ,[".",".",".",".",".","1",".",".","."]
  ,[".",".",".",".",".","7",".",".","."]
  ,["5",".","7",".",".",".","4",".","."]
  ,[".",".",".",".",".",".",".",".","3"]
  ,[".",".",".","7",".",".","1",".","."]
  ,[".",".",".",".",".",".",".",".","."]
  ,[".",".","1","2",".",".",".",".","."]
]

function validateBoxes(board: string[][]) {
  for (let x = 0; x <= 6; x = x + 3) {
    for (let a = 0; a <= 6; a = a + 3) {
      const counts = {};
      for (let b = x; b < x + 3; b++) {
        for (let c = a; c < a + 3; c++) {
          if (board[b][c] !== '.') {
            if (counts[board[b][c]]) {
              counts[board[b][c]] += 1;
            } else {
              counts[board[b][c]] = 1;
            }
          }
        }
      }
      if (!Object.keys(counts).length) {
        return true;
      }
      for (const value of Object.values(counts)) {
        if (value !== 1) {
          return false;
        }
      }
    }
  }
  return true;
}

function validateColumns(board: string[][]) {
  for (let i = 0; i < board.length; i++) {
    const counts = {}
    for (let j = 0; j < board.length; j++) {
      if (board[j][i] !== '.') {
        if (counts[board[j][i]]) {
          counts[board[j][i]] += 1;
        } else {
          counts[board[j][i]] = 1;
        }
      }
    }
    for (const value of Object.values(counts)) {
      if (value !== 1) {
        return false;
      }
    }
  }

  return true;
}

function validateRows(board: string[][]) {
  for (const row of board) {
    if (!validateRow(row)) {
      console.log('invalid')
      return false;
    }
  };
  return true;
}

function validateRow(row: string[]) {
  const counts = {};

  for (let i = 0; i < row.length; i++) {
    if (row[i] !== '.') {
      if (counts[row[i]]) {
        counts[row[i]] += 1;
      } else {
        counts[row[i]] = 1;
      }
    }
  }


  if (!Object.keys(counts).length) {
    return true;
  }

  console.log(counts)

  for (const value of Object.values(counts)) {
    if (value !== 1) {
      return false;
    } 
  }
}

function isValidSudoku(board: string[][]) {
  if (
    !validateRows(board) ||
    !validateColumns(board) ||
    !validateBoxes(board)
  ) {
    return false;
  } else {
    return true;
  }
}

console.log(isValidSudoku(board4))
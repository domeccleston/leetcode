// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);

// Example 1:

// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// Example 2:

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I
// Example 3:

// Input: s = "A", numRows = 1
// Output: "A"

//
// P     I    N
// A   L S  I G
// Y A   H R
// P     I

function convert(s: string, numRows: number): string {
  // Handle edge cases
  if (numRows === 1 || s.length <= numRows) {
    return s;
  }

  // Create array of strings for each row
  const rows: string[] = new Array(numRows).fill("").map(() => "");

  let currentRow = 0;
  let goingDown = true;

  for (let i = 0; i < s.length; i++) {
    rows[currentRow] += s[i];

    if (goingDown) {
      currentRow++;
      if (currentRow === numRows - 1) {
        goingDown = false;
      }
    } else {
      currentRow--;
      if (currentRow === 0) {
        goingDown = true;
      }
    }
  }

  return rows.join("");
}

console.log(convert("PAYPALISHIRING", 2));

// PAHNAPLSIIGYIR

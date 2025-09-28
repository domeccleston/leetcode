// Given a string s, return the longest palindromic substring in s.

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"

// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters.

// function isPalindrome(str: string) {
//   let reversed = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   return str === reversed;
// }

// function longestPalindrome(s: string) {
//   if (!s.length) return undefined;
//   const palindromes = [] as string[];
//   let longest = "";
//   let maxLength = 0;
//   for (let i = 0; i < s.length; i++) {
//     for (let j = s.length; j > i; j--) {
//       if (isPalindrome(s.slice(i, j))) {
//         if (j - i > maxLength) {
//           maxLength = j - i;
//           longest = s.slice(i, j);
//         }
//         palindromes.push(s.slice(i, j));
//       }
//     }
//   }
//   return longest;
// }

function expandAroundCenter(s, left, right) {
  // First check if the initial center is valid
  if (left < 0 || right >= s.length || s[left] !== s[right]) {
    return "";
  }

  // Now we know we have at least a valid center, so expand outward
  while (
    left - 1 >= 0 &&
    right + 1 < s.length &&
    s[left - 1] === s[right + 1]
  ) {
    left--;
    right++;
  }

  // No "went one step too far" - we stopped at the last valid position
  return s.slice(left, right + 1);
}
function longestPalindrome(s: string): string {
  if (!s || s.length === 0) return "";

  let longest = "";

  for (let i = 0; i < s.length; i++) {
    // Check for odd-length palindromes (center at i)
    const oddPalindrome = expandAroundCenter(s, i, i);

    // Check for even-length palindromes (center between i and i+1)
    const evenPalindrome = expandAroundCenter(s, i, i + 1);

    // Keep track of the longest palindrome found
    if (oddPalindrome.length > longest.length) {
      longest = oddPalindrome;
    }
    if (evenPalindrome.length > longest.length) {
      longest = evenPalindrome;
    }
  }

  return longest;
}

const tests = ["aba", "xanax", "baab", "a", "abab", "redivider", "aa"];
const edges = ["", "aa", "abcdefghijklmnopqrstuvwxyzaabcc", "AaBbA", "12321"];

tests.forEach((str) => console.log(longestPalindrome(str)));

const string = "abc";

/*
Given a string s, find the length of the longest substring without repeating characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

minimum repeat distances:
a: 3
b: 3
c: 3

--
a -> a
ab -> ab
abc -> abc
abca: repeat found -> abc
  * we have found a stretch of non-x chars between two instances of x: a__a
b -> abc
bc -> abc
bca -> abc
bcab: repeat found -> abc
c -> abc
ca -> abc
cab -> abc
cabc: repeat found -> abc

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

b -> b
bb -> 
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

p: no repeat
w: 1
k: no repeat
e: no repeat
Example 4:

Input: s = ""
Output: 0

Constraints:

0 <= s.length <= 5 * 10^4
s consists of English letters, digits, symbols and spaces.
*/

function lengthOfLongestSubstring(s: string): any {
// iterate through string
// search for max non-repeating substring
// for each letter, look at it subsequent characters until a repeat found
// when repeat found, move onto next char
  let maxSubString = '';
  for (let i = 0; i < s.length; i++) {
    const currentChar = s[i];
    const currentLetters = new Set();
    currentLetters.add(currentChar);
    for (let j = i + 1; j < s.length + 1; j++) {
      const currentSubString = s.slice(i, j + 1);
      if (currentLetters.has(s[j])) {
        break;
      }
      currentLetters.add(s[j]);
      if (currentSubString.length > maxSubString.length) {
        maxSubString = currentSubString;
      }
    }
  }
  return maxSubString.length;
};

const test1 = 'abcabcbb';
const test2 = 'pwwkew';
const test3 =  'bbbbb';
const test4 =  '';
console.log(lengthOfLongestSubstring(test4))
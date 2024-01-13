/* 

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
typically using all the original letters exactly once.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

*/

// My first version
function validAnagram(s: string, t: string) {
	const sCounts = {};
	const tCounts = {};

	for (const char of s) {
		if (!sCounts[char]) {
			sCounts[char] = 1;
		} else {
			sCounts[char] += 1;
		}
	}

	for (const char of t) {
		if (!tCounts[char]) {
			tCounts[char] = 1;
		} else {
			tCounts[char] += 1;
		}
	}

	for (const key of Object.keys(sCounts)) {
		if (sCounts[key] !== tCounts[key]) {
			return false;
		}
	}

	return true;
}

// ChatGPT optimized
function validAnagram2(s: string, t: string) {
	if (s.length !== t.length) {
		return false;
	}

	const counts = {};

	for (let i = 0; i < s.length; i++) {
		counts[s[i]] = (counts[s[i]] || 0) + 1;
		counts[t[i]] = (counts[t[i]] || 0) - 1;
	}

	for (const key in counts) {
		if (counts[key] !== 0) {
			return false;
		}
	}

	return true;
}

// Alternatively, we could sort the strings and compare them; this might be a better
// approach when working with large character sets (eg Unicode)

console.log(validAnagram("s", "s"));

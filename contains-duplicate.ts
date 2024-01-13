/* 

Given an integer array nums, return true if any value appears at least twice in the array,
and return false if every element is distinct.

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109

*/

// function containsDuplicate(arr: number[]) {
// 	const distinct = {};

// 	for (const num of arr) {
// 		if (!distinct[num]) {
// 			distinct[num] = 1;
// 		} else {
// 			distinct[num] += 1;
// 		}
// 	}

// 	for (const key of Object.keys(distinct)) {
// 		if (distinct[key] > 1) {
// 			return true;
// 		}
// 	}

// 	return false;
// }

function containsDuplicate(arr: number[]) {
	const set = new Set(arr).size;
	return set !== arr.length;
}

console.log(containsDuplicate([1, 1]));

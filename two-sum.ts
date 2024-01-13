/* 
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
 

[1, 5, 3, 4, 2, 7, 11, 15] -> 9

i: 1
i: 1. j: 5 -> 6
i: 1, j: 3 -> 4
i: 1, j: 4 -> 5
... for n - 1

i: 5
i: 5, j: 3 -> 8
... for n - 2


Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

*/

/* naive solution */
function twoSum(nums: number[], target: number) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}

/* faster solution - key insight is that there is only one way to solve each arr */
function twoSum2(nums: number[], target: number) {
  const sums = {};

  for (let i = 0; i < nums.length; i++) {
    const sum = target - nums[i];
    if (sums.hasOwnProperty(sum)) {
      return [sums[sum], i];
    } else {
      sums[nums[i]] = i;
    }
  }
}

console.log(twoSum2([3, 2, 4], 6));

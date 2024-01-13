/* 

Top K frequent elements

Given an integer array nums and an integer k,
return the k most frequent elements. You may return the answer in any order.

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
 

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.
 

Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
*/

function topKFrequent(nums: number[], k: number) {
  const counts = {} as Record<string, number>

  for (let i = 0; i < nums.length; i++) {
    if (counts.hasOwnProperty(nums[i].toString())) {
      counts[nums[i].toString()] += 1;
    } else {
      counts[nums[i].toString()] = 1;
    }
  }

  const topK = Object.entries(counts)
    .sort((a: [string, number], b: [string, number]) => b[1] - a[1])
    .map((entry) => entry[0])
    .slice(0, k)

  return topK;
}

console.log(topKFrequent([1,1,1,2,2,3], 2))
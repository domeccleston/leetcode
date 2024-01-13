/* 

Product of Array Except Self
Given an integer array nums, return an array answer such that answer[i]
is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
 

Constraints:

2 <= nums.length <= 105
-30 <= nums[i] <= 30
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 

Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)

*/


/* naive solution  */
function productExceptSelf(nums: number[]) {
  const acc = {}
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (j === i) {
        continue;
      } else {
        if (acc[nums[i]]) {
          acc[nums[i]] = nums[j] * acc[nums[i]];
        } else {
          acc[nums[i]] = nums[j];
        }
      }
    }
  }
  return Object.values(acc)
}

function productArray(arr, n) 
{ 
      
    // Initialize memory to all arrays 
    let left = new Array(n); 
    let right = new Array(n); 
    let prod = new Array(n); 

    let i, j; 

    /* Left most element of left array 
    is always 1 */
    left[0] = 1; 

    /* Right most element of right 
    array is always 1 */
    right[n - 1] = 1; 

    /* Construct the left array */
    for (i = 1; i < n; i++) {
      left[i] = arr[i - 1] * left[i - 1]; 
    }

    /* Construct the right array */
    for (j = n - 2; j >= 0; j--)  {
      right[j] = arr[j + 1] * right[j + 1];
    }

    /* Construct the product array using 
    left[] and right[] */
    for (i = 0; i < n; i++) 
        prod[i] = left[i] * right[i]; 

    /* print the constructed prod array */
    for (i = 0; i < n; i++) 
        console.log(prod[i] + " "); 

    return; 
} 

productArray([1, 2, 3, 4], 4);

/* 

nums = [1, 2, 3, 4]

prefix = [1,,,], suffix = [,,,1], product = []
prefix = 
  i = i -> prefix = [1, (1 * 1)]
  i = 2 -> prefix = [1, 1, (2 * 1)]
  i = 3 -> prefix = [1, 1, 2, (3 * 2)]

prefix = [1, 1, 2, 6]
suffix = 
  j = 2 -> suffix = [,,(4 * 1), 1]
  j = 1 -> suffix = [,(3 * 4), 4, 1]
  j = 0 -> suffix = [(2 * 12), 12, 4, 1]

suffix = [24, 12, 4, 1]

product =
  i = 0 -> [24, 12, 8, 6]

*/
/**
 * @param {number[]} nums
 * @return {number}
 */
// Time - 79 ms, faster than 81.37% of JavaScript online submissions for Single Number.
// Space - 46.5 MB, less than 35.48% of JavaScript online submissions for Single Number.
var singleNumber = function (nums) {
  // code here
  let set = new Set()
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      set.delete(nums[i])
    } else {
      set.add(nums[i])
    }
    console.log(set)
  }
  const [first] = set
  return first
}

console.log(singleNumber([1, 2, 2, 4, 4]))
/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

Example 1:
Input: nums = [2,2,1]
Output: 1

Example 2:
Input: nums = [4,1,2,1,2]
Output: 4

Example 3:
Input: nums = [1]
Output: 1


Constraints:
1 <= nums.length <= 3 * 104
-3 * 104 <= nums[i] <= 3 * 104
Each element in the array appears twice except for one element which appears only once.
*/

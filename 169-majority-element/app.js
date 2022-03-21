/*
 * @param {number[]} nums
 * @return {number}
 */
// Time - 76 ms, faster than 78.20% of JavaScript online submissions for Majority Element.
// Space - 43.8 MB, less than 56.79% of JavaScript online submissions for Majority Element.
var majorityElement = function (nums) {
  let obj = {}
  let lim = nums.length / 2
  for (let i = 0; i < nums.length; i++) {
    if (!obj[nums[i]]) {
      obj[nums[i]] = 1
    } else {
      obj[nums[i]] += 1
    }

    if (obj[nums[i]] >= lim) {
      return nums[i]
    }
  }
}

/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:
Input: nums = [3,2,3]
Output: 3

Example 2:
Input: nums = [2,2,1,1,1,2,2]
Output: 2

Constraints:
n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109
*/

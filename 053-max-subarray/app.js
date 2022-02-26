/*
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  max = nums[0]
  sum = 0
  nums.forEach(n => {
    if (sum < 0) {
      sum = 0
    }
    sum += n

    if (max < sum) {
      max = sum
    }
  })
  return max
}

// Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

// Example 2:
// Input: nums = [1]
// Output: 1

// Example 3:
// Input: nums = [5,4,-1,7,8]
// Output: 23

// Constraints:
// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
console.log(maxSubArray([1]))
console.log(maxSubArray([5, 4, -1, 7, 8]))

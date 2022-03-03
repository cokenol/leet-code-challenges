/*
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  if (nums.length == 1) {
    return nums
  }

  while (k > nums.length) {
    k -= nums.length
  }

  let arr = []
  let swap_index = 0
  let first = []
  total = nums.length
  for (let i = 0; i < total; i++) {
    if (total - k + i > total - 1) {
      swap_index = -k + i
    } else {
      swap_index = total - k + i
    }
    console.log("i=", i, "nums before=", ...nums, "swap_index:", swap_index, "first=", first)
    if (i < total - k) {
      first.push(nums[i])
    }
    if (i >= k) {
      nums[i] = first[i - k]
    } else {
      nums[i] = nums[swap_index]
    }

    console.log("i=", i, "nums after=", ...nums, "swap_index:", swap_index, "first=", first, "first[k-i]", first[k - i], `\n`)
  }

  return nums
}

// Example 1:
// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

// Example 2:
// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation:
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]

// Constraints:
// 1 <= nums.length <= 105
// -231 <= nums[i] <= 231 - 1
// 0 <= k <= 105

// console.log(...rotate([1, 2, 3, 4, 5, 6, 7], 3))
console.log(...rotate([1, 2], 3))

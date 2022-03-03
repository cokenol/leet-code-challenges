/*
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  if (nums.length == 1) {
    return nums
  }
  first_zero = 0
  checked = 0
  total = nums.length - 1
  for (let i = 0; i < nums.length; i++) {
    console.log("i:", i, "total:", total, "checked:", checked, "nums[i]=", nums[i], "nums:", ...nums)
    if (nums[i] != 0) {
      let swap = nums[0 + checked]
      nums[0 + checked] = nums[i]
      nums[i] = swap
      checked += 1
    }
  }
  return nums
}
{
  // Example 1:
  // Input: nums = [0,1,0,3,12]
  // Output: [1,3,12,0,0]
  // Example 2:
  // Input: nums = [0]
  // Output: [0]
  // Constraints:
  // 1 <= nums.length <= 104
  // -231 <= nums[i] <= 231 - 1
}

// console.log(moveZeroes([0, 0, 0, 0, 0, 0, 1, 1, 1]))
console.log(moveZeroes([0, 1, 0, 3, 12]))

//    0 1 2 3 4
// 1: 0 1 0 3 4
// 2: 1 0 0 3 4
// 3: 1 0 0 3 4
// 4: 1 3 0 0 4
// 5: 1 3 4 0 0

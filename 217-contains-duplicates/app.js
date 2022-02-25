/*
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  duplicates = {}
  result = false
  nums.forEach(i => {
    // console.log(duplicates[i])
    if (duplicates[i]) {
      result = true
      return
    } else {
      duplicates[i] = 1
    }
  })
  return result
}

// Example 1:
// Input: nums = [1,2,3,1]
// Output: true

// Example 2:
// Input: nums = [1,2,3,4]
// Output: false

// Example 3:
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

// Constraints:
// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109

console.log(containsDuplicate([1, 2, 3, 1]))
console.log(containsDuplicate([1, 2, 3, 4]))
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]))

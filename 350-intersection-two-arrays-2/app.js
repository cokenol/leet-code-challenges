/*
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// time - 57 ms, faster than 98.48% of JavaScript online submissions for Intersection of Two Arrays II.
// Space - 42.6 MB, less than 68.28% of JavaScript online submissions for Intersection of Two Arrays II.
var intersect = function (nums1, nums2) {
  // Code here
  let arr = []
  let hash = {}
  if (nums1.length > nums2.length) {
    iterate = nums2
    search = nums1
  } else {
    iterate = nums1
    search = nums2
  }
  iterate.forEach(n => {
    if (!hash[n]) {
      hash[n] = 1
    } else {
      hash[n] += 1
    }
  })
  search.forEach(n => {
    if (hash[n]) {
      hash[n] -= 1
      arr.push(n)
    }
  })
  return arr
}

/*
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.



Example 1:
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]

Example 2:
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted.


Constraints:

1 <= nums1.length, nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 1000


Follow up:

What if the given array is already sorted? How would you optimize your algorithm?
What if nums1's size is small compared to nums2's size? Which algorithm is better?
What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?
*/

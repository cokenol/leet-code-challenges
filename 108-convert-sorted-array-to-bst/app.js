/*
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/*
 * @param {number[]} nums
 * @return {TreeNode}
 */
// class TreeNode {
//   constructor(val, left, right) {
//     this.val = val === undefined ? 0 : val
//     this.left = left === undefined ? null : left
//     this.right = right === undefined ? null : right
//   }
// }

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

// Time - 72 ms, faster than 94.72% of JavaScript online submissions for Convert Sorted Array to Binary Search Tree.
// Space - 44.8 MB, less than 25.95% of JavaScript online submissions for Convert Sorted Array to Binary Search Tree.

function sortedArrayToBST(nums) {
  if (nums.length === 0) {
    return undefined
  }
  let mid = Math.floor(nums.length / 2)
  console.log("mid", nums[mid], mid)
  return new TreeNode(nums[mid], sortedArrayToBST(nums.slice(0, mid)), sortedArrayToBST(nums.slice(mid + 1)))
}

const bst = sortedArrayToBST([-10, -3, 0, 5, 9])
console.log(bst)

/*
Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.


Example 1:
Input: nums = [-10,-3,0,5,9]
Output: [0,-3,9,-10,null,5]
Explanation: [0,-10,5,null,-3,null,9] is also accepted:

Example 2:
Input: nums = [1,3]
Output: [3,1]
Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.

Constraints:
1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums is sorted in a strictly increasing order.
*/

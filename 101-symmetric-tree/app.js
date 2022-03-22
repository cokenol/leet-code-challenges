/**
 * Definition for a binary tree node. */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

/*
 * @param {TreeNode} root
 * @return {boolean}
 */

// Time - 56 ms, faster than 99.76% of JavaScript online submissions for Symmetric Tree.
// Space - 45.2 MB, less than 9.91% of JavaScript online submissions for Symmetric Tree.
var isSymmetric = function (root) {
  return check(root.left, root.right)
}

function check(left, right) {
  if (!left && !right) {
    return true
  }
  if (!left || !right || left.val !== right.val) {
    return false
  }
  return check(left.left, right.right) && check(left.right, right.left)
}

const one = new TreeNode(1, new TreeNode(2, 3, 4), new TreeNode(2, 4, 3))
console.log(one)
console.log(isSymmetric(one))

// [(1, 2, 2, 3, 4, 4, 3)]
/*
Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

Example 1:
Input: root = [1,2,2,3,4,4,3]
Output: true

Example 2:
Input: root = [1,2,2,null,3,null,3]
Output: false

Constraints:
The number of nodes in the tree is in the range [1, 1000].
-100 <= Node.val <= 100

Follow up: Could you solve it both recursively and iteratively?
*/

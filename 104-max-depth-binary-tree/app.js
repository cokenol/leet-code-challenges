/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/*
 * @param {TreeNode} root
 * @return {number}
 */

// Time - 60 ms, faster than 98.99% of JavaScript online submissions for Maximum Depth of Binary Tree.
// Space - 45.1 MB, less than 56.59% of JavaScript online submissions for Maximum Depth of Binary Tree.
var maxDepth = function (root) {
  return traverseInOrder(root.root, 0)
}

function traverseInOrder(node, level) {
  if (!node) {
    return level
  } else {
    level += 1
  }
  return Math.max(traverseInOrder(node.left, level), traverseInOrder(node.right, level))
}

class Node {
  constructor(value) {
    this.left = null
    this.right = null
    this.value = value
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }
  insert(value) {
    const newNode = new Node(value)
    if (this.root === null) {
      this.root = newNode
    } else {
      let currentNode = this.root
      while (true) {
        if (value < currentNode.value) {
          //Left
          if (!currentNode.left) {
            currentNode.left = newNode
            return this
          }
          currentNode = currentNode.left
        } else {
          //Right
          if (!currentNode.right) {
            currentNode.right = newNode
            return this
          }
          currentNode = currentNode.right
        }
      }
    }
  }
}

const bst = new BinarySearchTree()
arr = [9, 3, 20]

arr.forEach(n => {
  bst.insert(n)
})

// console.log(bst)

console.log(maxDepth(bst))

/*
Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.



Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: 3

Example 2:
Input: root = [1,null,2]
Output: 2
*/

/*
 * Definition for singly-linked list.*/
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}
function printList(list) {
  let arr = []
  while (list) {
    arr.push(list.val)
    list = list.next
  }
  return arr
}
/*
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
function arrayToLinkedList(arr) {
  if (arr.length === 0) return null
  return new ListNode(arr[0], arrayToLinkedList(arr.slice(1)))
}

// Time - 93 ms, faster than 56.34% of JavaScript online submissions for Merge Two Sorted Lists.
// Space - 44.2 MB, less than 58.75% of JavaScript online submissions for Merge Two Sorted Lists.
var mergeTwoLists = function (list1, list2) {
  if (!list1) return list2
  if (!list2) return list1

  if (list1.val > list2.val) {
    next_node = list2.next
    list2.next = mergeTwoLists(list1, next_node)
    return list2
  } else {
    next_node = list1.next
    list1.next = mergeTwoLists(list2, next_node)
    return list1
  }
}

const l1 = arrayToLinkedList([1, 2, 4])
const l2 = arrayToLinkedList([1, 3, 4])

console.log(printList(mergeTwoLists(l1, l2)))
/*
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

Example 1:
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:
Input: list1 = [], list2 = []
Output: []

Example 3:
Input: list1 = [], list2 = [0]
Output: [0]

Constraints:
The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.
 */

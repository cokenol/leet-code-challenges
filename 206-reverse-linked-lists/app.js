/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*
 * @param {ListNode} head
 * @return {ListNode}
 */
// Time - 64 ms, faster than 93.93% of JavaScript online submissions for Reverse Linked List.
// Space - Memory Usage: 44.1 MB, less than 68.92% of JavaScript online submissions for Reverse Linked List.
var reverseList = function (head) {
  if (!head) return null
  if (!head.next) return head
  let second = head.next
  head.next = null
  let first = head
  while (second) {
    temp = second.next
    second.next = first
    first = second
    second = temp
  }
  return first
}

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
  printList() {
    const array = []
    let currentNode = this
    while (currentNode !== null) {
      // console.log(currentNode)
      array.push(currentNode.val)
      currentNode = currentNode.next
    }
    return array
  }
}

five = new Node(5)
four = new Node(4)
four.next = five
three = new Node(3)
three.next = four
two = new Node(2)
two.next = three
one = new Node(1)
one.next = two

console.log(one.printList())
const reversed = reverseList(one)
console.log(reversed.printList())

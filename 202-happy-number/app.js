/*
 * @param {number} n
 * @return {boolean}
 */

// Time = 64 ms, faster than 96.51% of JavaScript online submissions for Happy Number.
// Space - 44.1 MB, less than 42.48% of JavaScript online submissions for Happy Number.

var isHappy = function (n) {
  let set = new Set()
  return function hap(n) {
    let res = 0
    // console.log(n, dp)
    Array.from(String(n), Number).forEach(n => {
      res += n ** 2
    })
    if (res === 1) {
      set.clear()
      return true
    }
    if (set.has(n)) {
      set.add(n)
    } else {
      return false
    }
    return hap(res)
  }
}

const happy = isHappy()

arr = [19, 7, 13, 3, 23]
arr.forEach(n => {
  console.log(happy(n))
})
/*
Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.


Example 1:
Input: n = 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1

Example 2:
Input: n = 2
Output: false

Constraints:
1 <= n <= 231 - 1
*/

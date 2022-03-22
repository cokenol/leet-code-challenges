/*
 * @param {number} n
 * @return {boolean}
 */

// Time - 250 ms, faster than 74.09% of JavaScript online submissions for Power of Three.
// Space - 51.8 MB, less than 14.12% of JavaScript online submissions for Power of Three.
var isPowerOfThree = function (n) {
  if (n === 0) return false
  if (n === 1) return true
  if (n % 3 > 0) {
    return false
  }
  return isPowerOfThree(n / 3)
}

const arr = [0, 1, 3, 9, 27, 8]
arr.forEach(n => {
  console.log(isPowerOfThree(n))
})
/*
Given an integer n, return true if it is a power of three. Otherwise, return false.

An integer n is a power of three, if there exists an integer x such that n == 3x.

Example 1:
Input: n = 27
Output: true

Example 2:
Input: n = 0
Output: false

Example 3:
Input: n = 9
Output: true

Constraints:
-2**31 <= n <= 2**31 - 1
*/

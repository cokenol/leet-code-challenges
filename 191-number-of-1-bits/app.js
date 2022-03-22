/*
 * @param {number} n - a positive integer
 * @return {number}
 */

// 76 ms, faster than 74.99% of JavaScript online submissions for Number of 1 Bits.
// 42.4 MB, less than 71.25% of JavaScript online submissions for Number of 1 Bits.
var hammingWeight = function (n) {
  let counter = 0
  n.toString(2)
    .split("")
    .forEach(num => {
      if (num === "1") counter += 1
    })
  return counter
}

console.log(n)
console.log(hammingWeight(n))

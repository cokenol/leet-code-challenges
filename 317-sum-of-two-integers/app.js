/*
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
  // console.log(`a=${a} b=${b}\n`)
  // console.log(`a=${dec2bin(a)}\nb=${dec2bin(b)}\n`)
  if (b == 0) {
    return a
  } else {
    return getSum(a ^ b, (a & b) << 1)
  }
}

function dec2bin(nMask) {
  // nMask must be between -2147483648 and 2147483647
  for (var nFlag = 0, nShifted = nMask, sMask = ""; nFlag < 32; nFlag++, sMask += String(nShifted >>> 31), nShifted <<= 1);
  return sMask
}

// Example 1:
// Input: a = 1, b = 2
// Output: 3

// Example 2:
// Input: a = 2, b = 3
// Output: 5

// Constraints:
// -1000 <= a, b <= 1000

// getSum(1, 2)
getSum(2, 3)
getSum(4, 3)

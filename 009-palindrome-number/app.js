/*
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const rev = reverse(x.toString())
  const ori = x.toString()
  return ori === rev
}

function reverse(str) {
  let j = -1
  let rev = []
  for (let i = 0; i < str.length; i++) {
    // console.log(str.length - i - 1)
    // console.log(str[str.length - i - 1])
    rev.push(str[str.length - i - 1])
    j--
  }
  return rev.join("")
}
{
  // Example 1:
  // Input: x = 121
  // Output: true
  // Explanation: 121 reads as 121 from left to right and from right to left.
  // Example 2:
  // Input: x = -121
  // Output: false
  // Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
  // Example 3:
  // Input: x = 10
  // Output: false
  // Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
  // Constraints:
  // -231 <= x <= 231 - 1
}

// console.log(isPalindrome(121))
console.log(isPalindrome("figgif"))

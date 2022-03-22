// time - 60 ms, faster than 93.14% of JavaScript online submissions for Plus One.
// Space - 42.5 MB, less than 11.01% of JavaScript online submissions for Plus One.

var plusOne = function (digits) {
  let len = digits.length
  for (let i = len - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      digits[i] = 0
      if (i === 0) {
        digits.unshift(1)
        return digits
      }
    } else {
      digits[i] += 1
      return digits
    }
  }
}

arr = [9]

console.log(plusOne(arr))

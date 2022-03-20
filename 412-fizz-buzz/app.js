/*
 * @param {number} n
 * @return {string[]}
 */
// Time - 64ms faster than 86.87%
// Space - 44.2MB less than 74.34%
var fizzBuzz = function (n) {
  let result = []
  for (let i = 1; i <= n; i++) {
    result[i - 1] = ""
    if (i % 3 !== 0 && i % 5 !== 0) {
      result[i - 1] = i.toString()
    } else {
      if (i % 3 === 0) result[i - 1] += "Fizz"
      if (i % 5 === 0) result[i - 1] += "Buzz"
    }
  }
  return result
}

console.log(...fizzBuzz(15))

/*
 * @param {string} columnTitle
 * @return {number}
 */
// Time - 81 ms, faster than 75.93% of JavaScript online submissions for Excel Sheet Column Number.
// Space - 44 MB, less than 33.35% of JavaScript online submissions for Excel Sheet Column Number.
var titleToNumber = function (columnTitle) {
  let row = 0
  for (let i = 0; i < columnTitle.length; i++) {
    // console.log(columnTitle[i], columnTitle[i].charCodeAt())
    row += (columnTitle[columnTitle.length - 1 - i].charCodeAt() - 64) * 26 ** i
  }
  return row
}

const A = ["A", "AB", "ABC", "FXSHRXW"]

A.forEach(a => {
  console.log(titleToNumber(a))
})

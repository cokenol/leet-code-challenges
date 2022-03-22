/*
 * @param {number} numRows
 * @return {number[][]}
 */
// Time - 56 ms, faster than 96.48% of JavaScript online submissions for Pascal's Triangle.
// Space - 42.2 MB, less than 33.27% of JavaScript online submissions for Pascal's Triangle.
var generate = function (numRows) {
  let = arr = [[1], [1, 1]]
  if (numRows === 1) return arr.slice(0, 1)
  if (numRows === 2) return arr

  for (let i = 3; i <= numRows; i++) {
    arr.push([])
    arr[i - 1][0] = 1
    arr[i - 1][i - 1] = 1
    j = 1
    while (j <= i - 2) {
      arr[i - 1][j] = arr[i - 2][j - 1] + arr[i - 2][j]
      j++
    }
    // console.log("i", i, arr)
  }
  return arr
}

for (let i = 1; i < 10; i++) {
  console.log(generate(i))
}
// console.log(generate(15))
/*
Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

Example 1:
Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

Example 2:
Input: numRows = 1
Output: [[1]]

Constraints:
1 <= numRows <= 30
*/

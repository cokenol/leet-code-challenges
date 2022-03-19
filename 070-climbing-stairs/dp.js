/*
 * @param {number} n
 * @return {number}
 */
let calculations = 0
var climbStairs = function (n) {
  let dp = []
  return function climbS(n) {
    if (n <= 3) return n
    if (dp[n]) {
      return dp[n]
    } else {
      calculations++
      dp[n] = climbS(n - 1) + climbS(n - 2) + climbS(n - 3)
      return dp[n]
    }
  }
}

const climb = climbStairs()

for (let i = 0; i < 40; i++) {
  console.log(i, climb(i))
  console.log("calc=", calculations, "\n")
}

// n = 1
// 1

// n = 2
// 1 1
// 2

// n = 3
// 1 1 1
// 2 1
// 1 2
// 3

// n = 4
// 1 1 1 1
// 2 1 1
// 1 2 1
// 1 1 2
// 2 2
// 3 1
// 1 3

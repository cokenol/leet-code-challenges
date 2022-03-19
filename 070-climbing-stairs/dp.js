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
      dp[n] = climbS(n - 1) + climbS(n - 2)
      return dp[n]
    }
  }
}

const climb = climbStairs()

for (let i = 0; i <= 20; i++) {
  console.log("For", i, "number of steps is=", climb(i), "distinct ways")
  console.log("calc=", calculations, "\n")
}

// n = 1
// 1
// 1 Distinct way

// n = 2
// 1 1
// 2
// 2 Distinct way

// n = 3
// 1 1 1
// 2 1
// 1 2
// 3 Distinct way

// n = 4
// 1 1 1 1
// 2 1 1
// 1 2 1
// 1 1 2
// 2 2
// 3 1
// 1 3

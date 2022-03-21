/*
 * @param {number[]} prices
 * @return {number}
 */
// Time -  60 ms, faster than 95.98% of JavaScript online submissions for Best Time to Buy and Sell Stock II.
// Space - 42.9 MB, less than 12.08% of JavaScript online submissions for Best Time to Buy and Sell Stock II.
var maxProfit = function (prices) {
  const obj = {
    buyCur: null,
    buyPft: 0
  }
  for (let i = 0; i < prices.length; i++) {
    if (obj.buyCur !== null) {
      if (prices[i + 1] !== undefined) {
        if (prices[i + 1] < prices[i] && prices[i] > obj.buyCur) {
          obj.buyPft += prices[i] - obj.buyCur
          obj.buyCur = null
        }
      } else if (prices[i] > obj.buyCur) {
        obj.buyPft += prices[i] - obj.buyCur
        obj.buyCur = null
      }
    } else {
      if (prices[i + 1] !== undefined) {
        if (prices[i] < prices[i + 1]) {
          obj.buyCur = prices[i]
        }
      } else {
        obj.buyCur = prices[i]
      }
    }
  }
  return obj.buyPft
}

const arr = [
  [7, 1, 5, 3, 6, 4],
  [1, 2, 3, 4, 5],
  [7, 6, 4, 3, 1],
  [2, 1, 2, 1, 0, 2]
]

arr.forEach(a => {
  console.log(a)
  console.log("Max Profit=", maxProfit(a), "\n======================\n")
})

/*
You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

Find and return the maximum profit you can achieve.


Example 1:
Input: prices = [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
Total profit is 4 + 3 = 7.

Example 2:
Input: prices = [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
Total profit is 4.

Example 3:
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: There is no way to make a positive profit, so we never buy the stock to achieve the maximum profit of 0.

Constraints:
1 <= prices.length <= 3 * 104
0 <= prices[i] <= 104
*/

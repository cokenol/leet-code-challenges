var maxProfit = function (prices) {
  let profit = 0

  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i] < prices[i + 1]) {
      profit = profit + prices[i + 1] - prices[i]
    }
  }

  return profit
}

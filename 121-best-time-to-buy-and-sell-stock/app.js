//  * @param {number[]} prices
//  * @return {number}


var maxProfit = function(prices) {
    let min = prices[0], profit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] - min > profit) {
            profit = prices[i] - min;
        }

        if (prices[i] < min) {
            min = prices[i];
        }
        console.log(`#${i} Min=${min} Max=${prices[i]} Profit=${profit}`)
    }
    return profit;
};

// console.log(maxProfit([2, 1, 2, 1, 0]))

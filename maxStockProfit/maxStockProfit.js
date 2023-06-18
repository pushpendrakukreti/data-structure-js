// Best time to Buy and Sell Stocks
// You are given an array prices where prices[i] is the
// price of a given stock on the nth day.

// You want to maximize your profit by choosing a single day to buy one stock
// and choosing a different day in the future to sell that stock.

// Return the maximum profit, If you cannot achieve any profit, return 0.

// Input: prices = [7, 1, 5, 3, 6, 4];  ---->>>>  Output: 5;
// Input: prices = [7, 6, 4, 3, 1];  ---->>>>  Output: 0;

const maxProfit = (prices) => {
    let globalProfit = 0;

    for (let i = 0; i < prices.length - 1; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            const currentProfit = prices[j] - prices[i];

            if (currentProfit > globalProfit) {
                globalProfit = currentProfit;
            };
        }
    }

    return globalProfit;
}

const optimizedMaxProfit = (prices) => {
    let minStockBuyPrice = prices[0] || 0;
    let profit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < minStockBuyPrice) {
            minStockBuyPrice = prices[i];
        }

        // let currentProfit = prices[i] - minStockBuyPrice;
        // profit = Math.max(profit, currentProfit);
        profit = Math.max(profit, prices[i] - minStockBuyPrice);
    }

    return profit;
}

/* ------- Pseudo Code -------- */
// [7, 1, 5, 3, 6, 4]
// min = 7 => 1
// profit = 0 => 5 - 1 = 4 => 6 - 1 = 5


console.time()
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
console.timeEnd()


console.time()
console.log(optimizedMaxProfit([7, 1, 5, 3, 6, 4]));
console.log(optimizedMaxProfit([7, 6, 4, 3, 1]));
console.timeEnd()
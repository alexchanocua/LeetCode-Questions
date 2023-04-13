const maxProfit = (prices) => {
  // two pointers for sliding window
  let buy = 0;
  let sell = 1;
  // max profit variable
  let maxProfit = 0;
  // iterate through the prices
  while(sell < prices.length) {
    const potentialProfit = prices[sell] - prices[buy];
    // check if we have a valid sell
    if(potentialProfit > 0) {
      // update the max
      maxProfit = Math.max(maxProfit, potentialProfit);
    } else {
      // move the buy pointer to the sell pointer
      buy = sell;
    }
    // go to the next price
    sell++;
  }
  // return out max profit
  return maxProfit;
};

/* TEST CASES */
const prices1 = [7,1,5,3,6,4];
const prices2 = [7,6,4,3,1];

const result1 = maxProfit(prices1);
const result2 = maxProfit(prices2);

console.log(
    `----------------
prices1 : [${prices1}]
maxProfit = ${result1}

prices2 : [${prices2}]
maxProfit = ${result2}
----------------
    `
)


const dailyTemperatures = (temperatures) => {
    // results array, size of length of temperatures prefilled with 0
    const results = new Array(temperatures.length).fill(0);
    // stack to keep track of the temperatures and their position
    const stack = new Array();

    // iterate through temperatures in reverse order
    for(let i = temperatures.length - 1; i >= 0; i--){
        // while there is an item on the stack and our current temp
        //  is greater than or equal to the top of the stack pop the stack
        while(stack.length && temperatures[i] >= stack[stack.length - 1][0]) {
            stack.pop()
        }
        // if there is an item on the stack and it's temp is greater than 
        //  our current day
        if(stack.length && temperatures[i] < stack[stack.length - 1][0]) {
            // store the differenece in days
            results[i] = stack[stack.length - 1][1] - i;
        }
        stack.push([temperatures[i],i]);
    }
    return results;    
};

// * TEST CASES * //
const temps1 = [73,74,75,71,69,72,76,73];
const temps2 = [30,40,50,60];

const result1 = dailyTemperatures(temps1);
const result2 = dailyTemperatures(temps2);

console.log(`----------------
Results: 
temps1        = [${temps1}]
result1       = [${result1}] 

temps2        = [${temps2}]
result2       = [${result2}] 
----------------\n`);
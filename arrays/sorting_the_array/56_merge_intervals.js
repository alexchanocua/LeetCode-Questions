const merge = (intervals) => {
    // sort the intervals by their start time
    const sortedIntervals = intervals.sort((a,b) => a[0] - b[0]);
    // add the first interval to the results array
    const results = [sortedIntervals[0]];
    // index for results
    let j = 0;
    // start at the 2nd element, index 1
    for(let i = 1; i < intervals.length; i++){
        // check if the current interval is valid
        //  compare it's start time to current interval in results
        if(sortedIntervals[i][0] > results[j][1]){
            // add it to the results and move the index for results
            results.push(sortedIntervals[i]);
            j++;
        } else {
            // it's not valid so compare the ending times and get the max one and merge
            results[j][1] = Math.max(sortedIntervals[i][1], results[j][1]);
        }
    }
    //return the results
    return results;
};

// * TEST CASES * //
const intervals1 = [[1,3],[2,6],[8,10],[15,18]];
const intervals2 = [[1,4],[4,5]];

const result1 = merge(intervals1);
const result2 = merge(intervals2);

console.log(`----------------
Results: 
intervals1        = [${intervals1}]
result1           = [${result1}] 

intervals2        = [${intervals2}]
result2           = [${result2}] 
----------------\n`);
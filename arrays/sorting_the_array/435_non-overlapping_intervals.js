const eraseOverlapIntervals = (intervals) => {
    // validate inteval length
    if(intervals.length <= 1) return 0;
    // sort the intervals by their starting time in place O(logn)
    intervals.sort((a, b) => a[0] - b[0]);
    // final count var
    let result = 0;
    // variable to keep track of the previous intervals ending time
    let prevEnd = intervals[0][1];
    // interate through the entire array starting at the second element
    // O(n)
    for(let i = 1; i < intervals.length; i++){
        // get the current intervals starting and ending time
        const [start, end] = intervals[i];
        // check if the current interval is valid
        if(start >= prevEnd){
            // if it is update the current intervals ending time as out new ending
            prevEnd = end;
        } else {
            // update our result
            result += 1;
            // update prevEnd to the interval that ends the soonest
            prevEnd = Math.min(prevEnd, end);
        }
    }
    // return the result
    return result;
};

// * TEST CASES * //
const intervals1 = [[1,2],[2,3],[3,4],[1,3]];
const intervals2 = [[1,2],[1,2],[1,2]];

const result1 = eraseOverlapIntervals(intervals1);
const result2 = eraseOverlapIntervals(intervals2);

console.log(`----------------
Results: 
intervals1        = [${intervals1}]
result1           = ${result1} 

intervals2        = [${intervals2}]
result2           = ${result2}
----------------\n`);
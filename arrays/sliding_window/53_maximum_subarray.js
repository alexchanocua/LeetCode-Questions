var maxSubArray = (nums) => {
    // variable to hold the max
    let result = nums[0];
    // variable to hold the running total
    let currSum = 0; 
    // iterate through the array
    for(let num of nums){
        // if our current sum is negative
        if(currSum < 0){
            // then ignore the values before it and start the running total at the current num
            currSum = 0;
        }
        // add the current value to the running total
        currSum += num;
        // update our max
        result = Math.max(result, currSum);
    }
    // return our max sum of the contigous subarray
    return result;
};

/* TEST CASES */
const nums1 = [-2,1,-3,4,-1,2,1,-5,4];
const nums2 = [5,4,-1,7,8];

const result1 = maxSubArray(nums1);
const result2 = maxSubArray(nums2);

console.log(
    `
    -----------
    nums1  = [${nums1}]
    result = ${result1}
    
    nums2  = [${nums2}]
    result = ${result2}
    ------------
    `
)

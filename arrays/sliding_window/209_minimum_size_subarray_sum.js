const minSubArrayLen = (target, nums) => {
    // setMinLength to infinity
    let minLength = Number.POSITIVE_INFINITY; 
    // pointers for sliding window
    let start = 0;
    let end = 0;
    // var to hold the current sum 
    let sum = 0;
    // iterate through the array
    while(end < nums.length){
        // add the val at nums[end] to the sum
        sum += nums[end];
        // check if sum >= target
        while(sum >= target){
            // update the min
            minLength = Math.min(minLength, end - start + 1);
            // decrease the window size
            sum -= nums[start];
            start++;
        }
        // increase the window size
        end++;
    }
    return minLength === Number.POSITIVE_INFINITY ? 0 : minLength;
};

// * TEST CASES * //
const nums1 = [2,3,1,2,4,3];
const target1 = 7;

const nums2 = [1,4,4];
const target2 = 4;

const result1 = minSubArrayLen(target1, nums1);
const result2 = minSubArrayLen(target2, nums2);

console.log('------------------');
console.log(`Results: nums=[${nums1}], target=${target1}: ${result1}`);
console.log(`Results: nums=[${nums2}], target=${target2}: ${result2}`);
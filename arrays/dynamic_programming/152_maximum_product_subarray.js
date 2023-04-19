const maxProduct = (nums) => {
    // min and max variables to keep track of min and max of every product
    let min = nums[0];
    let max = nums[0];
    let result = nums[0];
    // iterate through the array starting after the first element
    for(let i = 1; i < nums.length; i++) {
        // save the temp max because we need it to compare in the min
        let tempMax = Math.max(nums[i] * max, Math.max(nums[i] * min, nums[i]));
        // calculate our min product
        min = Math.min(nums[i] * max, Math.min(nums[i] * min, nums[i]));
        // update our max variable
        max = tempMax;
        // update our result
        result = Math.max(result,max);
    }
    return result;
};

// TEST CASES
const nums1 = [2, 3, -2, 4];
const nums2 = [-2, 0, 1];

const result1 = maxProduct(nums1);
const result2 = maxProduct(nums2);

console.log(
    `
-----------
nums1  = [${nums1}]
result = ${result1}

nums2  = [${nums2}]
result = ${result2}
    `
);
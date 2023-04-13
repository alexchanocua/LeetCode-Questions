const twoSum = (nums, target) => {
    // use a hashMap to keep track of the differences
    // key : nums[i], value : index of nums[i]
    const myMap = new Map();
    // results array containing indices of pair
    const result = [];
    // iterate through the array and check the differences of target - nums[i]
    for(let i = 0; i < nums.length; i++) {
        // get the current difference 
        const diff = target - nums[i];
        // check if we have encoutered the difference already
        if(myMap.has(diff)){
            // add it to the results array
            result.push(myMap.get(diff));
            result.push(i);
        } else {
            // add it to our hash-map
            myMap.set(nums[i], i);
        }
    }
    // return the indices of the pair that add to target
    return result;    
};

// * TEST CASES * //
const nums1 = [2,7,11,15];
const target1 = 9;

const nums2 = [3,2,4];
const target2 = 6;

const result1 = twoSum(nums1, target1);
const result2 = twoSum(nums2, target2);

console.log(`----------------
Results: 
nums1, target1:9  = [${nums1}]
result1           = [${result1}] 

nums2, target2:6  = [${nums2}]
result2           = [${result2}]
----------------\n`);
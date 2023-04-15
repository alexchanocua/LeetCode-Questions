const containsDuplicate = (nums) => {
    // add the numbers to a set
    const mySet = new Set(nums);
    // if the set size is equal there are no duplicates
    return !(mySet.size === nums.length);
}

// TEST CASES
const nums1 = [1,2,3,1];
const nums2 = [1,2,3,4];

const result1 = containsDuplicate(nums1);
const result2 = containsDuplicate(nums2);

console.log(
    `
-------
nums1   = [${nums1}]
result1 = ${result1}

nums2   = [${nums2}]
result2 = ${result2}
-------
    `
)
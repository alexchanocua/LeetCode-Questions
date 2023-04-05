const sortColors = (nums) => {
    // two pointers to begin at start of nums and end of nums
    let left = 0;
    let right = nums.length - 1;
    // helper function to swap elements
    const swap = (l, r) => {
        const temp = nums[l];
        nums[l] = nums[r];
        nums[r] = temp;
    }
    // iterate throught the array
    for(let i = 0; i <= right; i++){
        // if 0 swap it to the left, if 2 swap to the right
        if(nums[i] === 0){
            swap(left, i);
            left++;
        } else if(nums[i] === 2){
            swap(right, i);
            right--;
            i--;
        }
    }
    return nums;
};

// * TEST CASES * //
const nums1 = [2,0,2,1,1,0];
const nums2 = [2,0,1];

const result1 = sortColors(nums1);
const result2 = sortColors(nums2);

console.log('------------------');
console.log(`Results: nums=[${nums1}], result=[${result1}]`);
console.log(`Results: nums=[${nums2}], result=[${result2}]`);
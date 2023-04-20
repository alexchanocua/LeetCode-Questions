const search = (nums, target) => {
    // Whenever you need a logn runtime, think Binary Search
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (target === nums[mid]) {
            return mid;
        } else if (nums[left] <= nums[mid]) { // left sorted portion
            if (target > nums[mid] || target < nums[left]) { // search right
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        } else if (nums[right] >= nums[mid]) { // right sorted portion
            if (target < nums[mid] || target > nums[right]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } 
    }
    return -1;
};

// TEST CASES  
const nums1 = [4,5,6,7,0,1,2,3];
const target1 = 0;

const nums2 = [4,5,6,7,0,1,2];
const target2 = 3;

const result1 = search(nums1, target1);
const result2 = search(nums2, target2);

console.log(
    `
----------
nums1  = [${nums1}]
target = ${target1}
result = ${result1}

nums2  = [${nums2}]
target = ${target2}
result = ${result2}
----------
    `
)
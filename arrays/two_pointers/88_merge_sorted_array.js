const merge = (nums1, m, nums2, n) => {
    // get the last index of nums1
    let last = m + n -1;

    // merge in reverse order
    while(m > 0 && n > 0){
        if(nums1[m - 1] > nums2[n - 1]){
            nums1[last] = nums1[m - 1];
            m--;
        } else {
            nums1[last] = nums2[n - 1];
            n--;
        }
        last--;
    }

    // fill any remaining elements in nums2 into nums1
    while(n > 0){
        nums1[last] = nums2[n - 1];
        n--;
        last--;
    }
}

// * TEST CASES * //
const nums1 = [1,2,3,0,0,0];
const nums1Copy = [...nums1];
const m1 = 3;
const nums2 = [2,5,6];
const n1 = 3;

merge(nums1, m1, nums2, n1);

console.log(`----------------
Results: 
nums1(before) = [${nums1Copy}]
nums2         = [${nums2}] 
nums1(after)  = [${nums1}]
----------------\n`);
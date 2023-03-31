const lengthOfLongestSubstring = (s) => {
    // use a set to keep track of the unique characters
    const uniqSet = new Set();
    // start and end pointers for sliding window
    let start = 0;
    let end = 0;
    // variable to hold the longest substring
    let longest = 0;
    // iterate through the string 
    while(end < s.length){
        // check if the current char is in the set
        if(!uniqSet.has(s[end])){
            // add it to the set
            uniqSet.add(s[end]);
            // check the max
            longest = Math.max(longest, end - start + 1);
            // increase the window
            end++;
        } else {
            // remove the starting character from the set
            uniqSet.delete(s[start]);
            // minimize the window
            start++;
        }
    }
    return longest;
};

// * TEST CASES * //
const s1 = "abcabcbb";

const s2 = "pwwkew";


const result1 = lengthOfLongestSubstring(s1);
const result2 = lengthOfLongestSubstring(s2);

console.log('------------------');
console.log(`Results: s=${s1} : ${result1}`);
console.log(`Results: s=${s2} : ${result2}`);
console.log('------------------');
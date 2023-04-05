const countSubstrings = (s) => {
    // count : number of palindromic substrings
    let count = 0; 
    // helper function to find palindromic subtring count given starting points
    const getPalindromes = (l,r) => {
        let tempCount = 0;
        while(s[l] === s[r] && l >= 0 && r < s.length){
            // increment the count and expand outwards
            tempCount+=1;
            l--;
            r++;
        }
        return tempCount;
    };

    // iterate through the string
    for(let i = 0; i < s.length; i++){
        // find odd palindromes
        count += getPalindromes(i, i);
        // find even palindromes
        count += getPalindromes(i, i+1);
    }
    // return result
    return count;   
};

// * TEST CASES * //
const s1 = "abc";

const s2 = "aaa";


const result1 = countSubstrings(s1);
const result2 = countSubstrings(s2);

console.log('------------------');
console.log(`Results: s=${s1} : count=${result1}`);
console.log(`Results: s=${s2} : count=${result2}`);
console.log('------------------');
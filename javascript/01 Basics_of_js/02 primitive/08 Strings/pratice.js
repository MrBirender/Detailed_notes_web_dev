/* reverse a string wihtout using inbuilt function */
let str = "Hello";
let revStr = ''
for(let i=str.length-1; i>=0; i--){
    revStr += str[i]
}
// console.log(revStr)

let str1 = "ytnub";
/* split makes arr */
console.log(str1.split('').reverse().join(''))

let str3 = 'apple apple mango orange apple apple'
// to replace all occurence at once.
console.log(str3.replace(/apple/g, "orange"))

let str4 = 'banana';
console.log(str4.split('a').length-1)

function areAnagrams(str1, str2) {
    let normalize = str => str.toLowerCase().split("").sort().join('')
    return normalize(str1) === normalize(str2)
    // return normalize(str1) === normalize(str2);
}

console.log(areAnagrams("listen", "silent")); // Output: true
console.log(areAnagrams("hello", "world"));  // Output: false


function findLongestWord(sentence) {
   return sentence.split(" ").reduce((pre, cur)=> 
        cur.length > pre.length ? cur : pre, ''
    )
}

console.log(findLongestWord("JavaScript is amazing")); // Output: "JavaScript"

/* start here  */
/* 
Question: How do you determine if a string is a palindrome? Answer:

javascript
Copy
Edit
function isPalindrome(str) {
    let cleaned = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    return cleaned === cleaned.split("").reverse().join("");
}

console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
console.log(isPalindrome("hello")); // Output: false
Question: How do you find all substrings of a string? Answer:

javascript
Copy
Edit
function getAllSubstrings(str) {
    let substrings = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            substrings.push(str.slice(i, j));
        }
    }
    return substrings;
}

console.log(getAllSubstrings("abc")); 
// Output: ["a", "ab", "abc", "b", "bc", "c"]
Question: How do you check if a string starts and ends with the same character? Answer:

javascript
Copy
Edit
function startsAndEndsWithSameChar(str) {
    if (str.length === 0) return false;
    return str[0] === str[str.length - 1];
}

console.log(startsAndEndsWithSameChar("radar")); // Output: true
console.log(startsAndEndsWithSameChar("hello")); // Output: false */

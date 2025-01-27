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

function checkPalindrome(input){
const cleanedStr = input.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
/* this above line checks if the input has other then A-Z , a-z, 0-9 then remove that from the input.
g insures that the process will be done throughout the complete arr, not just to the first one.
and passing empty string "" doen't mean it will replace them but it wiil remove them.
ex: Hello World = HelloWorld => toLowerCase() => helloworld

*/
console.log(cleanedStr)
const reversedStr = cleanedStr.split('').reverse().join('')
console.log(reversedStr)
return cleanedStr === reversedStr
}

const result = checkPalindrome('A man a plan a canal Panama')
console.log(result)

let str6 = 'Maya';
// console.log(str6.indexOf("a"))
// console.log(str6.lastIndexOf("a"))

function findFirstNonRepeatedChar(input){
    input = input.toLowerCase()
    for(let i=0; i<input.length; i++){
        console.log(input.indexOf(input[i]))
        console.log(input.lastIndexOf(input[i]))
        if(input.indexOf(input[i]) === input.lastIndexOf(input[i])){
            return `This is Char: ${input[i]}`
        }
        return null
       
    }

}
const result1 = findFirstNonRepeatedChar('maya')
console.log(result1)

console.log("below it")

function countOccurence(str, subStr){
let count = 0;
let position = str.indexOf(subStr)
while(position !== -1){
    count++;
    position = str.indexOf(subStr, position+1)
}
return count;
}

console.log(countOccurence('Hai my name is maya and maya is my name', 'maya'))
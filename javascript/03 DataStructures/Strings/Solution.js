/* ✅ Reverse a string → **Array (`split()`, `reverse()`, `join()`)**   */

function reverseString(str) {
  return str.toLowerCase().split("").reverse().join("");
}

const input = "Maya";
const result = reverseString(input);
console.log(result);

/* - ✅ Check if a string is a palindrome → **Two-pointer, Array**   */

function checkPalindrome(str) {
  const reversedStr = str.toLowerCase().split("").reverse().join("");
  if (str.toLowerCase === reversedStr) {
    return true;
  } else {
    return false;
  }
}
const input2 = "Birender";
console.log(checkPalindrome(input2));

/* ✅ Convert case (upper/lower) → **String methods (`toUpperCase()`, `toLowerCase()`)**  */

function convertCase(str, type) {
  if (type === "toUpper") {
    return str.toUpperCase();
  } else if (type === "toLower") {
    return str.toLowerCase();
  }
  const charArr = str.split("");
  const resultedArr = [];

  for (const char of charArr) {
    if (char === char.toLowerCase()) {
      resultedArr.push(char.toUpperCase());
    } else {
      resultedArr.push(char.toLowerCase());
    }
  }
  return resultedArr.join("");
}
/* type: toUpper, toLower, toggle */
console.log(convertCase("helLo woRld", "toggle"));

/* changing case without using the inbuild funcitons */
const input3 = "Birender";

// for (let i = 0; i < input3.length; i++) {
//   console.log(input3.charCodeAt(i));
// }
// console.log(input3.charCodeAt(0))
/* for smalle a to z 97 => 122 
for capitals A to Z 65 => 90
*/

function changeCase(str) {
  const newCase = [];
  for (let i = 0; i < str.length; i++) {
    const asciiCode = str.charCodeAt(i);
    if (asciiCode > 64 && asciiCode < 91) {
      const letter = String.fromCharCode(asciiCode + 32);
      newCase.push(letter);
    } else {
      const letter = String.fromCharCode(asciiCode - 32);
      newCase.push(letter);
    }
  }

  return newCase.join("");
}

console.log(changeCase("BireNder"));

/* ✅ Remove spaces/special characters → **Regex, Array (`split()`, `filter()`) */

/* ✅ Find the first non-repeating character → **Map for frequency count**   */

/* Question 1:Non repeating character - You are given a string consisting of only lower case and upper-case English Alphabets and integers 0 to 9. Write a function that will take this string as Input and return the index of the first character that is non-repeating. */

const input4 = "adfdcface";

function firstNonRepeatingChar(str) {
  let unique;
  for (let i = 0; i < str.length-1; i++) {
    const char = str[i]
    for (let j = i + 1; j < str.length; j++) {
      if(str[j] !== char && j === str.length){
        return
      }
    }
  }
}

console.log(firstNonRepeatingChar(input4));

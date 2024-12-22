
// -----------------------------------
// Essential JavaScript String Methods
// -----------------------------------

// STRING MANIPULATION

// Remove whitespaces from both sides
let str = "   Hello, World! woRLd w.rldo";
console.log(str.trim()); // "Hello, World!"

// Convert to uppercase or lowercase
console.log(str.toUpperCase()); // "   HELLO, WORLD!   "
console.log(str.toLowerCase()); // "   hello, world!   "

// Replace substring
console.log(str.replace("world", "Universe")); // "   Hello, Universe!   "
console.log(str.replace(/World/gi, "Universe")); // Replace all matches using regex
//  it can replce all case sensitive or insensitive


// Repeat a string
console.log('hi'.repeat(3)); // "HiHiHi"

// -----------------------------------

// STRING SEARCH

// Find position of substring
console.log(str.indexOf("World")); // 9
console.log(str.lastIndexOf("o")); // 10

// Check if substring exists
console.log(str.includes("h")); // true

// Check start or end
console.log(str.startsWith("   Hello")); // true
console.log(str.endsWith("!   ")); // true

// -----------------------------------

// STRING SLICING

// Extract part of a string
console.log(str.slice(3, 8)); // "Hello"
console.log(str.substring(3, 8)); // "Hello" (no negative indices allowed)
console.log(str.substr(3, 5)); // "Hello" (start at index 3, length 5)

// -----------------------------------

// SPLITTING AND JOINING STRINGS

// Convert string to array
let sentence = "Hello, World!";
console.log(sentence.split(", ")); // ["Hello", "World!"]

// Convert array to string
let arr = ["Hello", "World"];
console.log(arr.join(", ")); // "Hello, World"

// -----------------------------------

// STRING PADDING

// Add padding to a string
let num = "5";
console.log(num.padStart(3, "0")); // "005"
console.log(num.padEnd(3, "0")); // "500"

// -----------------------------------

// STRING ITERABILITY

// Iterate over characters
for (let char of "Hello") {
    console.log(char); // Logs each character: H, e, l, l, o
}

// -----------------------------------
// JavaScript Inbuilt Number Methods
// -----------------------------------

// Check if a value is NaN (Not a Number)
// console.log(isNaN("abc")); // true
// console.log(isNaN(123)); // false

// // Check if a value is finite
// console.log(isFinite(10)); // true
// console.log(isFinite(Infinity)); // false

// Check if a number is an integer
// console.log(Number.isInteger(42)); // true


// console.log(Number.isInteger(42.5)); // false

// Convert a string to a number
// console.log(Number("42")); // 42
// console.log(parseInt("42.5")); // 42
// console.log(parseFloat("42.5")); // 42.5

// // Convert a number to a string
// let num = 123;
// console.log(num.toString()); // "123"

// // Format a number with fixed decimal places
// console.log(num.toFixed(2)); // "123.00"

// // Format a number with exponential notation
// console.log(num.toExponential(2)); // "1.23e+2"

// // Positive and negative infinity
// console.log(1 / 0); // Infinity
// console.log(-1 / 0); // -Infinity

// // NaN (Not a Number)
// console.log(0 / 0); // NaN

// // Maximum and minimum representable values
// console.log(Number.MAX_VALUE); // Largest positive number
// console.log(Number.MIN_VALUE); // Smallest positive number

// let num = 233.4523423
// let sum = num.toFixed(2)
// console.log(typeof(sum)) // string

/* */
/* 
parseInt() converts a string to an integer and binary and hexadecimal numbers also.
it parse untill it encounters something not part of a valid number.
*/
const str = 'b123' //it stops where it finds a non numerical value
const num = parseInt(str)
console.log(num) // nan

/* but in the case of Number() it will parse the whole str in  an number it can't filter out the num from the str */
const str2 = '123b'
const num2 = Number(str)
console.log(num2) // it will give nan but parseInt will give 123.

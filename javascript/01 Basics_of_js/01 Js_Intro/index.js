




// 1. "33" => 33 as in number
// 2. "33abc" => NaN print in console but it shows number in its type check because nan is unique number 
// in js memory.
// 3. true  => 1, and false = 0;

const string = '33abc';
const number = Number(string);
// console.log(typeof number)

let num = [];
let num2 = [];
// console.log(num === num2)
// console.log(typeof num, typeof num2)


/* changin to boolean */
// let numb = 1;
let numb = {} // [], {},=> true ("") false;
let bool = Boolean(numb);
// console.log(typeof bool)

/* crearing primitive data types using new */
let newNum = new Number(33);
let newBool = new Boolean(true);
let newStr = new String('hello');
console.log(typeof newNum)
console.log(typeof newBool)
console.log(typeof newStr)

/* Key Takeaway
they are created using consturctor methods.
Primitive values are simpler and more efficient.
Wrapper objects are objects and should only be used when you specifically need an 
object representation of a primitive value, such as when extending functionality or adding cust
om methods. */

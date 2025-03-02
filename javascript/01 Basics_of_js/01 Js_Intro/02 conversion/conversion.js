/* arithmatic operaions with primitivs */

console.log('5' + 5)
console.log(true + 5)
console.log(undefined + 5)// undefined can't be coerced
console.log(null + 5)
// console.log(Symbol + 5)
// console.log(BigInt + 5)
console.log(5 + 5)

console.log('secnod part') 

console.log('5' * 5)
console.log(true * 5)
console.log(undefined * 5)
console.log(null* 5)


console.log('third part') 

console.log('5' / 5)
console.log(true / 5)
console.log(undefined / 5)
console.log(null/ 5)


console.log('fourth part') 

console.log('5' - 5)
console.log(true - 5)
console.log(undefined - 5)
console.log(null- 5)

/* in arithmatice operaiton null is coered to zero */

/* comparsions with primitives */

console.log('5th part')

console.log('5' == 5)
console.log('1' == true)
console.log('1' == undefined)

/* null is coerced to zero but when cheking equality they are not equal to any one because they have seperate rules. and theya re only equal to each other */
console.log(null == 0) // doubt alert
console.log(null == undefined) // doubt alert


/* comparisos with non-primitive data types. */

console.log('non-primitives')
console.log([] + '5')
console.log({}- "5")
console.log({} - 5)
console.log({} * '5')
console.log({}/"5")

/* we can't perform mathematical operaition with primitve and non-primitive */


console.log('non-primitives')
console.log([] == '0')
console.log([] == 0)
const hello = () => {}
console.log(hello == 0)
/* 
[] converts to "" (empty string) because .toString() on an array returns a string.
{} converts to "[object Object]" because objects have no default meaningful primitive conversion. */

console.log(0 === -0);

const s ={}.valueOf()
console.log( s.toString())


/* [].toString() → "" → 0
{}.toString() → "[object Object]" → NaN */


/* In browsers, {} alone is treated as a block of code.
In Node.js, {} is interpreted as an object, so it follows JavaScript's coercion rules.
To compare an object in the browser console, use parentheses: ({} == 0).
Objects do not coerce to numbers, so {} == 0 is always false.
Hope this clears things up! 🚀 Let me know if you have any more doubts. 😃 */
console.log({}.valueOf())


console.log({} == {})
console.log({} === {})
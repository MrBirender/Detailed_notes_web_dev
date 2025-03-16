/* match the pattern using test() and match() */

let regex = /\d/   //don't include space in between.
console.log(regex.test('abc1'))

/* to check one or more occurences */
console.log(/\d+/.test('gheranp'))


/* need to get the mathced result */

const result = 'abc123'.match(/\d+/)
console.log(result)
/* why it gives the complete array */



/* remove species and special character using replace */

const input = 'Hello World  hot\ntomato';
console.log(input.replace(/\s/g, ''))
/* we add g for global changes or to apply the change throughout the string */
""
/* passing an array in regex to save the needed char */

const input2 = 'Hello@# World123!';

console.log(input2.replace(/[^a-zA-Z0-9]/g, ""))
/* ^what is the use of this symbol removal of it provides all the symbols other than in array */


/* spliting a str  using regex */

const input3 = 'Hello; Wrold:, %tomato&tumbak *reanodm';

const output = input3.split(/[;:,%& *]+/)
console.log(output)

/*check an email if it is valid or not  */

const emailRegex = /^[a-zA-Z0-9._%-]+@[a-zA-z0-9]+\.[a-zA-Z]{2,}$/;

function isValidEmail(email){
    return emailRegex.test(email)
}   

console.log(isValidEmail('dev.birender-maya_buku@gmail.com'))

/* write a regex which contains only digits form start to end */


const digitRegex = /^\d+$/
function isOnlyDigits(str){
    return digitRegex.test(str)
}

console.log(isOnlyDigits('123456789'))
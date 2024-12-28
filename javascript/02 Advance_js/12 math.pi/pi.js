// can we change the value of pi? or not tell me the reasona also.

console.log(Math.PI); // 3.141592653589793
//if i try to chnage it
Math.PI = 3.14;
console.log(Math.PI); // 3.141592653589793

// reason for that
const desraptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(desraptor);
/* { *** these all are set to fals that's why it is not changable
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
} */

const desraptors = Object.getOwnPropertyDescriptors(Math);
console.log(desraptor);

// lets try it with my own object
const user = {
    name: "shubham",
    age: 21
}

const desraptor2 = Object.getOwnPropertyDescriptor(user, "name");

console.log(desraptor2);
/* {
  value: 'shubham',
  writable: true,
  enumerable: true,
  configurable: true
}
 */	

//lets change them:
Object.defineProperty(user, "name", {
    value: "shubham",
    writable: false, // it means that we can't change the value
    enumerable: false, // it means that we can't access the value
    configurable: false,// it means that we can't delete the value
    iterable: false, // it means that we can't iterate the value
})

const desraptor3 = Object.getOwnPropertyDescriptor(user, "name");
console.log(desraptor3);
/* {
  value: 'shubham',
  writable: false,
  enumerable: false,
  configurable: false
} */

//changing them collectively
Object.defineProperties(user, {
    name: {
        value: "shubham",
        writable: false, // it means that we can't change the value
        enumerable: false, // it means that we can't access the value
        configurable: false,// it means that we can't delete the value
        iterable: false, // it means that we can't iterate the value
    },
    age: {
        value: 21,
        writable: false, // it means that we can't change the value
        enumerable: false, // it means that we can't access the value
        configurable: false,// it means that we can't delete the value
        iterable: false, // it means that we can't iterate the value
    }
})


// here we get all the values of the object
const desraptor4 = Object.getOwnPropertyDescriptors(user);
console.log(desraptor4);
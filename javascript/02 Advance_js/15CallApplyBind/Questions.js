function sayHai(name) {
  console.log(`My name is ${name} and my age is ${this.age}`);
}
const obj = { age: 25 };

// sayHai.call( obj, 'birender')
// sayHai.call( obj, 'birender')
// sayHai.call( obj, 'birender')

function sayHello(name, city) {
  console.log(
    `My name is ${name} and my age is ${this.age} and i am from ${city}`
  );
}
const obj1 = { age: 25 };

// sayHello.apply(obj1, ['name', 'city'])
// sayHello.apply(obj1, ['name', 'city'])
// sayHello.apply(obj1, ['name', 'city'])

function sayHowdy(name, city) {
  console.log(
    `My name is ${name} and my age is ${this.age} and i am from ${city}`
  );
}
const obj2 = { age: 25 };

const bindFunc = sayHowdy.bind(obj2);

// bindFunc('name', 'city')
// bindFunc('name2', 'city2')

/* Question 1 */

// Call, Bind and Apply in Javascript (Explicit Binding)
// Question 4 - Output Based Question
const person = { name: "Piyush" };

function sayHi(age) {
  return "${this.name) is ${age}";
}

// console.log(sayHi.call (person, 24))// return Piyush is 24
// console.log(sayHi.bind (person,24))// return a function

// Queston5

const age = 10;

const person1 = {
  name: "Piyush",
  age: 20,
  getAge: function () {
    return this.age;
  },
};

const person2 = { age: 29 };

// person1.getAge.call(person2) // return 29

// /*  Quesiton 3 */
// var status = "smile";
// /* here this which is an empty global object we can add values and fucntion to it*/

// console.log(this); // {}
// // this.status = 'smile'

// setTimeout(() => {
//   const status = "love";

//   const data = {
//     status: "avacado",
//     getStatus() {
//       return this.status;
//     },
//   };

//   console.log(data.getStatus());
//   console.log(data.getStatus.call(this));
// }, 0);

/* this will give two different outputs in vs code termail and browser console . the reasong i have stated above.*/

const efcData = {
  status: "crying",

  testfuncContext: function () {
    const status = "love";

    const data = {
      status: "avacado",
      getStatus() {
        return this.status;
      },
    };

    console.log(data.getStatus());
    console.log(data.getStatus.call(this)); // this will give crying
  },
};

// efcData.testfuncContext();

// testfuncContext();

/* Question 4 */
const animal = [
  { species: "Lion", name: "King" },
  {
    species: "Tiger",
    name: "Raj",
  },
];

function printAnimal(i) {
  this.print = function () {
    console.log("#" + i + " " + this.species + ": " + this.name);
  };
  this.print();
}

// printAnimal.call(animal[0])

for (let i = 0; i < animal.length; i++) {
  //  printAnimal.call(animal[i], i+1)
}

/* how to concat two array using apply */
const arr1 = [1, 2, 3];
const arr2 = ["a", "b", "c"];

// console.log(arr1.concat(arr2))
// console.log([...arr1, ...arr2])

// for(let i=0; i<arr2.length; i++){
//   arr1.push(arr2[i])
// }
// console.log(arr1)

arr1.push.apply(arr1, arr2);
/* here we need to specify the value of this to push fucniton because apply has changed the context.For that we can use call */
console.log(arr1);

/* but it is not the same with all the fucntion like math.max and math.min they ignores this context so we can pass null there. */

/* find max using apply */
const numbers = [1, 2, 3, 4, 5, 6];

console.log(Math.max.apply(null, numbers));

/* Question */
function findThis() {
  console.log(this);
}

let user = {
  g: findThis.bind(null),
};
user.g();
/* it will give the windwo object. */

/* double binding */
function binding() {
  console.log(this.name);
}

const f = binding.bind({ name: "Piyush" });
const r = f.bind({ name: "Raj" });

r();
/* bind channning doesn't exists */

/* make a pssword checker */

function checkPassword(sucess, failed) {
  const password = prompt("enter password");

  if (password === "1234") {
    sucess();
  } else {
    failed();
  }
}

const user1 = {
  name: 'Birender',
  loginSuccessFull: function(){
    console.log(`Welcome ${this.name}`)
  },

  loginFailed: function(){
    console.log(`Failed to login ${this.name}`)
  }
}

checkPassword( user1.loginSuccessFull.bind(user1), user1.loginFailed.bind(user1))


// Extract the first, third (with a default value of 'Orange' if it’s undefined), and the last fruit. Skip the second fruit.

const fruits = ["Apple", "Banana", undefined, "Mango", "Pineapple"];

const [first, , third = "orange", , last] = fruits;

// console.log(first, third, last)

/* i can use comma to skip the destrutring to skip a particular item  */

// Destructure the name and location properties, but rename them to userName and userLocation.
const user = {
  id: 101,
  name: "John Doe",
  age: 28,
  location: "New York",
};

const { id, location: mylocation, name: userName, age } = user;

// console.log(id, userName, age, mylocation);
/*    Extract title, brand, ram, and storage using nested destructuring.
 */

const product = {
  ide: 1,
  title: "Laptop",
  details: {
    brand: "Dell",
    specs: {
      ram: "16GB",
      storage: "512GB SSD",
    },
  },
};

const {
  ide,
  title,
  details: {
    brand,
    specs: { ram, storage },
  },
} = product;

//   console.log(title, brand, ram, storage);

/*   Destructure theme and language, with a default value of false for notifications. Use the rest operator to gather any remaining properties. */

const settings = {
  theme: "dark",
  language: "English",
  notifications: true,
  birender: "birender",
};

const { theme, language, notifications = false, ...otherSettings } = settings;

console.log(theme, language, notifications, otherSettings);

/* in place of rest we can give ...anyName  */

// Destructure the first two numbers and gather the rest of the numbers in a new array called remainingNumbers.

const numbers = [10, 20, 30, 40, 50];

const [firstva, second, ...remainingNumbers] = numbers;

console.log(firstva, second, remainingNumbers);

/* 6. Function Parameter Destructuring (Object)
Question:
Write a function displayBookInfo that accepts an object as an argument with properties: title, author, and year. Destructure these properties inside the function and log them. Provide a default value for year if it’s not passed. */

function displayBookInfo({ title, author, year = "N/A" }) {
  console.log(title, author, year);
}

const obj = {
  title: 1,
  author: 2,
};

displayBookInfo(obj);

/*;
Use nested array destructuring to extract red, green, and yellow. */
const colors = [
  ["red", "green"],
  ["blue", "yellow"],
];

const [[fc, sc], [, tc]] = colors;
console.log(fc, sc, tc);

// Destructure the array to extract the name of the second employee and the department of the first employee.

const employees = [
  { name1: "Alice", department: "HR" },
  { name1: "Bob", department: "Engineering" },
];

const [{ department }, { name1 }] = employees;
console.log(name1, department);

/* swapping problem */
/* Question:
Without using a temporary variable, swap the values of a and b: */

let a = 5;
let b = 10;

// swapping these with temp

let temp = a;
a = b;
b = temp;

/* using destructuring */

let z = 14;
let y = 15;

/* some time js automatic asi automatci semicolon insertion can malfucntion and can give errors like ; 

Uncaught ReferenceError: Cannot access 'y' before initialization
    at Destructuring.js:131:5*/

[z, y] = [y, z];

console.log(z, y);

/*   Destructure name, theme, and language (with a default value of 'English') from userData while safely handling cases where preferences or language may be missing.
 */

const userData = {
  profile: {
    name: "Jane",
   
  },
};

const {
  profile: {
    name,
    age2,
    preferences: { theme1, language1 = "English" } = {},
  },
} = userData;

/* it works like that if value is missing then we can provied the empty obj that will prevent the code to break */

console.log(name, age2, theme1, language1);

/* clear this block scope error. can't redeclare block scope. */

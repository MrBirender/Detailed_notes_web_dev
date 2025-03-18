const numbers = [10, 20, 30, 40];

function findSum(arr) {
  return arr.reduce((acc, curr) => {
    return acc + curr;
  });
}

console.log(findSum(numbers));

function findMaxVal(arr) {
  return arr.reduce((acc, curr) => {
    return curr > acc ? curr : acc;
  }, arr[0]);
}

console.log(findMaxVal([3, 7, 2, 9, 5]));

/* find the occurence of each word */
function countOccurence(arr) {
  const count = {};
  arr.map((curr) => {
    if (count.hasOwnProperty(curr)) {
      count[curr] += 1;
    } else {
      count[curr] = 1;
    }
  });

  return count;
}

const words = ["apple", "banana", "apple", "orange", "banana", "banana"];

console.log(countOccurence(words));
/* why apple is coming for one time only */

/* above solution using only reduce */

function findOccurence(arr) {
  return arr.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
}
console.log(findOccurence(words));

function flatenArr(arr) {
  return arr.reduce((acc, curr) => {
    return acc.concat(curr);
  }, []);
}
const nestedArray = [
  [1, 2],
  [3, 4],
  [5, 6],
];

// console.log(flatenArr(nestedArray));

/* grouping using reduce */

const products = [
  { name: "Laptop", category: "Electronics", price: 1000 },
  { name: "Shirt", category: "Clothing", price: 30 },
  { name: "Phone", category: "Electronics", price: 500 },
  { name: "Jeans", category: "Clothing", price: 50 },
  { name: "TV", category: "Electronics", price: 700 },
  { name: "Watch", category: "Accessories", price: 200 },
];

function grouping(arr) {
  return arr.reduce((acc, curr) => {
    acc[curr.category] = acc[curr.category] || [];
    acc[curr.category].push(curr);
    return acc;
  }, {});
}

// console.log(grouping(products));

/* interview quesiton filter according to age. */
const people = [
  { name: "Amit", age: 21, gender: "Male", group: "below22" }, // Below 22
  { name: "Priya", age: 22, gender: "Female", group: "exactly22" }, // Exactly 22
  { name: "Rahul", age: 25, gender: "Male", group: "above22" }, // Above 22
  { name: "Sneha", age: 19, gender: "Female", group: "below22" }, // Below 22
  { name: "Vikram", age: 22, gender: "Male", group: "exactly22" }, // Exactly 22
  { name: "Ananya", age: 28, gender: "Female", group: "above22" }, // Above 22
];

// console.log(people);
function filterBasedOnAge(arr) {
  return arr.reduce((acc, curr) => {
    acc[curr.group] = acc[curr.age] || [];
    acc[curr.group].push(curr);
    return acc;
  }, {});
}

// console.log(filterBasedOnAge(people));

/* this quesiton can be done without using group in the people data base: */

function filterWihtoutGroup(arr) {
  return arr.reduce((acc, curr) => {
    let category =
      curr.age > 22 ? "above22" : curr.age < 22 ? "below22" : "exact22";

    if(!acc[category]){
        acc[category] = []
    }

    acc[category].push(curr)

    return acc
  });
}
const people2 = [
  { name: "Amit", age: 21, gender: "Male" }, // Below 22
  { name: "Priya", age: 22, gender: "Female" }, // Exactly 22
  { name: "Rahul", age: 25, gender: "Male" }, // Above 22
  { name: "Sneha", age: 19, gender: "Female" }, // Below 22
  { name: "Vikram", age: 22, gender: "Male" }, // Exactly 22
  { name: "Ananya", age: 28, gender: "Female" }, // Above 22
];
// console.log(filterWihtoutGroup(people2));

/* find the next palindrome */
/* how to find out the prime number */
/* more nested object sorting grouping and filtering. */


function isPalindrome(num){
  return num.toString() === num.toString().split('').reverse().join('')
}


function nextPalindrome(n){
  let nextNum = n + 1;
   
  while(!isPalindrome(nextNum)){
    nextNum++
  }
  return nextNum
}

console.log(nextPalindrome(131))
/* there is an optimised version there have a look at that also. */

function mirror(firstHalf, length) {
  let secondHalf = firstHalf.split("").reverse().join(""); // Reverse for mirroring
  return length % 2 === 0
      ? firstHalf + secondHalf // Even length, full mirror
      : firstHalf + secondHalf.substring(1); // Odd length, skip duplicate middle digit
}
let str = (121).toString()
let firstHalf = str.substring(0, Math.ceil(str.length / 2))
// console.log(mirror(firstHalf, str.length))
// console.log(("21").substring())


/* prime number */

function findPrimeNum(start, end){
   const primeArr = []
    for(let i=start; i<=end; i++){
      if(i < 2) continue

      let j = i-1
      const check = []
      while(j >= 2){
        if((i % j === 0)){
          check.push(0)
        }else{
          check.push(1)
        }
        j--
      }

      let isOne = check.every((val)=> val === 1);
      if(isOne){
        primeArr.push(i)
      }
    }

    return primeArr
}

// console.log(findPrimeNum(1, 100))

function findPrimeNum(start, end) {
  const primeArr = [];

  for (let i = start; i <= end; i++) {
      if (i < 2) continue; // Skip numbers less than 2 (1 is not prime)

      let isPrime = true;
      for (let j = 2; j * j <= i; j++) {  // Only check up to sqrt(i)
          if (i % j === 0) {
              isPrime = false;
              break;  // Exit early if we find a divisor
          }
      }

      if (isPrime) {
          primeArr.push(i);
      }
  }

  return primeArr;
}

// console.log(findPrimeNum(3, 10)); // Output: [3, 5, 7]




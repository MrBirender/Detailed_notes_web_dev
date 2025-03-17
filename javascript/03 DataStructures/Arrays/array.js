function removeDuplicates(arr) {
  const newSet = new Set(arr);

  return [...newSet];
}

const input = [1, 2, 3, 1, 2, 3, 4, 5, 6, 4, 5, 6, 7];
// console.log(removeDuplicates(input))

/* data grouptin filterin and sorting */
let scores = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 39 }, // Failing
  { name: "Alice", score: 72 },
  { name: "Bob", score: 28 }, // Failing
  { name: "Charlie", score: 95 },
  { name: "Alice", score: 33 }, // Failing
  { name: "Charlie", score: 40 },
  { name: "Bob", score: 19 }, // Failing
];

// const twoDArray = [1, [2, 2, 3], [4, 4, 5], 6];
// const twoDArray = [1, [2, 2, 3], [4, 4, 5], 6];

// function filterandFlaten(arr) {
//   const flattendArr = arr.flat();
//   const frequencyMap = new Map();

//   for (const num of flattendArr) {
//     if (!frequencyMap.has(num)) {
//       frequencyMap.set(num, 1);
//     }
//   }

//   return [...frequencyMap.entries()].map(([key]) => key);
// }
// console.log(filterandFlaten(twoDArray))
const twoDArray = [1, 2, [2, 3], [3, 4], 4, 5];
function returnDuplicates(arr) {
  const flattendArr = arr.flat();
  const frequencyMap = new Map();
  const duplicates = new Set();

  //   console.log(flattendArr);

  for (const num of flattendArr) {
    if (frequencyMap.has(num)) {
      duplicates.add(num);
      frequencyMap.delete(num);
    } else {
      frequencyMap.set(num, 1);
    }
  }
  return [...frequencyMap.entries()].map(([key]) => key);
}

// console.log(returnDuplicates(twoDArray));

// first not -repating elements:
function firstNonRepeatingEle(arr) {
  const freqMap = new Map();

  arr.forEach((num) => freqMap.set(num, (freqMap.get(num) || 0) + 1));

  console.log(freqMap);
  for (const num of arr) {
    if (freqMap.get(num) === 1) return num;
  }

  return -1;
}
// const input1 = [4, 5, 1, 2, 1, 2, 4];
// console.log(firstNonRepeatingEle(input1));

function findduplicates(arr) {
  const seen = new Set();
  const duplicates = new Set();

  for (const num of arr) {
    if (seen.has(num)) {
      duplicates.add(num);
    } else {
      seen.add(num);
    }
  }

  return { duplicates: [...duplicates], seen: [...seen] };
}

// console.log(findduplicates([1, 2, 3, 4, 4, 5, 5]))

/* find paris that sums to the target */

//1. Brute Force Method
function findPairs(arr, target) {
  const pairs = [];

  for (let i = 0; i < arr.length - 1; i++) {
    const value = arr[i];

    for (let j = i + 1; j < arr.length; j++) {
      if (value + arr[j] === target) {
        pairs.push([value, arr[j]]);
      }
    }
  }
  return pairs;
}

// console.log(findPairs([1, 3, 2, 2, 4, 5], 5)); //

/* finding paris using sets */

function findPairsUsingSet(arr, target) {
  const seen = new Set();
  const pairs = new Set();

  for (const num of arr) {
    const compliment = target - num;
    if (seen.has(compliment)) {
      pairs.add(
        [Math.min(num, compliment), Math.max(num, compliment)].toString()
      );
    } else {
      seen.add(num);
    }
  }

  return { pairs: [...pairs], seen: [...seen] };
}

console.log(findPairsUsingSet([1, 3, 2, 2, 4, 5], 5));


/* find the intersection between two arrays */

function findIntersection(arr1, arr2){
    const set1 = new Set(arr1)
    const intersection = new Set()

    return arr2.filter(num => set1.has(num))
    
    // for(const num of arr2){
    //     if(set1.has(num)){
    //         intersection.add(num)
    //     }
    // }

    // return intersection
    
}

// console.log(findIntersection([1, 2, 3, 4], [2, 4, 6, 8]))

const newset = new Set([1, 2, 3])
newset.add(3)
console.log(newset)



/* count how many times each elements appear in the array */

function countFrequency(arr){
    const frequency = new Map()

    for(const num of arr){
        if(!frequency.has(num)){
            frequency.set(num, 1)
        }else{
            frequency.set(num, (frequency.get(num) + 1 ))
        }
    }
    return frequency
}

console.log(countFrequency([1, 2, 3, 4, 3, 2, 1, 2, 4, 3, 6]))

// const map = new Map([[1, 1], [2, 3]])

// console.log(map.get(2))
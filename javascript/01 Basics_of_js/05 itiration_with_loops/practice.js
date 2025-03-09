
const arr = [1, 2, 3, 4, 5, 6]

/* reverse an array */
function reverseArray(array){
    let reversedArr = []
    let left = 0;
    let right = array.length-1;

    // for(let i=array.length-1; i>=0; i--){
    //     reversedArr.push(array[i])
    // }
    // optimal approach but creates new array, time o(n) space o(n)



    // const reversedArr = array.reverse()
    /* return the original arr doesn't create a new one in space o(1) time o(n)
    if wnats to intact with the origianl array the use this
     const reversedArr = [...array].reverse() this will increase the space o(n)*/

    // for(let i=0; i<array.length; i++){
    //     reversedArr.unshift(array[i])
    // }
    /* Least otimal approach becuase every time it is going to change the index of all elements 
    time o(n)**2 space o(n) */


    /* best approcach */
//     while(left < right){
//         [array[left], array[right]] = [array[right], array[left]]
//         left++
//         right--
//     }

//     return array
//     /* time o(n) space o(1) if i want to preserve the original array i have to create a shallow copy using slice() t */


/* using reduceright (it is similar to reduce ) */

    reversedArr = array.reduceRight((acc, curr)=> {
        acc.push(curr);
        return acc
    },[])

    return reversedArr
}



const result = reverseArray(arr)

console.log(result)



/* sum of all even numbers */

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function sumOfEven(array){
    let sum = 0;

    // for(const item of array){
    //     if(item % 2 === 0){
    //         sum += item
    //     }
    // }
    // return sum
/* time is o(n) space o(1) */

/* if needs consize code then i can use reduce */

  return  array.reduce((sum, num)=> (num % 2 === 0  ? sum + num : sum),0)
   

}

const result1 = sumOfEven(arr2)
console.log(result1)

/* find all duplicates in an array */

const arr3 = [1, 2, 3, 2, 5]

function findDuplicates(array){
    let duplicates = [];

    for(let i=0; i<array.length; i++){
        const value = array[i]
        
        for(let j= i+1; j<array.length; j++){
            if(value === array[j]){
                duplicates.push(value)
            }   
        }
    }
    

    
    return {duplicate: duplicates, totalItems: duplicates.length}
    /* time = o(n)*2 space o(n) */
}

const result3 = findDuplicates(arr3)
console.log(result3)
console.log('*********end*******************')

/* solution using js maps and sets */
// function findDuplicatesWithMaps(array){
//     const frequency = new Map()
//     const duplicates = new Set()
//     console.log(frequency, duplicates)

//     for(const num of array){
//         if(frequency.has(num)){
//             duplicates.add(num)
//         }else{
//             frequency.set(num, 1)
//         }
//     }

//     return {duplicate: [...duplicates], totalItems: duplicates.size, frequency: frequency }
// }
// const arr4 = [1, 2, 3, 3, 5, 4, 5]
// const result4 = findDuplicatesWithMaps(arr4)
// console.log(result4)

/* solution with sorting */
function findDuplicatesWithSort(array) {
    array.sort((a, b) => a - b); // O(n log n)
    let duplicates = [];
    console.log(array)
    
    for (let i = 1; i < array.length; i++) {
        if (array[i] === array[i - 1] && !duplicates.includes(array[i])) {
            duplicates.push(array[i]);
        }
    }

    return { duplicate: duplicates, totalItems: duplicates.length };
}
console.log(`88888888888end888888888888888888`)
const result5 = findDuplicatesWithSort(arr2)
console.log(result5)

function findDuplicatesWithMaps(array){
    const frequency = {}
    const duplicates = []

    for(const num of array){
        if(frequency[num]){
            if(frequency[num] === 1){
                duplicates.push(num)
            }
        }else{
            frequency[num] = 1
        }
    }

    return {duplicate: [...duplicates], totalItems: duplicates.length, frequency: frequency }
}
const arr4 = [1, 2, 3, 3, 5, 4, 5]
const result4 = findDuplicatesWithMaps(arr4)
console.log(result4)
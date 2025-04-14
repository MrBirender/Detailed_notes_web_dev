/* 
Coding Exercise: Rotate Array
Question:

Given an array, rotate the array to the right by k steps, where k is non-negative.
*/
// one way
/* for(let i=0; i<rotations; i++){
        arr.unshift(arr.pop())
    } */

function rotateArray(arr, k){
    const rotations = k % arr.length
    
    const temp = arr.splice(arr.length - rotations)
    
    return [...temp, ...arr]
}

const input = [1, 2, 3, 4, 5]     

console.log(rotateArray(input, 5))
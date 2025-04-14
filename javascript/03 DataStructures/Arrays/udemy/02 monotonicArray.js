/* Jackson Kailath
Question
An array is monotonic if it is either monotone increasing or monotone
decreasing. An array is monotone increasing if all its elements from left to right
are non-decreasing. An array is monotone decreasing if all its elements from
left to right are non-increasing. Given an integer array return true if the given
array is monotonic, or false otherwise. */

function checkmonotonic(arr){
    const first = arr[0];
    const last  = arr.length-1;

    /* constant monotonic */
    if(first === last){
        for(let i=0; i<arr.length; i++){
            if(arr[i+ 1] !== arr[i]) return false
        }
    }
    /* not decreasing monotonic */
    if(first < last){
        for(let i=0; i<arr.length; i++){
            if(arr[i+ 1] > arr[i]) return false
        }
    }

    /* not increasing monotonic */
    if(first < last ){
        for(let i=0; i<arr.length; i++){
            if(arr[i+ 1] < arr[i]) return false
        }
    }
    
    return true
}

const input = [1, 2, 3, 3, 3, 4, 5]
const input1 = [5, 4, 3, 2, 1] // [1. 1111]
console.log(checkmonotonic(input1))
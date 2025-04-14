/* Question
You are given an array of Integers in which each subsequent value is not less
than the previous value. Write a function that takes this array as an input and
returns a new array with the squares of each number sorted in ascending
order. */

/* cases: value could be same
cases: values could be nagative
*/

function sortedSquare(arr){
//    const newArr = []
   const newArr2 = new Array(arr.length).fill(0)
   for(let i=0; i<arr.length; i++){
       newArr2[i] = arr[i] * arr[i]
   }

   return newArr2.sort((a, b)=> a-b)
}

const input = [-2, 1, 2, 4, 8, 8, 10]

console.log(sortedSquare(input))
/* Sure! Here's your TL;DR summary in plain text for easy note-taking:

---

**✅ Array Initialization Summary**

- `[]`  
  - **Memory Usage:** Grows gradually  
  - **Performance:** May cause reallocation  
  - **Engine Optimization:** Less predictable  
  - **Best for:** Unknown size, pushing elements dynamically  

- `new Array(n).fill(0)`  
  - **Memory Usage:** Allocated up front  
  - **Performance:** Faster for large-sized arrays  
  - **Engine Optimization:** More optimized (dense arrays)  
  - **Best for:** Known size, index-based operations like DP, prefix/suffix sums  

---

Let me know if you want to add examples or visuals to your notes! */

function sortedSquareTwoPointer(arr){
    const newArr = new Array(arr.length).fill(0);

    let pointerLeft = 0;
    let pointerRight = arr.length - 1;

    for(let i=arr.length-1; i>=0; i--){
        const leftSquared = Math.pow(arr[pointerLeft], 2);
        const rightSquared = Math.pow(arr[pointerRight], 2);

        if(leftSquared > rightSquared){
            newArr[i] = leftSquared;
            pointerLeft++
        }else{
            newArr[i] = rightSquared
            pointerRight--
        }
    }

    return newArr
}

const input2 = [-2, 1, 2, 4, 8, 10]
console.log(sortedSquareTwoPointer(input2))
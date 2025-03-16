
function removeDuplicates(arr){
    const newSet = new Set(arr)

    return [...newSet]
}

const input = [1, 2, 3, 1, 2, 3, 4, 5, 6, 4, 5, 6, 7]
console.log(removeDuplicates(input))

/* data grouptin filterin and sorting */
let scores = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 39 },  // Failing
    { name: "Alice", score: 72 },
    { name: "Bob", score: 28 },  // Failing
    { name: "Charlie", score: 95 },
    { name: "Alice", score: 33 }, // Failing
    { name: "Charlie", score: 40 },
    { name: "Bob", score: 19 }  // Failing
];

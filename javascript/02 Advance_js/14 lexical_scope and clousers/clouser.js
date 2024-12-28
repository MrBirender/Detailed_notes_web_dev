/* what are clouser explain with and example and defination */

/* clouser is a function that has access to the variables of its parent function even after the 
parent function is closed. */

function outerFunction() {
    let counter = 0;
    function innerFunction() {
        counter++;
        console.log(counter);
    }
    return innerFunction;
}
const incrementer = outerFunction();
incrementer(); // Output: 1
incrementer(); // Output: 2
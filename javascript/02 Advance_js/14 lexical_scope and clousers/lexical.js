/* what is lecial scope and explain it wtih example */

function outerFunction() {
    let counter = 0;
    function innerFunction() {
        counter++; // it has access to the variable of its parent function .
        console.log(counter);
    }
    return innerFunction;
}

const myFunction = outerFunction();
myFunction(); // Output: 1
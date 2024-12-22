
const name = "birender";

function myFunction() {
    console.log(name);
    function innerFunction() {
        console.log(name);
        function innerInnerFunction() {
            console.log(name);
        }
        innerInnerFunction();
    }
    innerFunction();
}
myFunction()
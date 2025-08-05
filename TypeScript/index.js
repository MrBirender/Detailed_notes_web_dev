
function sayHello(){
    console.log("Hello World");
}

let isWorking = true
let number  = 0;

while(isWorking){
    sayHello();
    number += 1;
    if(number == 7){
        isWorking = false;
    }
}
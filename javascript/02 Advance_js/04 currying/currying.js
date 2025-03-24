/* currying method */

function currying (a){
    console.log(a)
    return function (b){
        console.log(b)
        return function (c){
            return `${a} ${b} ${c}`
        }
    }
}

const a = 10; b = 20; c = 30
// console.log(currying(a)(b)(c))

/* mathematical operations using currying */

function operation(operation){
    return function (a){
        return function (b){
            if(operation === 'sum') return a + b;
            else if(operation === 'sub') return a - b;
            else if(operation === 'mul') return a * b;
            else if(operation === 'div') return a / b;
            else return 'Invalid operation';

        }
    }
}

const mul  = operation('mul');
const sum = operation('sum');

console.log(mul(5)(6))
console.log(sum(5)(6))
console.log(mul(5)(77))


function infiniteAdd(a){
    return function (b){
        if(b) return infiniteAdd(a + b);
        return a;
    }
}

console.log(infiniteAdd(1)(3)())


/* how to do dom manupulation using currying */

function updateDom(id){
    return function(content){
        document.querySelector("#" + id).textContent = content
    }
}

const updateHeader = updateDom('header')

updateHeader('Talk to me')

/* convertin normal funciton to a curry funciton */


function curry(fn){
    return function curriedFn(...args){
        if(args.length >= fn.length){
            return fn(...args)
        }else{
            return function (...next){
                return curriedFn(...args, ...next) 
            }
        }
    }
}

function normalFunction(a, b, c){
    return a + b + c
}

const totalSum = curry(normalFunction)

console.log(totalSum(1)(2)(25))

/* we can check the fn.length to check how many arguments a fn is gettting > it is interesting. */
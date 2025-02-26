/* for loop */
for(let i=0; i<5; i++){
    console.log(i)
}

const arr = [1, 2, 3, 4, 5]
for(const num of arr){
    console.log(num)
}

for(const num in arr){
    console.log(num) // indexes only not recomended of array

}

let obj = {
    name: 'birender',
    age: 25}

for(const key in obj){
    console.log(key, obj[key])

}

// while loop
let isGameOn = true;
while (isGameOn) {
    console.log('game is on')

    /* only to stop it  */
    isGameOn = false
}


/* do while */
let isLightOn = true;
do{
    console.log('light is on')
    isLightOn = false
}while(isLightOn)

/* higher order functions */

const array = [1,2,3,4,5] // it doesn't return anything
array.forEach(element => {
    console.log(element)
});

const newarr = array.map(num => num * 2) /* it will return new array doesn;t effect the original one */

let filteredArr = array.filter(num=> num !== 2)


let sum = array.reduce((acc,num)=> {
    return acc + num
}, 0)


let find = array.find(num => num % 2 === 0)


let result = array.some(num => num % 2 === 0)

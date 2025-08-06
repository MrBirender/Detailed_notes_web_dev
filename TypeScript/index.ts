function add(num1: number, num2: number):number {
  return num1 + num2;
}

console.log(add(2, 5));

// type aliases

type userData = {
  name:string
  age?:number
  cordinates:point

}

type point = {
  x: number,
  y: number
}

function giveCordinates (pt: point):userData{
return  {name:'birender',  cordinates:pt}
}

console.log(giveCordinates({x:14.44, y:55.88}))

// combining types restrict editing

type cardNumber = {
   cardNumber :"number"
}

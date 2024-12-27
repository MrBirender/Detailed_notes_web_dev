// test case 1
function sayHai(name){
    console.log(sayHai.age) // 25
}

sayHai.age = 25

// sayHai('Birender')  // Hello Birender

// console.log(sayHai.age) //25

function CreateProduct(name, price){
    this.name = name,
    this.price = price

    // is it neccesary to return this in this context ?
}

CreateProduct.prototype.increment = function(){
    this.price++
    console.log(`price of the ${this.name} is increased by 1 ruppes.`)
}

CreateProduct.prototype.showDescription = function(){
    const desc = 'Chai is a spiced tea, brewed with black tea, milk, sugar, and aromatic spices like cardamom and ginger.'
    console.log(`Chai's Description: ${desc}`)
}

const product1 = new CreateProduct('Chai', 99)
const product2 = new CreateProduct('Coffee', 399)

// console.log(product1)
// product1.increment()
// product1.showDescription()

// ************************************** property inheritance ****************************************************
// i have seen that every non-primitve data type in js has object in its prototpye and when we look
// fro a funcality and if its not avilable in that partiualr data type then  it look to its parent
// and get it from the object.
// so as it is if i give funality directly to the parent ( means objects) then it will be accesible in
/* the children (meaning array fucntions) but it will not happen wise versa because if check prototype of 
of object then it will not have arrya in it*/

Object.prototype.sayHai = ()=> {console.log('hai i am object')}

const arr = [1, 2, 3, 4]

function checkprtotype(){

}

// checkprtotype.sayHai() // it will also log that funtion 

// arr.sayHai() // it will log hai i am object

/*And from this learning solve this problem: */
/* Q1. you have given a const str = 'Birender  ' with spaces and you have to give the length of this str
using a new fucntion trueLength and it should be available for every str you declare. */

const str = 'Birender   '

String.prototype.trueLength1 = ()=> {
    console.log(`The TrueLength Of The String is ${this.trim().length}`)
} // in this case i have no refrence of this so it will give undefined


String.prototype.trueLength = function(){
    console.log(`The TrueLength Of The String is ${this.trim().length}`)
}
    

str.trueLength()
class User {
    constructor(name, password){
        this.name = name, 
        this.password = password
    }

    setPassword(){
        return `${this.password}^&%^*&^*()`
    }
}

const user1 = new User('birender', 375987)

// console.log(user1.setPassword())


//making base class for setting fuel type in every vechile:

// class Vechile{
//     constructor(fuel){
//         this.fuel = fuel
//     } if case is simple the this will work fine
// }

//but in other cases use this sepreate method to set fuel type:
class Vehicle {
    constructor(fuel) {
        this.setFuelType(fuel);
    }
 
/*@#$$%$#=>>>if i use static before writing any function then it will not be inherited . */
    static startVechile(){
        console.log(`The ${this.model} running on ${this.fuel} has started.`);
    }
    setFuelType(fuel) {
        const validFuels = ["Petrol", "Diesel", "Electric", "Hydrogen"];
        if (!validFuels.includes(fuel)) {
            throw new Error(`Invalid fuel type: ${fuel}`);
        }
        this.fuel = fuel;
    }
}
// bike class:
class Bike extends Vehicle{
    constructor(model, engine, fuel){
        super(fuel, model)
        this.model = model,
        this.engine = engine
    }
}

class Car extends Vehicle{
    constructor(model, engine, fuel){
        super(fuel, model)
        this.model = model,
        this.engine = engine
    }
    
}

// Create specific vehicles
const car1 = new Car("Sedan", "2500cc", "Petrol");
const bike1 = new Bike("Cruiser", "500cc", "Diesel");

console.log(car1)
console.log(bike1)

car1.startVechile()
bike1.startVechile()
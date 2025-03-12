/* in an constructor function if i have to pass the another funtion to set property then how i
will set the context of this. */

// setting this refrence using this:
// A reusable function to set fuel type for any vehicle
function SetFuelType(fuel) {
    this.fuel = fuel;
}

// Constructor function for creating car objects
function MakeCar(model, enginePower, fuel) {
    // Reuse SetFuelType and bind `this` to the current car object
    SetFuelType.call(this, fuel);
    this.model = model; // Unique to the car
    this.enginePower = enginePower; // Unique to the car
}

// Constructor function for creating bike objects
function MakeBike(model, engineCapacity, fuel) {
    // Reuse SetFuelType and bind `this` to the current bike object
    SetFuelType.call(this, fuel);
    this.model = model; // Unique to the bike
    this.engineCapacity = engineCapacity; // Unique to the bike
}

// Create specific vehicles
const car1 = new MakeCar("Sedan", "2500cc", "Petrol");
const bike1 = new MakeBike("Cruiser", "500cc", "Diesel");

console.log(car1); // { fuel: 'Petrol', model: 'Sedan', enginePower: '2500cc' }
console.log(bike1); // { fuel: 'Diesel', model: 'Cruiser', engineCapacity: '500cc' }

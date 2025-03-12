// check it later to understand its functionality

class Vehicle {
    constructor(name, fuel) {
        this.name = name;
        this.fuel = fuel;
    }

    startVehicle() {
        console.log(`The ${this.name} running on ${this.fuel} has started.`);
    }
}

class Car extends Vehicle {
    constructor(name, fuel) {
        super(name, fuel);
    }
}

// Create a car object
const myCar = new Car("Sedan", "Petrol");

// A button on a remote control
const remoteControl = {
    pressButton: null,
};

// Assign the `startVehicle` method to the remote control's button
remoteControl.pressButton = myCar.startVehicle;

// Press the button
remoteControl.pressButton(); // Output: "The undefined running on undefined has started."
// Why? Because `this` now refers to `remoteControl`, not `myCar`.

// Fixing it with `bind()`
remoteControl.pressButton = myCar.startVehicle.bind(myCar);

// Press the button again
remoteControl.pressButton(); // Output: "The Sedan running on Petrol has started."

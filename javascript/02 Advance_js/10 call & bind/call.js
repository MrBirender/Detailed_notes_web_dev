/* in an constructor function if i have to pass the another funtion to set property then how i
will set the context of this. */

// setting this refrence using this:
function SetFuelType(fuel){
    this.fuel = fuel
}

function MakeCar(model, enginePower, fuel){
    SetFuelType.call(this, fuel)
    this.model = model
    this.enginePower = enginePower
 

}

const car1 = new MakeCar(2024, "2500cc", "Hydrogen")

console.log(car1)
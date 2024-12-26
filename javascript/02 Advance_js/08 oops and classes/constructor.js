// write a constructor function name Carmodel:

//This constructor function may be converted to a class declaration.resarch on it >>
function Carmodel(name, year, color) {
    this.name = name;
    this.year = year;
    this.color = color;
}

const car = new Carmodel("BMW", 2020, "blue");  // here car is an object
console.log(car);
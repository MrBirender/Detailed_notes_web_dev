// Creating an object
const person = {
    name: "John",
    age: 30,
    job: "Engineer"
  };
  
  // Accessing properties
  console.log(person.name); // John
  console.log(person['age']); // 30
  
  // Modifying properties
  person.age = 31;
  console.log(person.age); // 31
  
  // Adding new properties
  person.city = "New York";
  console.log(person.city); // New York
  
  // Deleting a property
  delete person.job;
  console.log(person.job); // undefined
  
  // Checking if a property exists
  console.log('name' in person); // true
  console.log('job' in person); // false
  
  // Object destructuring (ES6)
  const { name, age } = person;
  console.log(name, age); // John 31
  
  // Object.keys() - Get all keys of an object
  console.log(Object.keys(person)); // ["name", "age", "city"]
  
  // Object.values() - Get all values of an object
  console.log(Object.values(person)); // ["John", 31, "New York"]
  
  // Object.entries() - Get all key-value pairs
  console.log(Object.entries(person)); // [["name", "John"], ["age", 31], ["city", "New York"]]
  
  // Object.assign() - Copy properties from one object to another
  const anotherPerson = { country: "USA" };
  const mergedPerson = Object.assign({}, person, anotherPerson);
  console.log(mergedPerson); // { name: "John", age: 31, city: "New York", country: "USA" }
  
  // Object.freeze() - Prevent changes to an object
  Object.freeze(person);
  person.age = 32; // Will not work because the object is frozen
  console.log(person.age); // 31
  
  // Object.seal() - Prevent adding/removing properties, but allows modifications
  Object.seal(person);
  person.country = "Canada"; // Will not work because the object is sealed
  person.age = 33; // Will work because we can modify properties
  console.log(person.age); // 33
  
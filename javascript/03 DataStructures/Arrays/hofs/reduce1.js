/* Grouping based on property */

function groupByAge(arr){
   const data =  arr.reduce((acc, curr)=> {


        acc[curr.address.country] = acc[curr.address.country] || []

    acc[curr.address.country].push(curr)
        return acc
    }, {})

    return JSON.stringify(data, null, 4)
}

const users = [
    { name: "Alice", age: 22, gender: "Female", address: { city: "New York", country: "USA" } },
    { name: "Bob", age: 25, gender: "Male", address: { city: "Los Angeles", country: "USA" } },
    { name: "Charlie", age: 20, gender: "Male", address: { city: "London", country: "UK" } },
    { name: "David", age: 22, gender: "Male", address: { city: "Manchester", country: "UK" } },
    { name: "Emma", age: 28, gender: "Female", address: { city: "Toronto", country: "Canada" } },
    { name: "Frank", age: 22, gender: "Male", address: { city: "Vancouver", country: "Canada" } }
  ];
  
// console.log(groupByAge(users))

function filterBasedOnCountry(arr){
    const output = arr.filter((user)=> user.address.country === 'USA')
    return output
}

// console.log(filterBasedOnCountry(users))

/* try to visualize sorting by writting a custom function */
function sortByAgeInAssending(arr){
const sortedUsers = [...arr].sort((a, b) => a.age - b.age)
return sortedUsers
}

// console.log(sortByAgeInAssending(users))

/* sort by name alphabatically */

function sortByNameAlphabatically(arr){
    const sortedData = arr.sort((a, b) => a.name.localeCompare(b.name))
    return sortedData
}

// console.log(sortByNameAlphabatically(users))

/* sort by  inside nested objects */

function sortedByNestedObject(arr){
    return arr.sort((a, b)=> a.address.city.localeCompare(b.address.city))
}

// console.log(sortedByNestedObject(users))

/* find all males group them by country and sort them by age */



function dataProcessing(arr){
    /* use filter to find */
    const men = arr.filter((user)=> user.gender === 'Male');
    
    /* use reduce for grouping by country*/

    const groupedData = men.reduce((acc, curr)=> {
        let country = curr.address.country;
        if(!acc[country]){
            acc[country] = []
        }

        acc[country].push(curr)

        return acc
    }, {})

    /* sort this according to age. */
     Object.keys(groupedData).forEach(country => {
        groupedData[country].sort((a, b)=> a.age-b.age)
    })
return JSON.stringify(groupedData, null, 2)
}

console.log(dataProcessing(users))
  
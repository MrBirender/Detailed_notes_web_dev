/* Features in Set
1. it Stores only unique data and automatically rmoves duplicaes.
2. it works with different data types like number, str, objects etc.
3. Maintans insertion order (values are stored in order they were added.)
*/

/* creatign a set */
const set = new Set([1, 2, 3, 4, 5, 6, 7, 7, 7, 8])
/* have to pass any iterable means array or leave empty. */

console.log(set) // Set(8) { 1, 2, 3, 4, 5, 6, 7, 8 }

/* adding values */
set.add(600)
console.log(set)

/* checking if value exists */
console.log(set.has(600))

/* deleting values */
set.delete(600)
console.log(set)

/* getting the size of set */
console.log(set.size)

/* clearing set */
set.clear()
console.log(set)

set.add(4)
set.add(5)

/* iteration over set */
set.forEach((num)=> {
    console.log(num)
})
for(const num of set){
    console.log(num)
}

/* Difference Between Set and Array
Feature	Set	Array
Allows duplicates	❌ No	✅ Yes
Order maintained	✅ Yes	✅ Yes
Provides index-based access	❌ No	✅ Yes
Has built-in methods like map, filter, reduce	❌ No	✅ Yes */

/* Key Takeaways
Set is best for storing unique values and offers fast operations.
Object is useful for key-value pairs, but keys are always strings.
Map is like an enhanced object, allowing any type of key and maintaining insertion order.
Array is best when index-based access and order are important, but operations like splice() and includes() can be slow. */
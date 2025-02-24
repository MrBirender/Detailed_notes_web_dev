
interface User {
    name: string;
    age: number;
}

let person: User = {
    name: "John",
    age: 25
}

/* type inference */
let person1 = 'sonu';

/* person1 = 25 */;/* in starting i have declared person1 as string
and without even stating the type ts knows that it can't be other 
then a string. it is called type inference */


/* diff between any, unknown and never */
let dog: any = 'maxu';
dog = 25;
/* it is used to aviod type checking, so it can be any data types
but it should be avoided. */

let cat: unknown = 'billi';
/* it is similart to the any but needs type check to perform an action.
 */
if(typeof cat === 'string'){
    console.log(cat.toUpperCase());
}

let rabbit: never;
/* never is used to represent a value that is never observed.
it is used to represent the type of a function that never returns
a value.
 */
/* a real life coding example for thi would be */

function error(message: string): never {
    throw new Error(message);
   
}

/* default and optional parameters */
function user(name?: string, age?: number){
console.log(`Hai ${name || 'guest'} age is ${age || 'unknown'}`);
}

/* default parameters */
function user1(name:string = 'guest', age:number = 25){
    console.log(`Hai ${name} age is ${age}`);
}

user();
user1();


/* how to type props and states in react fc */

/* import React from 'react

interface Props {
name: string,
age: number
}

const App: React.FC<Props> = ({name, age}) => {
return (
    <div>
        <h1>hello</h1>
    </div>
)}
*/

/* const [count, setCount] = useState<number>(0) */

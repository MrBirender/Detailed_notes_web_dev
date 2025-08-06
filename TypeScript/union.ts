// want to use more than one type :

let score:number | string = "two";

score = 34;

function toUppercase(val:string | number){
    if(typeof val === "string"){
      return   val.toUpperCase()
    }else{
        return val
    }
}

console.log(toUppercase(43534534))


// delaling with array for the same feature:

const data: number[] = [2]
const data1: string[] = ["2"]
const data2: string[] | number[] = [2] // ["e"]

const data3: (string | number) [] = [2, "2"]


// using union as prefixed values:

let seatTypes: "aisle" | "middle" | "window"

// seatTypes = "crew" // not allowed
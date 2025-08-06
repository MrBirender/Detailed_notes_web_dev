// three ways to type check an array:


//first way
const colors: string[] = ['red']

colors.push("blue")

//second way
const oddNumbers: Array<number> = [3];

oddNumbers.push(5)

// third way if need array of arrays
const evendigits: number[][] = [[255, 255, 255], [256, 254, 234]]

//type alias
type User = {
    name: string,
    isActive: Boolean
}

const userData: User[] = [];

userData.push({name:"birender", isActive:true}) 
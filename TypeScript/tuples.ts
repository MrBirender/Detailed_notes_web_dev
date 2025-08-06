// tuples use cases are less:

let rgb: [number, number, number] = [255, 255, 255]

// lenght and types are fixed but inbuilt glitch is there i can disturb the resitriction using array methods:
// now this glitch has been resolved.

// rgb.push(true)

type User = [number, string]

const newUser: User = [1, "virender"]

newUser.push(true)// no glitch now proper errors are coming.

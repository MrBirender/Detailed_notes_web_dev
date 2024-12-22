// const _id = Symbol('uniqueId')
// const obj = { name: 'birender', wife: 'maya'}
// console.log(obj)

// delete obj.name
// console.log('wife' in obj)

// const {name, wife} = obj
// console.log(name, wife)

// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))
const obj = { name: "birender", wife: "maya" };
// const obj2 = {name: 'sunder lal', wife: 'kavita devi'} //if anohter
//  obj has the same key as the first one then last one willl be overwirte with the first one.
const obj2 = { father: "sunder lal", mother: "kavita devi" };

// const mergedObj = Object.assign({}, obj2, obj)
const mergedObj = { ...obj, ...obj2 }; // overwritting happens in the spread operator case also
console.log(mergedObj);
console.log(obj);
console.log(obj2);

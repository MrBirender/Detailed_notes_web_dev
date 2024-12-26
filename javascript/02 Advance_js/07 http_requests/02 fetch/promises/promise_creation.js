// promises creation and consumption:

const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("async operation completed.");
    resolve();
    reject();
  }, 1000);
});

promiseOne
  .then(() => {
    console.log("promise consumed.");
  })
  .catch(() => {
    console.log("error at promise one");
  });

//passing vlaues through reslove to .then():

const promsieTwo = new Promise(function (reslove, reject) {
  setTimeout(() => {
    reslove({ id: "001", name: "Birender", email: "example@gmail.com" });
  }, 1000);
});

promsieTwo.then(function (data) {
  console.log(data);
});

// handling errors also:
const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    const error = false;
    if (!error){
      resolve({
        _id: "00454098",
        username: "dev.Birender",
        password: "Lanuhweiuf@349u4",
      });
    }
    else reject("Error: it occurs while getting user data");
  }, 1000);
});


promiseThree
.then((data)=> {
    console.log(data)
    return data._id
})// we can do chaning like this to get the data.
.then((id )=> console.log(id))
.catch((error)=> console.log(error))
.finally(()=> console.log('promise is either resolved or rejected'))


// handling promieses with async await instead of .then .catch.

const promiseFour = new Promise((resolve, reject)=> {
    setTimeout(() => {
        let error = false
        if(!error){
            resolve('user data found')
        }else{
            reject('Error occured file fetching data')
        }
    }, 1000);
})

async function consumePromiseFour(){
    // using try catch block is must with async await because it can't handle error
    // case without that as in .then and .cath method .without it can't handle
    // error without the catch block.

    try {
        const response = await promiseFour
        console.log(response)
    } catch (error) {
        console.log(error)
    }

}

consumePromiseFour()


// Async functions always return a promise:
// Even if you don't explicitly return a promise, the async function implicitly wraps its return value in a promise.

async function example() {
    return "Hello!";
}

example().then(console.log); // Logs "Hello!"

// **************************************** important *********************************************?
// Using async/await with promises is not just allowed—it's the preferred way to write 
// asynchronous code when dealing with multiple promises or complex logic. It keeps the code 
// concise and avoids deeply nested .then chains.

// ***************************************** important *****************************************
// Key Points to Remember
// Combining await with Promise.all: You can use await with Promise.all to handle multiple promises in parallel:

// javascript
// Copy code
const promise1 = Promise.resolve("Data from API 1");
const promise2 = Promise.resolve("Data from API 2");

async function fetchAllData() {
    try {
        const results = await Promise.all([promise1, promise2]);
        console.log(results); // ["Data from API 1", "Data from API 2"]
    } catch (error) {
        console.error(error); // Handles any errors in the promises
    }
}

fetchAllData();
/* question 1 */

// console.log("start");

// const newPromise = new Promise((resolve, reject) => {
//   console.log("1");
//   resolve(2);
// });

// newPromise.then((res) => {
//   console.log(res);
// });
/* if there s no resolve in promise then .then stament will not be exucted no error no undefined */

// console.log("end");
/* synronous code will be executed first. 
1. start
2. 1
promise will be handled to the web api.
3. end
4. 2
*/

/* second Question */
// function logQuesitonNumber(num) {
//   return new Promise((resolve, reject) => {
//     resolve(`question ${num}`);
//   });
// }

// async function consumePromise(num) {
//   try {
//     const res = await logQuesitonNumber(num);
//     console.log(res);
//   } catch (error) {
//     console.log(`error $`);
//   }
// }

// consumePromise(2);
// function job() {
//   return new Promise((resolve, reject) => {
//     reject();
//   });
// }

// let promise = job();
// promise
//   .then(() => {
//     console.log("output 1");
//   })
//   .then(() => {
//     console.log("output 2");
//   })
//   .then(() => {
//     console.log("output 3");
//   })
//   .catch(() => {
//     console.log("error from question 2");
//   })
//   .then(() => {
//     console.log("output 4 from quesiotn 2");
//   });

// /* thirsd Quesiton */
// //  create one promise and resolve it in antoher promise then  return it from that promise and after that resolve it in .

// const promise1 = new Promise((resolve, reject) => {
//   resolve(`resolve promise from  third question , promise one`);
// });

// const promise2 = new Promise((resolve, reject) => {
//   resolve(promise1);
// });

// promise2
//   .then((res) => {
//     return res;
//   })
//   .then((res) => console.log(res));

/* api request using promises */

// function getData(url) {
//   return fetch(url).then((res) => {
//     if (res.status === 200) {
//       return res.json();
//     } else {
//       throw new Error(res.status);
//     }
//   });
// }

// getData("https://jsonplaceholder.typicode.com/todos/1")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));


/* writing the same call using async await */

async function getDataWithAsyncAwait(url) {
    try {
        const res = await fetch(url);
        if(res.status === 200){
            const data = await res.json();
            return data
        }
    } catch (error) {
     return new Error(`error while fetching data from api ${error}`)
    }
}

// getDataWithAsyncAwait("https://jsonplaceholder.typicode.com/todos/1")

/* solve an array of promises using recursion */
function subscirbe(channel) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve(`subscribe to the ${channel}`)
      },1000);
    });
  }

  function like(video){
      return new Promise((resolve, reject)=> {
          setTimeout(() => {
              resolve(`like this ${video} video`)
          }, 1000);
      })
  }

  function share(video){
      return new Promise((resolve, reject)=> {
          setTimeout(() => {
              resolve(`share this ${video} video`)
          }, 1000);
      })
  }

function solvePromises(arr){
    if(arr.length === 0) return 
    arr.shift().then((res)=> {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    })

    solvePromises(arr);

    
}

solvePromises([
    getDataWithAsyncAwait("https://jsonplaceholder.typicode.com/todos/1"),
    subscirbe("Birender"),
    like("js basics"),
    share("js advance")
])





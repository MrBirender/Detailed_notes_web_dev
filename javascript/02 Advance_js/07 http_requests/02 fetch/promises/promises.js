// https request using all three tools of asyncronous code:

// 1. callbacks
// If you're using XMLHttpRequest (XHR) and want to
//  handle asynchronous behavior without Promises (like with fetch), you 
// would typically use a callback function to handle the response.
function fetchDataWithXHR(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
  
    // Define the callback to handle the response
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          // Success: Pass data to callback
          callback(null, JSON.parse(xhr.responseText));
        } else {
          // Error: Pass error to callback
          callback(new Error(`Error: ${xhr.status}`), null);
        }
      }
    };
  
    // Send the request
    xhr.send();
  }
  
  // Example usage:
  fetchDataWithXHR("https://api.github.com/users/Birender", (error, data) => {
    if (error) {
      console.error("Error:", error);
    } else {
      console.log("Data:", data);
    }
  });
  

// 2. promises
function getUserDataWithFetch(url) {
    return fetch(url) // Fetch returns a Promise
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        return response.json(); // Parse JSON
      });
  }
  
  getUserDataWithFetch("https://api.github.com/users/Birender")
    .then(data => console.log("Promise Result:", data))
    .catch(error => console.error(error));
  
// 3. async/await
async function getUserDataWithAsyncAwait(url) {
    try {
      const response = await fetch(url); // Wait for the fetch to complete
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json(); // Wait for JSON parsing
      console.log("Async/Await Result:", data);
    } catch (error) {
      console.error(error);
    }
  }
  
  getUserDataWithAsyncAwait("https://api.github.com/users/Birender");
  
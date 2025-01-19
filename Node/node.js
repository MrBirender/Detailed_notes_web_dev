/* starting server with only node js */
// const http = require('http'); // Import the built-in HTTP module

// // Create the server
// const server = http.createServer((req, res) => {
//   // Set the response headers
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
  
//   // Respond based on the URL
//   if (req.url === '/') {
//     res.end('Welcome to the homepage!');
//   } else if (req.url === '/about') {
//     res.end('About page');
//   } else {
//     res.writeHead(404, { 'Content-Type': 'text/plain' });
//     res.end('Page not found');
//   }
// });

// // Start the server
// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });

/* starting server with express */
const express = require('express'); // Import Express
const app = express(); // Initialize the app

// Define routes
app.get('/', (req, res) => {
  res.send('Welcome to the homepage!');
});

app.get('/about', (req, res) => {
  res.send('About page');
});

// Handle 404
app.use((req, res) => {
  res.status(404).send('Page not found');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

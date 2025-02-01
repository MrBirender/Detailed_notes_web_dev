const express = require('express');
const path = require('path')
const app = express()

const Port = 4000 || process.env.Port

app.use(express.static('public'));

app.get('/', (req, res)=> {
    /* two ways of sending an html file in the response */
    // res.sendFile('./src/test.html', {root: __dirname})
    res.sendFile(path.join(__dirname, "src", "index.html"))
    // res.send('Hello World')
})

app.get('/old', (req, res)=> {
  res.redirect(301, '/redirect.html')
})

app.listen(Port, ()=>{
    console.log(`Your App is listening on port http://localhost:${Port}.`)
} )
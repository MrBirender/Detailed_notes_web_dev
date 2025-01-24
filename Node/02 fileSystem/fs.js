/* this is how we use file system, but when we try to control the flow of file operations, then it creates
the call back hell, so get rid of that we use different technique and that is in the Promis.js file. */

const fs = require('fs');
// import {readFile} from 'node:fs'
const path = require('path')

fs.readFile(path.join(__dirname, 'files', 'maya.txt'), 'utf-8', (err, data)=> {
    if(err) throw err;
    console.log(data)
})

const data = 'Nice to meet you Birender.'

/* always append the file in the call back block of the write file. doing this it will never append the file
before its creation. if not does so then the existing data from the file can be lost.
because of the feature of creating a new file of appendfile module , if it doesn't find the file.
if write file is going to run after the append file then it will delelte the existing data of the file.
*/

/* we have to maintian the order of file manipulation because we don't know which one is going to execute first
because of the nodjs async nature. */

fs.writeFile(path.join(__dirname, 'files', 'maya.txt'), data, (err)=> {
    if(err) throw err;
    console.log('write completed')

/* appending file */
    fs.appendFile(path.join(__dirname, 'files', 'maya.txt' ), '\n\n nice to meet you too Maya.', (err)=> {
        if(err) throw err;
        console.log('append completed')

/* renaming the file */

        fs.rename(path.join(__dirname, 'files', 'maya.txt' ), path.join(__dirname, 'files', 'Maya.txt' ), (err)=> {
            if(err) throw err;
            console.log('rename completed')
        })

    })
    
} )



/* as i have hardcoded the file path here it can create a problem with different os, where the slash somtimes
forward and somtimes backward. so to resolve it preffer using path module. */
// readFile(path.join(__dirname, files, maya.txt), 'utf-8', (err, data)=> {
//     if(err) throw err;
//     console.log(data)
// })



/* using process, can catch the unexpected erros */
process.on('uncaughtException', (err) => {
    console.log(`this was an uncaught error ${err}`)
    process.exit(1)
})


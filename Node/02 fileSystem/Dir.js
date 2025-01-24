const fs = require('fs')

if(!fs.existsSync('./newdir')){
    fs.mkdir('./newdir', (err) => {
        if(err) throw err;
        console.log('directory created.')
    })
}

if(fs.existsSync('./newdir')){
    fs.rmdir('./newdir', (err) => {
        if(err) throw err;
        console.log('directory removed.')
    })
}


process.on('uncaughtException', (err)=> {
    console.log(`this was an uncaught error ${err}`)
    process.exit(1)
})
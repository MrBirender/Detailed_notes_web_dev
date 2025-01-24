const fs = require('fs');	
const path = require('path');

/* when the file is too large, it will be easy to deal with it in chunk reather than dealing with all
at once.  */

const rs = fs.createReadStream(path.join(__dirname, 'files', 'lorem.txt'), {encoding: "utf8"})

const ws = fs.createWriteStream(path.join(__dirname, 'files', 'newLorem.txt'))


/* one way of doing it */
// rs.on('data', (dataChunk)=> {
//     ws.write(dataChunk)
// })

/* another way of doing it */
rs.pipe(ws)
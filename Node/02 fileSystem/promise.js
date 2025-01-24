const fsPromises = require('fs').promises;
const path = require('path');

const fileOperations = async() =>{
 try {
    const data = await fsPromises.readFile(path.join(__dirname, 'files', 'birender.txt'), 'utf-8')
    console.log(data)
    await fsPromises.unlink(path.join(__dirname, 'files', 'birender.txt'))
    await fsPromises.writeFile(path.join(__dirname, 'files', 'Bm.txt'), data)
    await fsPromises.appendFile(path.join(__dirname, 'files', 'Bm.txt'), '\n This is the third line added')
    await fsPromises.rename(path.join(__dirname, 'files', 'Bm.txt'), path.join(__dirname, 'files', 'buku.txt'))
    const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'buku.txt'), 'utf-8')
    console.log(newData);

 } catch (error) {
    console.error(error)
 }
}

fileOperations()
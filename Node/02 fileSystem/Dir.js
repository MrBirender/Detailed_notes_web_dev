const fs = require('fs/promises');

const dirChange = async () => {
  try {
    const dirPath = './newdir';

    // Check if the directory exists
    try {
      await fs.stat(dirPath); // If the directory exists, this will succeed
      // Directory exists, remove it
      await fs.rmdir(dirPath);
      console.log('Directory removed.');
    } catch (err) {
      if (err.code === 'ENOENT') {
        // Directory does not exist, create it
        await fs.mkdir(dirPath);
        console.log('Directory created.');
      } else {
        throw err; // Re-throw unexpected errors
      }
    }
  } catch (error) {
    console.error(error);
  }
};

dirChange();

process.on('uncaughtException', (err) => {
  console.log(`This was an uncaught error: ${err}`);
  process.exit(1);
});

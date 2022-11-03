const { readFile, writeFile } = require('fs');
// const util = require('util');
// const readFilePromise = util.promisify(readFile)
// const wrileFilePromise = util.promisify(writeFile)

const start = async () => {
  try {
    const first = await readFile('./content/first.txt', 'utf8');
    const second = await readFile('./content/second.txt', 'utf8');
    await wrileFile('./content/result-mind-grenade.txt', 
    `THIS IS AWESOME: ${first} ${second}`
    )
    console.log(first, second);
  } catch (error) {
    console.log(error); 
  }
}

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf8', (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data)
//       }
//     });
//   });
// };
start();
const path = require('path');

//return the path separator
// console.log(path.sep);
//we will get the normalized path
const filePath = path.join('/content', 'subfolder', 'text.txt')
console.log(filePath, 'file path');

const baseName = path.basename(filePath);
console.log(baseName, 'base');

const absolutePath = path.resolve(__dirname, 'content', 'subfolder', 'text.txt');
console.log(absolutePath, 'absolute');
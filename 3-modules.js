// const amount = 15;

// if (amount < 10) {
//   console.log('small number');
// } else if (amount > 10 && amount < 13) {
//   console.log('large number');
// } else {
//   console.log('my first node app');
// }

//CommonJs, every file is module (by default)
//Modules - Encapsulated Code (only share a minum)
//Every File in Node is a module
const data = require('./6-alterantive-flavour');

const { john, peter } = require('./4-name');
const sayHi = require('./5-utils');
require('./7-mind-granate.js');

sayHi('susan');
sayHi(peter);
sayHi(john);
console.log(data);

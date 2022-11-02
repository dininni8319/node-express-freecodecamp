const os = require('os'); //build in module

// info about current user
const user = os.userInfo();
console.log(user);

//Methos returns the system uptome in seconds
//In node we can interact with the file system
console.log(`the system uptime is ${os.uptime()} seconds`);

const currentOs = { 
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}

console.log(currentOs);
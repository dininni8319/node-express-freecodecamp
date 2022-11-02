// const _ = require('lodash');

// const items = [1, [2, [3 , [4]]]];
// const newItems = _.flattenDeep(items);

// console.log(newItems);
// console.log('Hello World!');

//node js event loop 
//npx stands for execute, is a package runner

const http = require('http');

const server = http.createServer((req, resp) => {
  if (req.url === '/') {
    resp.end('Home Page')
  }
  if (req.url === '/about') {
    // BLOCKING CODE 
    // for (let i = 0; i < 1000; i++) {
    //   for (let j = 0; j < 1000; j++) {
    //       console.log(`${i} ${j}`);
    //   }
      
    // }
    resp.end("About Page")
  }

  resp.end('Errore Page')
})
console.log('testing the nodemon');
server.listen(5000, () => {
  console.log('Server listinig on the port: 5000....');
});

const http = require('http');

const server = http.createServer((req, resp) => {
  console.log(req);
  if (req.url === '/') {
    resp.end('Welcome to our home page!')
  }
  if (req.url === '/about') {
    resp.end('here is a short history')
  }

  resp.end(
    `
    <h1>Oops!</h1>
    <p>We can't seem to find the page that your are looking for!</p>
    <a href="/">back home</a>
    `
  )
})

server.listen(5000);
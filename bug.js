const http = require('http');

const server = http.createServer((req, res) => {
  // Without this, the response will hang
  // res.writeHead(200);
  res.end('Hello World!');
});

server.listen(3000);
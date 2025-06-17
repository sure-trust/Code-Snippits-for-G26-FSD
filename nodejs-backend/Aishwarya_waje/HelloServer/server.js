const http = require('http');
const { styleText } = require('util');
console.log('hello..');

const server = http.createServer((req, res) => {
  console.log('hello from server');
  res.writeHead(200, { 'content-type': 'text/html' });
  res.write(`<h2 style="text-align:center";>Hello </h2>`);
  res.end();
});

server.listen('3000', () => {
  console.log('listening on 3000...');
});

const http = require('http');
console.log('hello..');

const server = http.createServer((req, res) => {
  console.log('hello from server');
  res.writeHead(200, { 'content-type': 'text/html' });
  const url = req.url;
  //console.log(url);
  switch (url) {
    case '/':
      res.write('<h2 style="text-align:center";>Welcome</h2>');
      break;
    case '/profile':
      res.write('<h2 style="text-align:center";>Your profile</h2>');
      break;
    case '/wishlist':
      res.write('<h2 style="text-align:center";>Add to cart</h2>');
      break;
    case '/cart':
      res.write('<h2 style="text-align:center";>cart is empty</h2>');
      break;
    case '/orders':
      res.write('<h2 style="text-align:center";>Arriving soon</h2>');
      break;
    default:
      res.write('<h2 style="text-align:center";>Page not found</h2>');
  }
  res.end();
});

server.listen('3000', () => {
  console.log('listening on 3000...');
});

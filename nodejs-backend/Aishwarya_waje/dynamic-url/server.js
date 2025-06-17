const http = require('http');
const data = [
  { id: 1, name: 'Sumit Sharma' },
  { id: 2, name: 'Ramsha Patel' },
  { id: 3, name: 'Aman Verma' },
  { id: 4, name: 'Priya Singh' },
  { id: 5, name: 'Rohit Mehta' },
  { id: 6, name: 'Kavita Joshi' },
  { id: 7, name: 'Anil Kumar' },
  { id: 8, name: 'Neha Reddy' },
  { id: 9, name: 'Deepak Nair' },
  { id: 10, name: 'Sneha Das' },
];
const server = http.createServer((req, res) => {
  console.log('lesssgooooo');
  res.writeHead(200, { 'content-type': 'text/html' });
  const url = req.url;
  console.log(url[1]);

  const id = parseInt(url.slice(1));

  const user = data.find(user => user.id === id);
  if (user) {
    res.write(`<h2 style="text-align:center";>Welcome ${user.name}</h2>`);
  } else {
    res.write('<h2>User not found</h2>');
  }
  res.end();
});
server.listen('3000', () => {
  console.log('listening on 3000...');
});

const http = require('http');

const server = http.createServer((req, res) => {
  res.write('Hellow form NodeJS');
  res.end();
});

server.listen(3000, () => {
  console.log('Server is running...');
  
})
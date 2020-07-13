const http = require('http');
const server = http.createServer((req, server) => consolse.log('Request made'));

server.listen(3000, 'localhost', () => { 
  console.log('Server is listening on port 3000')
});
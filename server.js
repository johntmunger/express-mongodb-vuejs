const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => { 
  console.log('Request made', req.url, req.method);

  // set header content type
  res.setHeader('Content-type', 'text/html');

  // send html
  fs.readFile('./views/index.html', (err, data) => {
    if(err) {
      console.log(err);
      res.end();
    } else {
      // res.write(data);
      res.end(data);
    }
  });

});

server.listen(3000, 'localhost', () => { 
  console.log('Server is listening on port 3000')
});
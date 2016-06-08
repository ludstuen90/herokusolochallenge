var http = require('http');


http.createServer(function(req, res) {
  res.writeHead(200);
  res.write('Hello, world!');
  console.log('Hello, world!');
  res.end();
}).listen(process.env.PORT || 3000);
console.log("Server is listening");

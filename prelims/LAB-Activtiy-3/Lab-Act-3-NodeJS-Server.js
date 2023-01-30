//Task Name: Lab Activity 3
//Author: Nickaella Notra
//Section: WD-201

var http = require('http');

var server = http.createServer(function (req, res) {
  if (req.url == '/');
  {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.wrie(
      '<html><body><p>Welcome to my Node.js Application</p><p>Welcome Nicka. This is an activty about basics of Node.js</p></body></html>'
    );
    req.end();
  }
});

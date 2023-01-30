//Task Name: Lab Activity 3
//Author: Nickaella Notra
//Section: WD-201

var http = require('http');

var server = http.createServer(function (req, res) {
  // if (req.url == '/');
  // {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.wrie(
    '<html><body><p>Welcome to my Node.js Application</p><p>Welcome Nicka. This is an activty about basics of Node.js</p></body></html>'
  );
  res.end();
  // }
  // else if(req.url == '/about')
  // {
  //   res.writeHead(200, { 'Content-Type': 'text/html' });
  //   res.wrie(
  //     '<html><body><p>This is the About Page</p><p>Hello Nicka. This activity will teach on how to deal with a simple server and local modules in Node.js</p></body></html>');
  //   res.end();
  // }
  // else if(req.url == '/contact')
  // {
  //   res.writeHead(200, { 'Content-Type': 'text/html' });
  //   res.wrie(
  //     '<html><body><p>This is the Contact Page</p><p>Nicka, if you want additonal details about this activity go to site </p></body></html>');
  //   res.end();
  // else
  //   res.end('Invalid Request!');
});

server.listen(5000);
console.log('Node.js server at port 5000 is running...');

//Task Name: Lab Activity 3
//Author: Nickaella Notra
//Section: WD-201

var http = require('http');

var server = http.createServer(function (req, res) {
  if (req.url == '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.write(
      '<html><body><h1>Welcome to my Node.js Application</h1></body></html>'
    );
    res.write(
      '<html><body><p>Welcome Nickaella Notra. This is an activity about basics of Node.js</p></body></html>'
    );
    res.end();
  } else if (req.url == '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.write('<html><body><h1>This is the About Page</h1></body></html>');
    res.write(
      '<html><body><p>Hello Nickaella Notra. This activity will teach on how to deal with a simple server and local modules in Node.js</p></body></html>'
    );
    res.end();
  } else if (req.url == '/contact') {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.write('<html><body><h1>This is the Contact Page</h1></body></html>');
    res.write(
      '<html><body><p>Nickaella Notra, if you want additional details about this activity go to this site: https://www.tutorialteacher.com/nodejs/nodejs-tutorials</p></body></html>'
    );
    res.end();
  } else if (req.url == '/gallery') {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.write('<html><body><h1>This is the Gallery Page</h1></body></html>');
    res.end();
  } else {
    res.end('Invalid Request');
  }
});

server.listen(5000);
console.log('Node.js server at port 5000 is running...');

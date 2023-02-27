const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/' + 'index.html');
});

app.get('/process_get', function (req, res) {
  //Prepare output in JSON format
  response = {
    first_name: req.query.first_name,
    last_name: req.qurey.last_name,
  };

  console.log(response);
  res.end(JSON.stringify(response));
});

const port = 3000;

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});

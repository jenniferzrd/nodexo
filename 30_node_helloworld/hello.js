var express = require('express');
var app = express();

app.get('/', function(req, res)
{
  res.send('hello world');
});

app.get('/about', function(req, res)
{
  res.send('page about');
});

// sans express on ecrit
//
// var server = http.createServer(function (request, response) {
//   response.writeHead(200, {'Content-Type': "text/html"});
//   response.end("<div> Hello world </div>");
// });

app.listen(9999);

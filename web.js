var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
var infile = "index.html"

var outstr = new Buffer (fs.readFileSync(infile,"utf-8"));

app.get('/', function(request, response) {
  response.send(outstr.toString('utf-8'));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

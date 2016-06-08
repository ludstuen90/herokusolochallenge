var express = require('express');
var app=express();
var path = require('path');


var server = app.listen(process.env.PORT || 3000, function() {
  console.log("Hello, world!"  );
});

app.get('/', function(req, res) {
  res.sendFile(path.resolve('index.html'));
});

app.use( express.static( 'public'));

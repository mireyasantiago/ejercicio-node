var express = require('express');
var path = require('path');
var app = express();

app.get('/', (req, res) =>{
  res.send('hola mundo')
});

app.listen(8080);

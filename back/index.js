var express = require('express');
var app = express(); 
const path = require('path');

app.get('/',function(req,res){
 res.sendFile(path.join(__dirname+'/index.html')); 
});

app.get('/muro',function(req,res){
 res.sendFile(path.join(__dirname+'/muro.html')); 
});

app.get('/api/muro', (req, res) => {
  var jsonData = {"results": ["Important 1 ","Thing 2",]};
  res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(jsonData));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

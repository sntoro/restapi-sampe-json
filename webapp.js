var express = require('express');
var webapp = express();
var webport = 8080;

webapp.get('/', function(req, res){
    res.send('<h1> Welcome to web apps </h1>')
})

webapp.listen(webport, function(){
    console.log('running at port 8080');
})
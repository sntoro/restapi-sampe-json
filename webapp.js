var express = require('express');
var webapp = express();
var webport = 8080;
var bodyparser = require('body-parser'); 
var methodOverride = require('method-override');

// webapp.use(methodOverride());
webapp.use(methodOverride('_methods'));

webapp.use(bodyparser.urlencoded({extended: true}));
webapp.use(bodyparser.json());
// webapp.use(express.urlencoded()); //deprecated

webapp.get('/', function(req, res){
    res.send('<h1> Welcome to web apps </h1>')
})

webapp.get('/input', function(req, res){
    res.sendFile('inputdata.htm', { root: __dirname });
})

//must be check via postman
webapp.post('/submit', function(req, res){
    res.send('<h1> POST METHODS '
    + ' fullname ;'+ req.body.fullname 
    + ' phone : '+ req.body.phone 
    // + ' berat : '+ req.body.data_fisik.berat 
    // + ' tinggi : '+ req.body.data_fisik.tinggi 
    +'</h1>')
})

//must be check via postman
webapp.put('/putdata', function(req, res){
    res.send('<h1> PUT METHODS '
    + ' fullname ;'+ req.body.fullname 
    + ' phone : '+ req.body.phone 
    // + ' berat : '+ req.body.data_fisik.berat 
    // + ' tinggi : '+ req.body.data_fisik.tinggi 
    +'</h1>')
})


webapp.listen(webport, function(){
    console.log('running at port 8080');
})
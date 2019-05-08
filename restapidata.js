var express = require('express');
var app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());


var inventory = [
    {code:1001,name:"laptop",price:1000000,stock:12},
    {code:1002,name:"monitor",price:200000,stock:40},
    {code:1003,name:"scanner",price:500000,stock:25},
    {code:1004,name:"printer",price:800000,stock:30},
    {code:1005,name:"proyektor",price:800000,stock:6}
];

app.get('/', function(req, res){
    res.json(inventory);
})

app.get('/detail/:id([0-9]{4})', function(req, res){
    var data = inventory.filter(function(inventory){
        if(inventory.code==req.params.id){
            return true;
        }
    });

    if(data.length==1){
        res.json(data[0])
    }else{
        res.status(404);
        res.json(
            { status:"data not found" }
        );
    }

})

app.delete('/remove/:id', function(req, res){
    var data = inventory.map(function(inventory){
        return inventory.code;
    }).indexOf(parseInt(req.params.id));

    if(data == -1){
        res.json(
            { status:"data not found" }
        );
    }else{
        inventory.splice(data,1);
        res.json(
            { status:"Inventory code :" + req.params.id + " has been remove" }
        );
    }

})

//handling error url
app.use(function(req, res, next){
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use(function(error, req, res, next){
    res.status(error.status || 505);
    res.json({
        error: {
            message : error.message
        }
    });
});

app.listen(8080,function(){
    console.log('listening 8080');
});
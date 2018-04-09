var express = require("express");
var app = express();
var path = require('path');

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

var port = 3000;

app.get('/', function(req, res){
    res.render("index");
});

app.listen(port, function(){
    console.log("Running on " + port);
});
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');
var settings = require('./church-tools');
console.log(settings.connection.port);

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();

router.get('/', function (req, res){
	res.send('Hello World');
});

app.use(router);
app.listen(settings.connection.port, function(){
	console.log('Node server running on http://localhost:'+settings.connection.port);
});
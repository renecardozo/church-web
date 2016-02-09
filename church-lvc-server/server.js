var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');
var settings = require('./church-tools');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(express.static(settings.client_connection.folder));
console.log(settings.client_connection.folder);

var router = express.Router();

/*router.get('/', function (req, res){
	res.sendfile(settings.client_connection.folder + 'index.html');
});*/

app.use(router);
app.listen(settings.connection.port, function(){
	console.log('Node server running on http://localhost:'+settings.connection.port);
});
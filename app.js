var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	logger = require('morgan'),
	config = require('./app/config'),
	port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

app.use(logger('dev'));
app.use(require('./app/controller'));

app.listen(port,function(){
	console.log('Server is running on port :: ',port);
});

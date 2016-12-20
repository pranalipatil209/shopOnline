/**
 * Creating server instance & bind to the port
 * @see module:app/config
 **/

/**
 * import dependencies
 * */
var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	logger = require('morgan'),
	config = require('./app/config'),
	port = process.env.PORT || 3000;

/** middleware */
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
app.use(logger('dev'));

/**
 * using controllers as middleware
 * @see module:app/controller
 */
app.use(require('./app/controller'));

/** Assigning port to the server */
app.listen(port,function(){
	console.log('Server is running on port :: ',port);
});

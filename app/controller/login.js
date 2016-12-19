/**
 * login Controller
 * @module Router
 * @see module:models/login
 */

/**
 * import dependencies
 * */
var express = require('express'),
	app = express(),
	Router = express.Router(),
	login = require('../models/login');

/**
 * checks whether user is valid or not
 * returns token as a response
 * */
Router.post('/login', function(req,res){
	login.checkUser(req.body, function(err,result){
		if(err){
			res.json({err: err});
		}
		else{
			res.json(result);
		}
	})
});

/**
 * @exports Router
 */
module.exports = Router;

// Router.post('/forgetPassword',function(req,res){
// 	database.findOne({email: req.body.email}, function(err, data){
//
// 	})
// });
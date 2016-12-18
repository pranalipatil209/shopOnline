var express = require('express'),
	app = express(),
	Router = express.Router(),
	jwt = require('jsonwebtoken'),
	config = require('../config'),
	database = require('../models/database');

app.set('superSecret',config.secret);

Router.post('/login', function(req,res){
	database.findOne({email: req.body.email},function(err,user){
		if (err) throw err;
		console.log(user);
		if(!user){
			res.json({success: false, message:'User does not exist'});
		}
		else if(req.body.password !== user.password){
			res.json({success: false, message: 'Invalid Password'});
		}
		else{
			var token = jwt.sign(user,app.get('superSecret'));
			res.json({success: true, message: 'Successfully LoggedIn', _token : token});
		}
	})
});

module.exports = Router;

// Router.post('/forgetPassword',function(req,res){
// 	database.findOne({email: req.body.email}, function(err, data){
//
// 	})
// });
var express = require('express'),
	Router = express.Router();

Router.get('/',function(req,res){
	res.json({success: true, message : 'You are Online'});
});

Router.use('/api',require('./login'));

module.exports = Router;
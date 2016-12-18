var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	express = require('express'),
	app = express(),
	config = require('../config');

mongoose.connect(config.database);

module.exports = mongoose.model('user',new Schema({
	email : String,
	password : String
}));
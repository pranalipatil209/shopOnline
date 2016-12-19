/**
 * Connecting database and defining schemas
 * @module models/database
 * @see module:config
 */

/**
 * import dependencies
 * */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	express = require('express'),
	app = express(),
	config = require('../config');

/** connect database */
mongoose.connect(config.database);

module.exports = mongoose.model('user',new Schema({
	email : String,
	password : String
}));
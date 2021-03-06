'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * VesselTableSchema Schema
 */
var vesseltable = new Schema({
    created         : String,
    user            : String,
    number    		: String,
    name      		: String,
    hide            : String,
    approval        : String
});

module.exports = mongoose.model('vesseltable', vesseltable);
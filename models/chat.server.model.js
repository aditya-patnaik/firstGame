/**
 * Created by ADITYA on 04/04/2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var chat = {
    playerId: String,
    message: String,
    time: String
};

//Exporting the model
module.exports = mongoose.model('chat', chat);
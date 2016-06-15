/**
 * Created by ADITYA on 04/04/2016.
 */
var mongoose = require('mongoose');
var Chat = require('../models/chat.server.model.js');
var Schema = mongoose.Schema;

var newRoundSchema = new Schema;

newRoundSchema.add({
    roundId: String,
    player1: String,
    player2: String,
    celebrity: String,
    messages: [Chat],
    roundStatus: String
});

//Exporting the model
module.exports = mongoose.model('round', newRoundSchema);
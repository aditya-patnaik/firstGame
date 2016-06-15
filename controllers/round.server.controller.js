/**
 * Created by ADITYA on 04/04/2016.
 */
var Chat = require('../models/chat.server.model.js');
var Round = require('../models/round.server.model.js');

exports.appendMsg = function(req, res){
    var chat = new Chat({
        playerId: req.body.playerId,
        message: req.body.message,
        time: req.body.time
    });

    var roundId = req.body.roundId;
    firstGame.round.update(
        { roundId: roundId },
        { $addToSet: {messages: chat } }
    );

    res.send(chat);
};

exports.getNewUser = function(req,res){
    res.render('newUser', {title: 'User Registration' });
};
var express = require('express');
var router = express.Router();
var gameCtrl = require('../controllers/round.server.controller.js');
var loginCtrl = require('../controllers/login.server.controller.js');
var regCtrl = require('../controllers/registration.server.controller.js');

/* GET home page. */
router.get('/', requireLogin, function(req, res) {
    //res.render('index', {title: 'express'});
    loginCtrl.returnUser(req, res);
});

router.get('/logout', function(req, res){
    req.session.reset();
    res.redirect('/');
});

router.post('/login', function(req, res){
    loginCtrl.loginUser(req, res);
});

router.post('/registerUser', function(req, res){
    regCtrl.registerUser(req, res);
});

router.post('/appendMsg', function(req, res) {
    return gameCtrl.appendMsg(req, res);
});

function requireLogin (req, res, next) {
    if (!req.session.user) {
        //res.render('index', { title : 'Users', loggedIn: false});
        loginCtrl.checkVisitor(req, res);
    } else {
        next();
    }
};

module.exports = router;

/**
 * Created by ADITYA on 24/04/2016.
 */
var User = require('../models/user.server.model.js');
var Visitor = require('../models/visitor.server.model.js');
sha256 = require('js-sha256');

exports.returnUser = function(req, res){
    res.render('index', { title : 'Users', loggedIn: true, user: req.session.user});
};

exports.checkVisitor = function(req, res){
    var ip = req.headers['x-forwarded-for'] ||
     req.connection.remoteAddress;
     ip = ip.replace(/:/g,',');

     var query = Visitor.find({ipAddress: ip});
     query.count(function(err, count){
     //console.log("Your query returned " + count + " results");
     if(count > 0){
        query.exec(function(err, results){
            //res.redirect('/');
            res.render('index', { title : 'Users', loggedIn: false});
        });
     } else{
            var visitor = new Visitor({
                ipAddress: ip
            });
            visitor.save();
            res.render('index', { title : 'Users', loggedIn: false});
            //res.redirect('/');
        }
     });
};

exports.loginUser = function(req, res){
    var loginId = req.body.email;
    var query = User.find({ email: loginId });
    query.count(function(err, count){
        if( count == 1 ){
            var password = sha256(req.body.password);
            query = User.find({email: loginId, password: password});
            query.count(function(err, count){
                if(count == 1){
                    console.log('login successful');
                    User.findOne({ email: loginId, password: password }, function(err, user) {
                        if (!user) {
                            res.send({ title: 'Users', loginResponse : 0 });
                        } else {
                            req.session.user = user;
                            res.send({ title: 'Users', loginResponse : 1});
                        }
                    });
                }
                else{
                    res.send({ title: 'Users', loginResponse : 0 });
                }
            });
        } else{
            res.send({ title: 'Users', loginResponse : 0 });
        }
    });
}
/**
 * Created by ADITYA on 01/05/2016.
 */
sha256 = require('js-sha256');
var User = require('../models/user.server.model.js');

exports.registerUser = function(req, res){

    var email = req.body.email;
    var query = User.find({email: email});
    query.count(function(err, count){
        if(count != 1){
            var password = sha256(req.body.password);
            var user = new User({
                email: email,
                alias: req.body.alias,
                password: password
            });
            user.save();
            res.render('index', { title : 'Users', message: "User added successfully!", user: user});
        }else{
            console.log("Email already exists in our records");
            res.send({ title : 'Users', message: "This email already exists in our records", user: user});
            //res.render('index', { title : 'Users', message: "This email already exists in our records", user: user});
        }
    });
};
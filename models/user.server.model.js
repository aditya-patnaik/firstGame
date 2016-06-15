/**
 * Created by ADITYA on 24/04/2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema;

userSchema.add({
    email: String,
    alias: String,
    password: String
});

//Exporting the model
module.exports = mongoose.model('user', userSchema);
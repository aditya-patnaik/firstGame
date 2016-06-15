/**
 * Created by ADITYA on 01/05/2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var visitorSchema = new Schema;

visitorSchema.add({
    alias: String,
    ipAddress: String,
    password: String
});

//Exporting the Visitor Model
module.exports = mongoose.model('visitor', visitorSchema);
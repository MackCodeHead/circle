/**
 * Created by mackeys on 5/11/17.
 */
var express = require('express');
var app = express();
var initDbModule = require('./model/initdb')
var mongoose = require("mongoose");
var index = require('./routes/index');

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://127.0.0.1/lineserver");
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use('/', index);

app.listen(3000, function () {
  console.log('Circle Line Server App listening on port 3000');
  initDbModule.initDb();
});

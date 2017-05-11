var async = require("async");
var LineByLineReader = require('line-by-line');
var Files = require("./files");

var dbCalls = [];

var clearFile = function(callback) {
    Files.remove({}, function(err) {
        if (err) { return callback(err); }
        console.log("clearing file...");
        callback(null, "clearFile");
    });
};

var loadFile = function(callback) {
  var lr = new LineByLineReader('./files/textfile.txt');
  var lineNumber = 1;

  lr.on('error', function (err) {
      console.log("error reading file: " + err);
    return callback(err);
  });

  lr.on('line', function (text) {
    var line = new Files({
        lineNumber: lineNumber++,
        text: text
    });

    line.save(function(err) {
        if (err) { console.log(err); }
    });
  });

  lr.on('end', function () {
    console.log("finished reading in file");
    callback(null, "loadFile");
  });

};

dbCalls.push(clearFile);
dbCalls.push(loadFile);

var initDb = function() {
    async.series(dbCalls, function(err, res) {
        if (err) { return console.log(err); }
    });
};

module.exports.initDb = initDb;


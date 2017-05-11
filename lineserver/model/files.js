var mongoose = require("mongoose");

var fileSchema = new mongoose.Schema({
    lineNumber: {type: Number},
    text: { type: String }
});

var file = mongoose.model("file", fileSchema);

module.exports = file;

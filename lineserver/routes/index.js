var express = require('express');
var router = express.Router();
var Files = require('../model/files');

router.use(function timeLog (req, res, next) {
  //console.log('Time: ', Date.now());
  next();
});


router.get('/lines/:line', function (req, res) {
  Files.findOne({ 'lineNumber': req.params.line}, 'text', function (err, line) {
    if (err) {
      console.log(err);
    }

    if (line) {
      res.status(200);
      res.send(line.text);
    } else {
      res.sendStatus(413);
    }
  });
});

router.get('*', function (req, res) {
  res.send('Circle Line Server');
});

module.exports = router;

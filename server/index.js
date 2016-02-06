'use strict';

var express = require('express');
var random = require('node-random');
var path = require('path');

var words = require('./words');

var app = express();

app.get('/word', function (req, res) {
  random.numbers({
    number : 1,
    minimum : 0,
    maximum : words.length - 1
  }, function (err, num) {
    if (err) {
      res.status(500);
      res.json({ error : err.message });
      return;
    }

    res.json({ word : words[num] });
  });
});

app.use('/static', express.static('.build'));

app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname, '../static/index.html'));
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Server listening at http://%s:%s', host, port);
});

module.exports = server;

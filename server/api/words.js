'use strict';

var data = require('../data');
var random = require('node-random');
/**
 * @public
 * @desc gets a random word from an array and returns it in a json response
 * @function words
 * @param req
 * @param res
 */
exports.get = function(req, res) {
  random.numbers({
    number : 1,
    minimum : 0,
    maximum : data.words.length - 1
  }, function (err, num) {
    if (err) {
      res.status(500);
      res.json({ error : err.message });
      return;
    }

    res.json({ word : data.words[num] });
  });
};

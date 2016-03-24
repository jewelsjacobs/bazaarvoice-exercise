'use strict';

var $ = require('jquery'),
  guess = require('./guess'),
  Views = require('../views/display'),
  _ = require('lodash');

module.exports = {
  getWord : (function () {
    localStorage.clear();
    $.getJSON('word', function (data) {
      localStorage.setItem('word', data.word);
      var word = localStorage.getItem('word');
      var guess = '';
      _.forEach(word, function (char) {
        guess += '.';
      });
      localStorage.setItem('misses', 0);
      localStorage.setItem('hits', 0);
      localStorage.setItem('guesses', '');
      localStorage.setItem('guess', guess);
      Views.createDisplay(guess);
    });
  }()),

  submitGuess : function (letter) {
    if (!!letter) {
      var routeGuess = guess.routeGuessResult(letter);

      if (_.isEmpty(routeGuess)) {
        return guess.updateGuess(letter)
      }

      switch (routeGuess[0].result) {
        case 'alreadyGuessed':
        case 'invalid':
          return routeGuess[0].message;
        case 'notInWord':
          var counter = localStorage.getItem('misses');
          counter = parseInt(counter);
          counter++;
          localStorage.setItem('misses', counter);
          return routeGuess[0].message;
      }
    }
  }
};

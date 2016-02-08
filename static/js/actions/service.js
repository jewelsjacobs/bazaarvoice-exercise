'use strict';

var $ = require('jquery'),
  guess = require('./guess'),
  _ = require('lodash');

module.exports = {
  getWord: (function () {
    $.getJSON("word", function (data) {
      localStorage.setItem('word', data.word);
    });

  }()),

  setGuess: (function () {
    var guess = "";
    var word = localStorage.getItem('word');

    _.forEach(word, function (char) {
      guess += ".";
    });

    localStorage.setItem('guess', guess);
  }()),

  setCounter: (function () {
    localStorage.setItem('counter', 0);
  }()),

  submitGuess: function (letter) {
    if (!!letter) {
      var routeGuess = guess.routeGuessResult(letter);

      if (_.isEmpty(routeGuess)) {
        return guess.updateGuess(letter)
      }

      switch (routeGuess[0].result) {
        case "alreadyGuessed":
        case "invalid":
          return routeGuess[0].message;
        case "notInWord":
          var counter = localStorage.getItem('counter');
          counter = parseInt(counter);
          counter++;
          localStorage.setItem('counter', counter);
          return routeGuess[0].message;
      }
    }
  }
};

'use strict';

var $ = require('jquery'),
  _ = require('lodash');

var Service = {
  getWord: (function () {
    $.getJSON( "word", function(data) {
      localStorage.setItem('word', data.word);
    });

  }()),

  setGuess: (function () {
    var guess = "";

    var word = localStorage.getItem('word');

    for (var i = 0; i < word.length; i++) {
      guess += ".";
    }

    localStorage.setItem('guess', guess);
  }()),

  updateGuess: (function (letter) {
    var guess = "";

    var word = localStorage.getItem('word');

    for (var i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        guess += letter
      } else {
        guess += ".";
      }
    }

    localStorage.setItem('guess', guess);
  }())
};

module.exports = Service;

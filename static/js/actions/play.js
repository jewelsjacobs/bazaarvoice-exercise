'use strict';

var $ = require('jquery'),
  Service = require('./service'),
  _ = require('lodash');

module.exports = {
  start: (function () {
    Service.getWord;
  }()),

  end: function () {
    if (localStorage.getItem('misses') >= 7) {
      $("#message").text("You have guessed incorrectly 7 times. Game over");
    }
    if (localStorage.getItem('hits') >= localStorage.getItem('word').length) {
      $("#message").text("You have won!");
    }
  }
};

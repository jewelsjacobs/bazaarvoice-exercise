'use strict';

var $ = require('jquery'),
  Service = require('../actions/service'),
  Play = require('../actions/play'),
  _ = require('lodash');

module.exports = {
  init: (function () {
    $('#enterLetter').on('click', function(event) {
      var message = Service.submitGuess($('#letter').val());
      $("#message").text(message);
      var guesses = localStorage.getItem('guesses');
      guesses += " " + $('#letter').val();
      localStorage.setItem('guesses', guesses);
      $("#display section:first-child").trigger("updateDisplay");
      $("#score").trigger( "updateScores");
      Play.end();
    });
  }())
};

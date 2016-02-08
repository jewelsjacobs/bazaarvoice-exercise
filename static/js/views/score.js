'use strict';

var $ = require('jquery'),
  _ = require('lodash');

module.exports = {
  init: (function () {
    $("#score").on( "updateScores", function( event ) {
      $("#hits").text("Hits: " + localStorage.getItem('hits'));
      $("#misses").text("Misses: " + localStorage.getItem('misses'));
      $("#guesses").text("Guesses: " + localStorage.getItem('guesses'));
    });
  }())
};

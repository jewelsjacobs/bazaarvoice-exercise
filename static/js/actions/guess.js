'use strict';

var _ = require('lodash'),
  Play = require('./play');

module.exports = {

  updateGuess : function (letter) {
    var word = localStorage.getItem('word');
    var guess = localStorage.getItem('guess');
    guess = _.map(guess.split(''), function(value, key){
      return word.split('')[key] === letter ? letter : value;
    });
    localStorage.setItem('guess', guess.join(''));
    var counter = localStorage.getItem('hits');
    counter = parseInt(counter);
    counter++;
    localStorage.setItem('hits', counter);
    return 'You have guessed a correct letter';
  },

  routeGuessResult : function (letter) {
    var word = localStorage.getItem('word');
    var guess = localStorage.getItem('guess');

    var map = [
      {'result' : 'alreadyGuessed', 'condition' : guess.indexOf(letter) !== -1, 'message' : 'You\'ve already guessed this letter'},
      {'result' : 'invalid', 'condition' : letter.length === 1 && !letter.match(/[a-z]/i), 'message' : 'You have not entered a letter'},
      {'result' : 'notInWord', 'condition' : word.indexOf(letter) === -1, 'message' : 'Not a letter in the word'}
    ];

    var results =  _.filter(map, 'condition');

    return results;
  }
};

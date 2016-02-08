'use strict';

var $ = require('jquery'),
  Service = require('../actions/service'),
  _ = require('lodash');

module.exports = (function () {
  'use strict';
  // process the form
  $('#enterLetter').on('click', function(event) {
    var message = Service.submitGuess($('#letter').val());
    console.log(message);
  });
}());

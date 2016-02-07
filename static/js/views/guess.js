'use strict';

var $ = require('jquery'),
  _ = require('lodash');

module.exports = (function () {

  'use strict';
  // process the form
  $('form').submit(function(event) {

    // get the form data
    // there are many ways to get this data using jQuery (you can use the class or id also)
    var formData = {
      'guess': $('input[name=guess]').val()
    }

    // stop the form from submitting the normal way and refreshing the page
    event.preventDefault();
  });
}());

'use strict';

var $ = require('jquery'),
  _ = require('lodash');

module.exports = (function () {
  'use strict';
  if (!!localStorage.getItem('guess')) {
    var display = $("#display section:first-child");
    var guess = localStorage.getItem('guess');
    var columns = Math.floor(12 / guess.length);
    _.forEach(guess, function(char){
      var markup = '<div class="column-' + columns +'">';
      if (char === '.') {
        markup += '<span class="demo stencil"> </span>';
      } else {
        markup += '<span class="demo stencil">' + char + '</span>';
      }
      markup += '</div>';
      display.append(markup);
    });
  }

  $( "#display section:first-child" ).on( "updateDisplay", function( event ) {
      $(this).find('.stencil').each(function(i) {
        if (localStorage.getItem('guess')[i] !== '.') {
          $(this).text(localStorage.getItem('guess')[i]);
        }
      });
  });

}());


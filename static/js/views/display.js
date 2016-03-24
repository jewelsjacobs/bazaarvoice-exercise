'use strict';

var $ = require('jquery'),
  _ = require('lodash');

module.exports = {
  init : (function () {
    $( '#display section:first-child' ).on( 'updateDisplay', function( event ) {
      $(this).find('.stencil').each(function(i) {
        if (localStorage.getItem('guess')[i] !== '.') {
          $(this).text(localStorage.getItem('guess')[i]);
        }
      });
    });
  }()),

  createDisplay : function (guess) {
    var display = $('#display section:first-child');
    display.empty();
    if (!!guess) {
      var columns = Math.round(12 / guess.length);
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
  }
};


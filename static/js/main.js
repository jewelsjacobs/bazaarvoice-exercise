'use strict';

module.exports = (function () {
  'use strict';

  var Guess = require('./views/guess'),
    Display = require('./views/display'),
    Play = require('./actions/play'),
    Score = require('./views/score');

    Play.start;
    Guess.init;
    Display.init;
    Score.init;
}());

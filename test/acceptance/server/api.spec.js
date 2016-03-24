(function () {
  'use strict';

  var Yadda = require('yadda'),
    CONFIG = require('config').Default;

  Yadda.plugins.mocha.AsyncScenarioLevelPlugin.init();

  featureFile(
      CONFIG.testRoot + '/acceptance/server/features/api.feature',
      function(feature) {

        var library = require(
            CONFIG.testRoot + '/acceptance/server/features/step_definitions/api.step.js'
        );
        var yadda = new Yadda.Yadda(library);

        scenarios(feature.scenarios, function (scenario, done) {
          yadda.yadda(scenario.steps, done);
        });
      });
}());

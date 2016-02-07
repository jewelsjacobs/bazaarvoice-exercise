'use strict';
module.exports = function (grunt) {
  var path = require('path');

  // If an option name is not recognized, it can be aliased here.
  // See: https://github.com/shootaroo/jit-grunt#static-mappings
  require('jit-grunt')(grunt, {
    //custom3: 'static/custom.js'
  })({
    customTasksDir: 'grunt/tasks'
  });

  require('load-grunt-config')(grunt, {
    configPath: path.join(process.cwd(), 'grunt/config')
  });
};

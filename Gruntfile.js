'use strict';
module.exports = function (grunt) {
  var path = require('path');

  // If an option name is not recognized, it can be aliased here.
  // See: https://github.com/shootaroo/jit-grunt#static-mappings
  require('jit-grunt')(grunt, {
    server: 'grunt/tasks/server.js',
    docs: 'grunt/tasks/docs.js'
  });

  require('load-grunt-config')(grunt, {
    configPath: path.join(process.cwd(), 'grunt/config'),
    jitGrunt: {
      customTasksDir: 'grunt/tasks'
    }
  });
};

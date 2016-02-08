module.exports = function(grunt) {
  grunt.registerTask('client', ['sass:dev', 'webpack:dev', 'docs']);
};

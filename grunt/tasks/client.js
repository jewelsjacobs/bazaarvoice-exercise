module.exports = function(grunt) {
  grunt.registerTask('client', ['webpack:dev', 'sass:dev', 'docs']);
};

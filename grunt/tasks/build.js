module.exports = function(grunt) {
  grunt.registerTask('build', ['eslint', 'test', 'webpack:dev', 'docs']);
};

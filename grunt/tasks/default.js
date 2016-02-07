module.exports = function(grunt) {
  grunt.registerTask('default', ['eslint', 'test', 'client', 'server']);
};

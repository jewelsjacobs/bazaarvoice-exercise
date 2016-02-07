module.exports = function(grunt) {
  grunt.registerTask('serve', [
    'webpack:dev',
    'sass:dev',
    'express:dev',
    'open:dev',
    'watch'
  ]);
};

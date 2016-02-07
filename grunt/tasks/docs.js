module.exports = function(grunt) {
  grunt.registerTask('docs', ['clean:docs', 'jsdoc', 'apidoc', 'copy', 'kss', 'gh-pages']);
};

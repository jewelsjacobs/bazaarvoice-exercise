module.exports = function(grunt) {
  grunt.registerTask('docs', ['clean:docs', 'jsdoc', 'apidoc', 'copy', 'rename', 'kss', 'gh-pages']);
};

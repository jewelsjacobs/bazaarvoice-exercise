module.exports = function(grunt) {
  grunt.registerTask('docs', ['clean:docs', 'jsdoc', 'apidoc', 'copy:docs', 'rename', 'kss', 'copy:style', 'gh-pages']);
};

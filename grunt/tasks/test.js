module.exports = function(grunt) {
  grunt.registerTask('unit:server', ['mochacov:unit']);
  grunt.registerTask('unit:ui', ['karma:unit']);
  grunt.registerTask('test:unit', ['unit:server', 'unit:ui']);
  grunt.registerTask('bdd:ui', ['karma:bdd']);
  grunt.registerTask('bdd:server', ['mochacov:bdd_server']);
  grunt.registerTask('test:bdd', ['bdd:server', 'bdd:ui']);
  grunt.registerTask('test', ['unit:server', 'unit:ui', 'bdd:server', 'bdd:ui']);
};

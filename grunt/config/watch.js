module.exports = {
    options : {
      livereload : true
    },
    test: {
      files: [
        '<%= eslint.test.src %>'
      ],
      tasks: ['eslint:test', 'karma:all']
    },
    client : {
      files : [
        'static/**/*.js',
        'static/**/*.html'
      ],
      tasks : [
        'webpack:dev'
      ]
    },
    styles : {
      files : [
        'static/**/*.scss',
        'static/**/*.sass'
      ],
      tasks : [
        'sass:dev'
      ]
    },
    server : {
      files : [
        'server/**/*.js'
      ],
      tasks : [
        'express:dev'
      ],
      options : {
        spawn : false
      }
    }
};

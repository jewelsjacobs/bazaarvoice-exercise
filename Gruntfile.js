'use strict';

// Note that if you make any changes to this file
// while you are running grunt serve, you will need
// to exit that process and run grunt serve again.

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    watch : {
      options : {
        livereload : true
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
    },
    eslint : {
      browser : {
        src : [
          'static/js/**/*.js'
        ],
        options : {
          configFile : 'config/eslint-browser.json'
        }
      },
      node : {
        src : [
          'server/**/*.js'
        ],
        options : {
          configFile : 'config/eslint-node.json'
        }
      }
    },
    webpack : {
      dev : {
        entry : './static/js/main.js',
        output : {
          path : '.build/js/',
          filename : 'main.js'
        },
        devtool : 'source-map'
      }
    },
    express : {
      dev : {
        options : {
          script : 'server/index.js'
        }
      }
    },
    open : {
      dev : {
        path: 'http://localhost:3000/'
      }
    },
    sass : {
      options : {
        sourceMap : true
      },
      dev : {
        files : {
          '.build/styles/main.css' : 'static/styles/main.scss'
        }
      }
    },
    clean : {
      dev : [
        '.build'
      ]
    },
    zip : {
      'exercise.zip' : [
        'server/**/*',
        'static/**/*',
        'docs/**/*',
        'config/**/*',
        'README.md',
        'package.json',
        'Gruntfile.js',
        '.editorconfig'
      ]
    }
  });

  grunt.registerTask('serve', [
    'webpack:dev',
    'sass:dev',
    'express:dev',
    'open:dev',
    'watch'
  ]);

  grunt.registerTask('lint', ['eslint']);
};

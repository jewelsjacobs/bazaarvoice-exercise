module.exports = {
  main: {
    files: [
      {expand: true, flatten: true, src: ['README.md'], dest: 'static/styles', filter: 'isFile'},
      {expand: true, src: ['apidoc/**'], dest: 'styleguide/'},
      {expand: true, src: ['jsdoc/**'], dest: 'styleguide/'},
      {expand: true, src: ['docs/**'], dest: 'styleguide/'}
    ]
  }
};

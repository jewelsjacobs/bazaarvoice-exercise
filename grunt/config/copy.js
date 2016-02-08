module.exports = {
  docs: {
    files: [
      {expand: true, flatten: true, src: ['README.md'], dest: 'static/styles', filter: 'isFile'},
      {expand: true, src: ['apidoc/**'], dest: 'styleguide/'},
      {expand: true, src: ['jsdoc/**'], dest: 'styleguide/'},
      {expand: true, src: ['docs/**'], dest: 'styleguide/'}
    ]
  },
  style: {
    files: [
      {expand: true, flatten: true, src: ['.build/styles/main.css'], dest: 'styleguide/public', filter: 'isFile'},
      {expand: true, flatten: true, src: ['style-fonts.js'], dest: 'styleguide/public', filter: 'isFile'}
    ]
  }
};

module.exports = {
  dev: {
    files: [{
      src: ['static/styles/styleguide.md'],
      dest: 'styleguide/styleguide.md'
    }]
  },
  apidocs: {
    files: [{
      src: ['apidoc'],
      dest: 'styleguide/apidoc'
    }]
  },
  jsdoc: {
    files: [{
      src: ['jsdoc'],
      dest: 'styleguide/jsdoc'
    }]
  },
  docs: {
    files: [{
      src: ['docs'],
      dest: 'styleguide/docs'
    }]
  }
};

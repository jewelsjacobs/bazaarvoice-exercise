module.exports = {
  options: {
    verbose: true,
    helpers: '/grunt/config/rows.js',
    css: 'public/main.css',
    js: 'public/style-fonts.js',
    title: 'Hangman'
  },
  dist: {
    src: ['./static/styles/.'],
    dest: './styleguide/.'
  }
};

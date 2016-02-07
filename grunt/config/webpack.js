module.exports = {
  dev : {
    entry : './static/js/main.js',
    output : {
      path : '.build/js/',
      filename : 'main.js'
    },
    devtool : 'source-map'
  }
};

module.exports = {
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
  },
  test: {
    src : [
      'test/**/*.js'
    ],
    options : {
      configFile : 'config/eslint-test.json'
    }
  }
};

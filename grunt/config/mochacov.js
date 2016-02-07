module.exports = {
  options: {
    ui: 'bdd',
    colors: true
  },
  unit: {
    options: {
      reporter: 'spec',
      files: ['test/unit/server/**/*.spec.js']
    }
  },
  bdd_server: {
    options: {
      reporter: 'spec',
      files: ['test/acceptance/server/*.spec.js']
    }
  }
};

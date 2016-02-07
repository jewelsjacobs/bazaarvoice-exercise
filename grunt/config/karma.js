module.exports = {
  unit: {
    configFile: 'karma.conf.js',
    singleRun: true,
    reporters: 'progress',
    runnerPort: 9998
  },
  bdd: {
    configFile: 'karma-bdd.conf.js',
    singleRun: true,
    reporters: 'progress',
    runnerPort: 9999
  }
};

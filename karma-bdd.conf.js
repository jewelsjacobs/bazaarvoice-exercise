module.exports = function (config) {
    'use strict';

    var _ = require('lodash'),
        files = require('config'),
        prodFiles = files.ui_prod,
        testFiles = files.ui_test_bdd;

    function preprocessor() {
        var files = {};
        _.each(_.union(prodFiles, testFiles.spec, testFiles.step), function (file) {
          files[file] = ['webpack', 'sourcemap'];
        });

        return files;
    }

    config.set({
        basePath: files.basePath,
        frameworks: ['mocha', 'chai', 'sinon'],

        preprocessors: preprocessor(),

        files: _.union(
            _.map(_.union(prodFiles, testFiles.spec, testFiles.step), function (file) {
                return {pattern: file, watch: true}
            }),
            _.map(testFiles.feature, function (file) {
                return {pattern: file, included: false, watch: true}
            })
        ),

        autoWatch: true,
        reporters: ['progress'],
        port: 9999,
        colors: true,
        reportSlowerThan: 50,
        logLevel: config.LOG_INFO,
        browsers: ['PhantomJS'],
        plugins: [
            'karma-chai',
            'karma-mocha',
            'karma-sinon',
            'karma-bro',
            'karma-phantomjs-launcher',
            'karma-chrome-launcher',
            'karma-webpack'
        ],
        captureTimeout: 6000
    });
};

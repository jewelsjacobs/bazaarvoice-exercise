module.exports = function (mainDir, cwd) {
    'use strict';

    if (!cwd) {
        cwd = '';
    }

    return {
        basePath: cwd + mainDir,
        ui_prod: [
            'static/js/main.js'
        ],
        ui_test_unit: [
            'test/unit/ui/ui.spec.js'
        ],
        ui_test_bdd: {
            spec: [ 'test/acceptance/ui/*.spec.js' ],
            step: [ 'test/acceptance/ui/features/step_definitions/*.step.js' ],
            feature: [ 'test/acceptance/ui/features/ui.feature' ]
        },
        Default: {
            projRoot: cwd + mainDir + 'static/js',
            serverRoot: cwd + mainDir + 'server',
            testRoot: cwd + mainDir + 'test'
        },
        TestVals: {
            word: "bucket"
        },
        server: {
            port: 8080
        }
    };
};

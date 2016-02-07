module.exports = (function () {
    'use strict';
    return require('./parent-config')('/IdeaProjects/', process.env.HOME);
}());

module.exports = (function () {
    'use strict';

    var request = require('supertest'),
        expect = require('chai').expect,
        words = require('server/data/words.js'),
        server = require('server').app,
        endpoint = request(server),
        English = require('yadda').localisation.English,
        Dictionary = require('yadda').Dictionary,
        dictionary = new Dictionary()
            .define('contentType', /([^"]*)/);

    return English.library(dictionary)

        .given('a user', function (next) {
            next();
        })
        .when('a GET request to /words is made with an Accept header of "application/json"', function (next) {
            endpoint
                .get('/word')
                .expect(200)
                .expect('Content-Type', /json/)
                .end(function (err, res) {
                    var word = res.body.word;

                    expect(err).to.not.exist;
                    expect(words).to.include(word);

                    next();
                });
        })
        .then('a random word is returned', function (next) {
            next();
        })

}());

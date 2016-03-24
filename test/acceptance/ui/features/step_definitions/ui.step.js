module.exports = (function () {
  'use strict';
  var English = require('yadda').localisation.English,
    Dictionary = require('yadda').Dictionary,
    dictionary = new Dictionary(),

    expect = require('chai').expect,
    $ = require('jquery'),

    server;

  beforeEach(function () {
    server = sinon.fakeServer.create();

    server.respondWith('GET', '/word', [
      200,
      { 'Content-Type' : 'application/json' },
      JSON.stringify({ 'word' : 'askew'})
    ]);
  });

  beforeEach(function (done) {
    done();
  });

  afterEach(function () {
    server.restore();
  });

  return English.library(dictionary)

      .given('a user starts the game', function (next) {
        next();
      })
      .when('a user first sees the screen', function (next) {
        server.respond();
        next();
      })
      .then('screen displays blanks for each letter of the word to be guessed', function (next) {
        expect($('#display').length).to.equal(dummyThoughts.length);
        next();
      })
}());

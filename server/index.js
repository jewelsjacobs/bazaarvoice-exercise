'use strict';

var express = require('express');
var path = require('path');
var app = express();
var port = process.env.PORT || 3000;
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var routes = require('./routes');

/**
 * Config
 */
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('dev'));
app.use('/static', express.static('.build'));

/**
 * Api Routes
 */
app.use('/word', routes.words);

/**
 * Static Route
 */
app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname, '../static/index.html'));
});

app.listen(port, function () {
  console.log('Server listening at port ' + port + ' in ' + app.get('env') + ' mode');
});

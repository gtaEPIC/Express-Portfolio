/*
    This is the file that contains the routes for the application.
    File name: app.js
    Author: Johnathan Hall
    Student #: 301189555
    Date: October 7, 2023
 */
// Load modules
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Define routes
var indexRouter = require('./routes/index');
let aboutRouter = require('./routes/about');
let projectsRouter = require('./routes/projects');
let servicesRouter = require('./routes/services');
let contactRouter = require('./routes/contact');

var app = express(); // Create the Express application object

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Set up the middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
app.use('/', indexRouter);
app.use ('/about', aboutRouter); // About page
app.use ('/projects', projectsRouter); // Projects page
app.use ('/services', servicesRouter); // Services page
app.use ('/contact', contactRouter); // Contact page

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

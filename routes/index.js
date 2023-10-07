/*
    This is the route for the main page.
    File name: index.js
    Author: Johnathan Hall
    Student #: 301189555
    Date: October 7, 2023
 */
var express = require('express');
var router = express.Router();
let counter = 0;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Johnathan\'s Express Portfolio', page: 'Main Page', time: new Date(), count: counter++});
});

module.exports = router;

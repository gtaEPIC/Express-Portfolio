/*
    This is the route for the about page.
    File name: about/index.js
    Author: Johnathan Hall
    Student #: 301189555
    Date: October 7, 2023
 */
var express = require('express');
var router = express.Router();
let counter = 0;

// Handle GET request to the /about page
router.get('/', function(req, res, next) {
    res.render('about/index', { title: 'Johnathan\'s Express Portfolio', page: 'About Me', time: new Date(), count: counter++});
});

module.exports = router;
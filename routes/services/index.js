/*
    This is the route for the services page.
    File name: services/index.js
    Author: Johnathan Hall
    Student #: 301189555
    Date: October 7, 2023
 */
var express = require('express');
var router = express.Router();
let counter = 0;

// Handle GET request to the /services page
router.get('/', function(req, res, next) {
    res.render('services/index', { title: 'Johnathan\'s Express Portfolio', page: 'Services', time: new Date(), count: counter++});
});

module.exports = router;
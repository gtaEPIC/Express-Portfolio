/*
    This is the route for the projects page.
    File name: projects/index.js
    Author: Johnathan Hall
    Student #: 301189555
    Date: October 7, 2023
 */
var express = require('express');
var router = express.Router();
let counter = 0;

// Handle GET request to the /projects page
router.get('/', function(req, res, next) {
    res.render('projects/index', { title: 'Johnathan\'s Express Portfolio', page: 'Projects', time: new Date(), count: counter++});
});

module.exports = router;
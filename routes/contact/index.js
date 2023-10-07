/*
    This is the route for the contact page.
    File name: contact/index.js
    Author: Johnathan Hall
    Student #: 301189555
    Date: October 7, 2023
 */
var express = require('express');
var router = express.Router();
let counter = 0;

// Handle GET request to the /contact page
router.get('/', function(req, res, next) {
    res.render('contact/index', { title: 'Johnathan\'s Express Portfolio', page: 'Contact', time: new Date(), count: counter++});
});

// Handle POST request to the /contact page
// Will also redirect to the main page
router.post('/', function(req, res, next) {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;
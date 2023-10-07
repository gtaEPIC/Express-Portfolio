var express = require('express');
var router = express.Router();
let counter = 0;

router.get('/', function(req, res, next) {
    res.render('contact/index', { title: 'Johnathan\'s Express Portfolio', page: 'Contact', time: new Date(), count: counter++});
});

router.post('/', function(req, res, next) {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;
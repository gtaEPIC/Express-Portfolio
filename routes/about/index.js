var express = require('express');
var router = express.Router();
let counter = 0;

router.get('/', function(req, res, next) {
    res.render('about/index', { title: 'Johnathan\'s Express Portfolio', page: 'About Me', time: new Date(), count: counter++});
});

module.exports = router;
var express = require('express');
var router = express.Router();
let counter = 0;

router.get('/', function(req, res, next) {
    res.render('services/index', { title: 'Johnathan\'s Express Portfolio', page: 'Services', time: new Date(), count: counter++});
});

module.exports = router;
var express = require('express');
var router = express.Router();
let counter = 0;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Johnathan\'s Express Portfolio', page: 'Main Page', time: new Date(), count: counter++});
});

module.exports = router;

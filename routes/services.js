var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('services/services', { title: 'Express' });
});

module.exports = router;

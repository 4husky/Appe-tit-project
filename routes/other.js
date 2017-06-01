var express = require('express');
var router = express.Router();



router.get('/faq', function(req, res) {
  res.render('other/faq');
});

router.get('/about', function(req, res) {
  res.render('other/about');
});
module.exports = router;
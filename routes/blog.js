var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
  res.render('blog/index', { title: 'Express' });
});

router.get('/post/1', function(req, res) {
  res.render('blog/Post/post_1', { title: 'Express' });
});

module.exports = router;

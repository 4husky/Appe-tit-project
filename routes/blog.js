var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/:id', function(req, res) {
  var id = req.params.id;
  var url = 'blog/page_'+ String(id)+'/index';	
  res.render(url, { myurl: url });
});

router.get('/post/:id', function(req, res) {
  var id = req.params.id;
  var url = 'blog/posts/post_'+ String(id) +'/index';
  res.render(url, { myurl: url });
});

router.get('/faq', function(req, res) {
  var url = 'other/faq';
  console.log(url);
  res.render('other/faq', { myurl: url });
});
module.exports = router;
var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

var urlencodedParser = bodyParser.urlencoded({ extended: false });
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

var content;
router.post('/post/:id',urlencodedParser,function(req,res){
	content = req.body;
	var cmt = content[0]; 
});
module.exports = router;
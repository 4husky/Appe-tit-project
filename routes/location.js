var express = require('express');
var router = express.Router();

router.get('/:id', function(req, res) {
  var id = req.params.id;
  var url = 'location/page_' + String(id) +'/index';
  console.log(url);
  res.render(url, { myurl: url });
});

router.get('/location/:id', function(req, res){
  var id = req.params.id;
  var url = 'location/location/location_'+ String(id) + '/index';
  res.render(url, { myurl: url});
});

module.exports = router;

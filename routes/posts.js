var express = require('express');
var router = express.Router();



router.get('/add', function(req, res, next) {
  res.render('addpost',{
  	'title': 'Add Post'
  });
});

router.post('/add', function(req, res, next) {
  //get the form values
  var title = req.body.title;
  var category =req.body.category;
  var body = req.body.body;
  var author =req.body.author;
  var date = new Date();
});
module.exports = router;

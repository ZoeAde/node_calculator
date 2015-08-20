var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/add/:num/:num2', function(req, res, next) {
  var add = parseInt(req.params.num) + parseInt(req.params.num2)
  res.send(add.toString())
});

router.get('/sub/:num/:num2', function(req, res, next) {
  var add = parseInt(req.params.num) - parseInt(req.params.num2)
  res.send(add.toString())
});

router.get('/mult/:num/:num2', function(req, res, next) {
  var add = parseInt(req.params.num) * parseInt(req.params.num2)
  res.send(add.toString())
});

router.get('/div/:num/:num2', function(req, res, next) {
  var add = parseInt(req.params.num) / parseInt(req.params.num2)
  res.send(add.toString())
});


module.exports = router;

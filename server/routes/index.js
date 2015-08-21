var express = require('express');
var router = express.Router();

// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
var input;
var operator = "/" + input + '/:num/:num2'
router.get(operator, function(req, res, next) {
  switch (operator) {
    case 'add' :
      var add = parseInt(req.params.num) + parseInt(req.params.num2)
      res.send(add.toString());

    case 'sub' :
      var sub = parseInt(req.params.num) - parseInt(req.params.num2)
      res.send(sub.toString())

    case 'mult' :
      var mult = parseInt(req.params.num) - parseInt(req.params.num2)
      res.send(mult.toString())

    case 'div' :
      var div = parseInt(req.params.num) - parseInt(req.params.num2)
      res.send(div.toString())
  }
});


// router.get('/mult/:num/:num2', function(req, res, next) {
//   var add = parseInt(req.params.num) * parseInt(req.params.num2)
//   res.send(add.toString())
// });

// router.get('/div/:num/:num2', function(req, res, next) {
//   var add = parseInt(req.params.num) / parseInt(req.params.num2)
//   res.send(add.toString())
// });


module.exports = router;

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/:input/:num/:num2",
  function(req, res, next) {
  switch (req.params.input) {
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


// router.get('/add/:num/:num2', function(req, res, next) {
//   var add = parseInt(req.params.num) + parseInt(req.params.num2)
//   res.send(add.toString())
// });

// router.get('/sub/:num/:num2', function(req, res, next) {
//   var sub = parseInt(req.params.num) - parseInt(req.params.num2)
//   res.send(sub.toString())
// });

// router.get('/mult/:num/:num2', function(req, res, next) {
//   var mult = parseInt(req.params.num) * parseInt(req.params.num2)
//   res.send(mult.toString())
// });

// router.get('/div/:num/:num2', function(req, res, next) {
//   var div = parseInt(req.params.num) / parseInt(req.params.num2)
//   res.send(div.toString())
// });


module.exports = router;

var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  var random = Math.random() * 15;
  res.send(`Math.cbrt() applied to ${random} is ${Math.cbrt(random)}`);
});

router.get('/:id', function(req, res, next) {
  res.send(`Math.cbrt() applied to ${req.params.id} is ${Math.cbrt(req.params.id)}`);
});



module.exports = router;
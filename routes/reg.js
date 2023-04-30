var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('regist')
});
router.post('/', function(req, res, next) {
  console.log("hi");
});
module.exports = router;

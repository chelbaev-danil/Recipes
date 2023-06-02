var express = require('express');
var router = express.Router();
var controller = require('../controller/signup-controller')
router.get('/', function(req, res, next) {
  res.render('regist')
});
router.post('/', controller.signup)
module.exports = router;

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('login')
});
router.post('/', function(req, res) {
  // const username = req.body.username
  // const password = req.body.password
  // console.log(username, password);
  console.log(req.body);
  res.redirect('/main')
});
module.exports = router;

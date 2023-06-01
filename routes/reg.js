var express = require('express');
var router = express.Router();
var model = require('../model/signup')
router.get('/', function(req, res, next) {
  res.render('regist')
});
router.post('/', function(req, res, next) {
  let data = [req.body.username, req.body.name, req.body.password, req.body.email, '01.02.2007']
  model.SignupUser( (err) => {
    err?console.log(err):res.redirect('/login')
  }, data)
  
});
module.exports = router;

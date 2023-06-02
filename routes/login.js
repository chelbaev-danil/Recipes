var express = require("express");
var router = express.Router();
var controller = require('../controller/login-contoller')


router.get("/", function (req, res, next) {
  res.render("login");
});

router.post("/", controller.login)
module.exports = router;

var express = require("express");
var router = express.Router();
var jwt = require("jsonwebtoken");

router.get("/", function (req, res, next) {
  var token = req.cookies.token;
  try {
    var decode = jwt.verify(token, "789567");
    res.render("main", decode);
  } catch (err) {
    if (err instanceof jwt.TokenExpiredError) {
      res.redirect("/login");
    }
    
  }
});

module.exports = router;

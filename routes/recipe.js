var express = require("express");
var router = express.Router();
var model = require("../model/recipe");
var jwt = require('jsonwebtoken')
router.get("/:id", (req, res) => {
  const id = req.params.id;
  var token = req.cookies.token;

  model.getdata((err, rows) => {
    if (err) {
      return console.log(err);
    }
    console.log(rows[0]);
    if (rows.length == 0) {
      res.status(404);
      res.send("ERROR 404 PAGE IS NOT FOUND");
    } else {
        try {
          var decode = jwt.verify(token, "789567");
          res.render("recipe", rows[0]);
        }catch (err) {
        if (err instanceof jwt.TokenExpiredError) {
          res.redirect("/login");
        }
      }
      
    }
  }, id);
});

module.exports = router;

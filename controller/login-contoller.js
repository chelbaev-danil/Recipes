const model = require("../model/login");
var jwt = require("jsonwebtoken");

function login(req, res) {
  let username = req.body.username;
  let password = String(req.body.password);
  model.getUserData((err, rows) => {
    if (err) {
      return console.log(err);
    }
    if (rows.length === 0) {
      return console.log("Uncorrect Username");
    }
    if (rows[0].password !== password) {
      return console.log("Uncorrect Password");
    }
    console.log("all is correct");
    token = jwt.sign(
      {
        id: rows[0].id,
        email: rows[0].email,
        name: rows[0].name,
        password: rows[0].password,
      },
      "789567",
      { expiresIn: "1d" }
    );
    res.cookie("token", token, {
      httpOnly: true,
    });
    res.redirect("/main");
  }, username);
}

module.exports = {
    login
}
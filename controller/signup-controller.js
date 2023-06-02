var model = require("../model/signup");

function signup(req, res) {
  let data = [
    req.body.username,
    req.body.name,
    req.body.password,
    req.body.email,
    "01.02.2007",
  ];
  if (
    req.body.username.length == 0 ||
    req.body.name.length == 0 ||
    req.body.password.length == 0 ||
    req.body.email.length == 0
  ){
    return console.log('Something goes wrong')
  }
    model.SignupUser((err) => {
      err ? console.log(err) : res.redirect("/login");
    }, data);
}

module.exports = {
    signup
}
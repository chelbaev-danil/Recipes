const sqlite3 = require("sqlite3");

function SignupUser(callback, data) {
  let db = new sqlite3.Database("proj.sqlite3");

  // let query = `SELECT username FROM user IF(${username} IN username, "TRUE", "FALSE")`
  let query = `INSERT INTO user (username, name, password, email, date_of_create) VALUES (?,?,?,?,?)`
  db.all(query, data, (err, rows) => {
    err ? callback(err, null) : callback(null, rows);
    db.close();
  });
}

module.exports = {
  SignupUser
};

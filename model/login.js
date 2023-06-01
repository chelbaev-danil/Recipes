const sqlite3 = require("sqlite3");

function getUserData(callback, username) {
  let db = new sqlite3.Database("proj.sqlite3");

  let query = `SELECT * FROM user WHERE username="${username}"`;

  db.all(query, (err, rows) => {
    err ? callback(err, null) : callback(null, rows);
    db.close();
  });
}

module.exports = {
  getUserData
};

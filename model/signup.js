var sqlite3 = require('sqlite3').verbose()

function addData(req, res){
    let db = new sqlite3.Database('project.db')

    let query = `INSERT INTO user(Username, Name, Email, Password) VALUES (
        ${req.body.username},
        ${req.body.name},
        ${req.body.email},
        ${req.body.pasword}
        )`
    db.all(query, (err))
}
const sqlite3 = require('sqlite3').verbose()

function getdata(callback, name, req){
    let db = new sqlite3.Database('../proj.sqlite3')

    let query = `SELECT * FROM recipe WHERE recipe_name="${req.params.id}"`

    db.all(query, (err, rows) =>{
        err?callback(err, null): callback(null, rows)
        db.close()
    })
}

module.exports = {
    getdata 
}
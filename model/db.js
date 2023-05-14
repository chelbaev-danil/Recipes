const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('../proj.sqlite3', (err) =>{
    err?console.log(err.message):console.log('zbs');

})
let query = `
    CREATE TABLE IF NOT EXISTS recipe(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        recipe_name TEXT NOT NULL UNIQUE,
        proteins INTEGER NOT NULL,
        fats INTEGER NOT NULL,
        carbohydrates TEXT NOT NULL,
        date TEXT NOT NULL
    )
`
db.run(query, [], (err) =>{
    err?console.log(err.message):console.log('oke');
})

const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('../proj.sqlite3', (err) =>{
    err?console.log(err.message):console.log('zbs');

})

db.serialize(()=>{
    db.run(`
    CREATE TABLE IF NOT EXISTS user(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE,
        name TEXT NOT NULL,
        password TEXT NOT NULL,
        email TEXT NOT NULL,
        date_of_create TEXT NOT NULL
    )
    `)
    db.run(`
    CREATE TABLE IF NOT EXISTS recipe(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        recipe_name TEXT NOT NULL UNIQUE,
        recipe_text TEXT NOT NULL,
        link_name TEXT NOT NULL UNIQUE,
        picture_link TEXT,
        proteins INTEGER NOT NULL,
        fats INTEGER NOT NULL,
        carbohydrates INTEGER NOT NULL,
        date TEXT NOT NULL,
        author TEXT,
        FOREIGN KEY(Author) REFERENCES user (username)
    )
    `)
})

db.close()

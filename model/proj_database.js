const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('./project.db', (err) => {
    err?console.log(err):console.log('Everything is working');
})

db.serialize(() =>{
    db.run(`
    CREATE TABLE IF NOT EXISTS user (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        Username TEXT NOT NULL UNIQUE,
        Name TEXT NOT NULL,
        Email TEXT NOT NULL UNIQUE,
        Password TEXT NOT NULL
    )
    `)
    db.run(`
    CREATE TABLE IF NOT EXISTS Recipe (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        Author TEXT NOT NULL,
        Recipe_name TEXT NOT NULL UNIQUE,
        Describe TEXT NOT NULL,
        Date TEXT NOT NULL
    )
    `)
})

db.close()
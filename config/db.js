const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.sqlite');

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    role TEXT DEFAULT 'user'
  )`);

  db.get("SELECT COUNT(*) as count FROM users", (err,row)=>{
    if(row.count===0){
      db.run(`INSERT INTO users(name,email,password,role)
      VALUES('Admin','admin@test.com','$2a$10$7EqJtq98hPqEX7fNZaFWoOHi7FQx2s3R9/9z0.o1p/7F2AB8kLzJe','admin')`);
    }
  });
});

module.exports = db;
``

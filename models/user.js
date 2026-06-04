const db = require('../config/db');

exports.create = (u,cb)=> db.run(
  'INSERT INTO users(name,email,password,role) VALUES(?,?,?,?)',
  [u.name,u.email,u.password,u.role],cb
);

exports.findByEmail = (email,cb)=> db.get(
  'SELECT * FROM users WHERE email=?',[email],cb
);

exports.getAll = (cb)=> db.all('SELECT * FROM users',cb);

exports.getById = (id,cb)=> db.get('SELECT * FROM users WHERE id=?',[id],cb);

exports.update = (u,cb)=> db.run(
  'UPDATE users SET name=?, email=?, role=? WHERE id=?',
  [u.name,u.email,u.role,u.id],cb
);

exports.delete = (id,cb)=> db.run('DELETE FROM users WHERE id=?',[id],cb);

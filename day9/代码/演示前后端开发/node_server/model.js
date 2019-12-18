const mysql = require('mysql')

const conn = mysql.createConnection({
  host: '127.0.0.1',
  database: 'sqlstudy',
  user: 'root',
  password: 'root'
})

module.exports = {
  getUserByName(name, callback) { // 用户名查重
    const sql = 'select count(*) as count from users where username=?'
    conn.query(sql, name, callback)
  },
  register(user, callback) { // 注册用户
    const sql = 'insert into users set ?'
    conn.query(sql, user, callback)
  }
}
/**
 * 1.创建连接对象
 * 2.开始连接（新版的MySQL会自动连接）
 * 3.执行sql语句
 * 4.关闭连接
 */
const mysql = require("mysql");

let conn = mysql.createConnection({
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "root",
  database: "gz35"
}); /* end createConnection */

// 开始连接。但是一般现在的版本都是默认自动做了这一步
conn.connect();

let sql = "select * from heros";

conn.query(sql, (err, result, filed) => {
  if (err) console.log(err);
  console.log(result);
  console.log(filed);
}); /* end query */

// 关闭连接
conn.end();

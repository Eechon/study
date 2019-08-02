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
}); /* end query */

conn.end();

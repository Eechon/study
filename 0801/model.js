const fs = require("fs");
const mysql = require("mysql");
module.exports = {
  getAllHero,
  getHeroById,
  writeFile,
  addNewHero,
  deleteHeroById
};

let conn = mysql.createConnection({
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "root",
  database: "test"
});

function addNewHero(data, callback) {
  let sql = `INSERT INTO heros SET \`img\`='${data.img}',\`name\`='${
    data.name
  }',\`gender\`='${data.gender}'`;
  conn.query(sql, (err, result) => {
    if (err) console.log(err);
    callback(result);
  });
}

function getAllHero(callback) {
  // fs.readFile("./data/heros.json", "utf-8", (err, data) => {
  //   if (err) console.log(err);
  //   let arr = JSON.parse(data);
  //   callback(arr);
  // });
  // 修改为从数据库读取数据，不使用heros了
  /* 
    1.创建连接
    2.准备sql语句，最好在Navicat里测试了语句可以之后在写入
  */
  let sql = `SELECT * FROM heros WHERE isDelete = 0`;
  conn.query(sql, (err, result) => {
    if (err) console.log(err);
    callback(result);
  });
}

function getHeroById(id, callback) {
  this.getAllHero(arr => {
    let target = arr.find(e => {
      return e.id == id;
    });
    callback(target);
  });
}

function writeFile(arr) {
  let content = JSON.stringify(arr);
  fs.writeFile("./data/heros.json", content, "utf-8", err => {
    if (err) console.log(err);
  });
}

function deleteHeroById(id, callback) {
  // 真删
  // let sql = `DELETE FROM heros WHERE id = ${id}`;
  // 假删
  let sql = `UPDATE heros SET isDelete = 1 WHERE id = ${id}`;
  conn.query(sql, (err, result) => {
    if (err) console.log(err);
    callback(result);
  });
}

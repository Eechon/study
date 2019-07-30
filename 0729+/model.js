/**
 * 数据模型层
 * 文件的读取和写入
 */

//  model是读写数据的，当然要fs模块了
const fs = require("fs");

let model = {
  getAllHero: function(array) {
    fs.readFile("./data/heros.json", "utf-8", (err, data) => {
      if (err) console.log(err);
      let arr = JSON.parse(data);
      callback(arr);
    });
  },
  writeFile: function(arr) {
    let content = JSON.stringify(arr);
    fs.writeFile("./data/heros.json", content, "utf-8", err => {
      if (err) console.log(err);
    });
  },
  
};

module.exports = model;

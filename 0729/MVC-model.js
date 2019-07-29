/**
 * 数据模型层
 *  读取数据，返回函数
 */

const fs = require("fs");

let model = {
  getAllHero: function(callback) {
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
  getMaxId: function(callback) {
    this.getAllHero(arr => {
      let id = arr[0].id;
      for (let i = 1; i < arr.length; i++) {
        if (arr[i].id > id) {
          id = arr[i].id;
        }
      }
      callback(id);
    });
  }
};

module.exports = model;

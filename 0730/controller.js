// const fs = require("fs");
// 引入model
const model = require("./model");

let controller = {
  getIndex(req, res) {
    // fs.readFile("./data/heros.json", "utf-8", (err, data) => {
    //   if (err) console.log(err);
    //   let arr = JSON.parse(data);
    //   // 使用express提供的渲染方法渲染
    //   res.render("index", { arr });
    // });
    model.getAllHero(arr => {
      res.render("index", { arr });
    });
  }
};

module.exports = controller;

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
  },
  deleteHeroById(req, res) {
    let id = req.query.id;
    model.getAllHero(arr => {
      let isExit = arr.findIndex(e => {
        return e.id == id;
      });
      isExit != -1 ? arr.splice(isExit, 1) : 0;
      model.writeFile(arr);
      res.send({ code: 200, msg: "成功" });
    });
  },
  getAdd(req, res) {
    // made还能给模版引擎读？这是没有变量的普通页面
    res.render("add");
  },
  addNewHero(req, res) {
    model 
  }
};

module.exports = controller;

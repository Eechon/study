/**
 * 业务逻辑层:处理请求，并返回请求
 * 数据处理交给model层
 *
 */

const fs = require("fs");
const template = require("art-template");
const queryString = require("querystring");
const model = require("./MVC-model");

let controller = {
  staticResource: function(req, res) {
    // 读取静态资源，如果静态资源是css，就加头，
    if (req.url.endsWith(".css")) {
      res.setHeader("Content-Type", "text/css;charset=utf-8");
    }
    fs.readFile(__dirname + req.url, (err, data) => {
      if (err) console.log(err);
      res.end(data);
    });
  },
  getIndexHtml: function() {
    // 主页，获取英雄就行了
    model.getAllHero(function(array) {
      // 获取英雄数据之后，导入模版中，服务器端渲染页面
      let html = template(__dirname + "/views/index.html", { array });
      res.end(html);
    });
  },
  getAddHtml: function(req, res) {
    fs.readFile("./views/add.html", (err, data) => {
      /* 如果是add.html ，这个页面是没有动态数据的，所以直接读取就好了 */
      if (err) console.log(err);
      res.end(data);
    });
  },
  addNewHero: function(req, res) {
    // post传输数据是一块一块传输的，所以需要和并到一起
    let data = "";
    req.on("data", chunck => {
      //注册一个data时间， 这个事件是正在接受数据事件
      // 把每次接收到的数据，合并到一起
      data += chunck;
    });
    req.on("end", () => {
      // 先前data事件得到的数据是一个url编码的格式，需要解析成对象
      data = queryString.parse(data);
      model.getAllHero(arr => {
        model.getMaxId(maxId => {
          data.id = maxId + 1;
          // 数据合并
          arr.push(data);
          model.writeFile(arr);
          let result = { code: 200, msg: "成功" };
          res.end(JSON.stringify(result));
        });
      });
    });
  }
};

module.exports = controller;

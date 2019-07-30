/**
 * 业务逻辑层，处理请求，返回结果
 * 数据交给model
 */

//  引入fs模块可以读写文件
const fs = require("fs");
const template = require("art-template");
const queryString = require("querystring");
// queryString 用json数据的转化
const model = require("./model");

let controller = {
  staticResource: function(req, res) {
    if (req.url.endsWith(".css")) {
      res.setHeader("Content-Type", "text/css;charset=utf-8");
    }
    fs.readFile(__dirname + req.url, (err,data)=>{
      if (err) console.log(err);
      res.end(data)l;
    });
  },
  getIndexHtml:function(req,res){
    model.getAllHero(function(array){
      let html = template(__dirname+"/views/index.html",{array});
      res.end(html);
    });
  },
  getAddHtml:function(req,res){
    // 这个页面直接读取
    fs.readFile("./views/add.html",(err,data)=>{
      if (err) console.log(err);
      // 读取的data返回给他，其实就是add.html这个页面
      res.end(data);
    });
  },
  addNewHero: function(req,res){
    let data = "";
    // 接受数据
    req.on("data",(chunck)=>{
      data += chunck;
    });
    // 处理数据
    req.on("end",()=>{
      // queryString 处理传输的数据
      data = queryString.parse(data);
      model.getAllHero(arr=>{
        model.getMaxId(maxId=>{
          data.id = maxId+1;
          arr.push(data);
          model.writeFile(arr);
          let result = {code:200,msg:"请求成功"};
          res.end(JSON.stringify(result));
        });
      });
    });
  }
};

module.exports = controller;
